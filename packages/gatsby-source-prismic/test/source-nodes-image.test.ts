import test from "ava";
import * as sinon from "sinon";
import * as mswNode from "msw/node";
import * as prismicM from "@prismicio/mock";

import { createAPIQueryMockedRequest } from "./__testutils__/createAPIQueryMockedRequest";
import { createAPIRepositoryMockedRequest } from "./__testutils__/createAPIRepositoryMockedRequest";
import { createGatsbyContext } from "./__testutils__/createGatsbyContext";
import { createMockCustomTypeModelWithFields } from "./__testutils__/createMockCustomTypeModelWithFields";
import { createPluginOptions } from "./__testutils__/createPluginOptions";

import { createSchemaCustomization, sourceNodes } from "../src/gatsby-node";

const server = mswNode.setupServer();
test.before(() => server.listen({ onUnhandledRequest: "error" }));
test.after(() => server.close());

test("image fields with images are normalized to include localFile field id", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	const customTypeModel = createMockCustomTypeModelWithFields(t, {
		image: prismicM.model.image({
			seed: t.title,
			thumbnailsCount: 1,
		}),
	});
	// A known ID is needed to test the type name later in the test.
	customTypeModel.id = "foo";
	const thumbnailName =
		customTypeModel.json.Main.image.config.thumbnails[0].name;
	const documentWithImage = prismicM.value.document({
		seed: t.title,
		model: customTypeModel,
	});
	const documentWithoutImage = prismicM.value.document({
		seed: t.title,
		model: customTypeModel,
	});
	documentWithoutImage.data.image.url = null;
	documentWithoutImage.data.image[thumbnailName].url = null;
	const repositoryResponse = prismicM.api.repository({ seed: t.title });
	const queryResponse = prismicM.api.query({
		seed: t.title,
		documents: [documentWithImage, documentWithoutImage],
	});

	pluginOptions.customTypeModels = [customTypeModel];
	pluginOptions.shouldDownloadFiles = {
		"foo.data.image": () => true,
		[`foo.data.image.${thumbnailName}`]: true,
	};

	server.use(
		createAPIRepositoryMockedRequest({
			pluginOptions: pluginOptions,
			repositoryResponse,
		}),
		createAPIQueryMockedRequest({
			pluginOptions,
			repositoryResponse,
			queryResponse,
		}),
	);

	// @ts-expect-error - Partial gatsbyContext provided
	await createSchemaCustomization(gatsbyContext, pluginOptions);
	// @ts-expect-error - Partial gatsbyContext provided
	await sourceNodes(gatsbyContext, pluginOptions);

	const createNodeStub = gatsbyContext.actions.createNode as sinon.SinonStub;

	t.true(
		createNodeStub.calledWith(
			sinon.match({
				prismicId: documentWithImage.id,
				data: sinon.match({
					image: sinon.match({
						localFile: sinon.match.string,
						[thumbnailName]: sinon.match({
							localFile: sinon.match.string,
						}),
					}),
				}),
			}),
		),
	);

	t.true(
		createNodeStub.calledWith(
			sinon.match({
				prismicId: documentWithoutImage.id,
				data: sinon.match({
					image: sinon.match({
						localFile: null,
						[thumbnailName]: sinon.match({
							localFile: null,
						}),
					}),
				}),
			}),
		),
	);
});

test("downloaded images remove the `auto` URL parameter", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	const customTypeModel = createMockCustomTypeModelWithFields(t, {
		image: prismicM.model.image({
			seed: t.title,
			thumbnailsCount: 1,
		}),
	});
	const thumbnailName =
		customTypeModel.json.Main.image.config.thumbnails[0].name;
	const document = prismicM.value.document({
		seed: t.title,
		model: customTypeModel,
	});

	// Add an `auto` URL parameter manually
	document.data.image.url = `${document.data.image.url}&auto=compress,format`;
	document.data.image[
		thumbnailName
	].url = `${document.data.image[thumbnailName].url}&auto=compress,format`;

	const repositoryResponse = prismicM.api.repository({ seed: t.title });
	const queryResponse = prismicM.api.query({
		seed: t.title,
		documents: [document],
	});

	pluginOptions.customTypeModels = [customTypeModel];
	pluginOptions.shouldDownloadFiles = true;

	server.use(
		createAPIRepositoryMockedRequest({
			pluginOptions: pluginOptions,
			repositoryResponse,
		}),
		createAPIQueryMockedRequest({
			pluginOptions,
			repositoryResponse,
			queryResponse,
		}),
	);

	// @ts-expect-error - Partial gatsbyContext provided
	await createSchemaCustomization(gatsbyContext, pluginOptions);
	// @ts-expect-error - Partial gatsbyContext provided
	await sourceNodes(gatsbyContext, pluginOptions);

	const createRemoteFileNodeCalls = (
		pluginOptions.createRemoteFileNode as sinon.SinonStub
	).getCalls();

	for (const call of createRemoteFileNodeCalls) {
		const url = new URL(call.firstArg.url);

		t.false(url.searchParams.has("auto"));
	}
});

test("downloaded image file nodes are cached and touched", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	const customTypeModel = createMockCustomTypeModelWithFields(t, {
		image: prismicM.model.image({
			seed: t.title,
			thumbnailsCount: 1,
		}),
	});
	const document = prismicM.value.document({
		seed: t.title,
		model: customTypeModel,
	});

	const repositoryResponse = prismicM.api.repository({ seed: t.title });
	const queryResponse = prismicM.api.query({
		seed: t.title,
		documents: [document],
	});

	pluginOptions.customTypeModels = [customTypeModel];
	pluginOptions.shouldDownloadFiles = true;

	server.use(
		createAPIRepositoryMockedRequest({
			pluginOptions: pluginOptions,
			repositoryResponse,
		}),
		createAPIQueryMockedRequest({
			pluginOptions,
			repositoryResponse,
			queryResponse,
		}),
	);

	// @ts-expect-error - Partial gatsbyContext provided
	await createSchemaCustomization(gatsbyContext, pluginOptions);
	// @ts-expect-error - Partial gatsbyContext provided
	await sourceNodes(gatsbyContext, pluginOptions);

	t.is((pluginOptions.createRemoteFileNode as sinon.SinonStub).callCount, 2);
	t.is((gatsbyContext.actions.touchNode as sinon.SinonStub).callCount, 2);

	// @ts-expect-error - Partial gatsbyContext provided
	await sourceNodes(gatsbyContext, pluginOptions);

	// createRemoteFileNode should not be called again since the nodes are cached
	t.is((pluginOptions.createRemoteFileNode as sinon.SinonStub).callCount, 2);
	t.is((gatsbyContext.actions.touchNode as sinon.SinonStub).callCount, 4);
});

test("images are not downloaded without configuring shouldDownloadFiles", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	const customTypeModel = createMockCustomTypeModelWithFields(t, {
		image: prismicM.model.image({
			seed: t.title,
			thumbnailsCount: 1,
		}),
	});
	const document = prismicM.value.document({
		seed: t.title,
		model: customTypeModel,
	});
	const repositoryResponse = prismicM.api.repository({ seed: t.title });
	const queryResponse = prismicM.api.query({
		seed: t.title,
		documents: [document],
	});

	pluginOptions.customTypeModels = [customTypeModel];

	server.use(
		createAPIRepositoryMockedRequest({
			pluginOptions,
			repositoryResponse,
		}),
		createAPIQueryMockedRequest({
			pluginOptions,
			repositoryResponse,
			queryResponse,
		}),
	);

	// @ts-expect-error - Partial gatsbyContext provided
	await createSchemaCustomization(gatsbyContext, pluginOptions);
	// @ts-expect-error - Partial gatsbyContext provided
	await sourceNodes(gatsbyContext, pluginOptions);

	t.is((pluginOptions.createRemoteFileNode as sinon.SinonStub).callCount, 0);
});
