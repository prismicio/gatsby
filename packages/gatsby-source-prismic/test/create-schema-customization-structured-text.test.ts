import test from "ava";
import * as sinon from "sinon";
import * as gatsby from "gatsby";

import { createGatsbyContext } from "./__testutils__/createGatsbyContext";
import { createPluginOptions } from "./__testutils__/createPluginOptions";
import { findCreateTypesCall } from "./__testutils__/findCreateTypesCall";

import { createSchemaCustomization } from "../src/gatsby-node";

const noop = () => void 0;

test("creates base type", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	t.true(
		(gatsbyContext.actions.createTypes as sinon.SinonStub).calledWith({
			kind: "OBJECT",
			config: sinon.match({
				name: "PrismicPrefixStructuredTextType",
				fields: {
					text: sinon.match({
						type: "String",
						resolve: sinon.match.func,
					}),
					html: sinon.match({
						type: "String",
						resolve: sinon.match.func,
					}),
					richText: sinon.match({
						type: "PrismicStructuredText!",
						resolve: sinon.match.func,
					}),
					raw: sinon.match({
						type: "PrismicStructuredText!",
						resolve: sinon.match.func,
					}),
				},
			}),
		}),
	);
});

test("text field resolves to text", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	const call = findCreateTypesCall(
		"PrismicPrefixStructuredTextType",
		gatsbyContext.actions.createTypes as sinon.SinonStub,
	);
	const field = [{ type: "paragraph", text: "Rich Text", spans: [] }];
	const resolver = call.config.fields.text.resolve;
	const res = await resolver(field);

	t.true(res === "Rich Text");
});

test("html field resolves to html", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	delete pluginOptions.htmlSerializer;

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	const call = findCreateTypesCall(
		"PrismicPrefixStructuredTextType",
		gatsbyContext.actions.createTypes as sinon.SinonStub,
	);
	const field = [{ type: "paragraph", text: "Rich Text", spans: [] }];
	const resolver = call.config.fields.html.resolve;
	const res = await resolver(field);

	t.true(res === "<p>Rich Text</p>");
});

test("html field uses htmlSerializer if provided", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	const call = findCreateTypesCall(
		"PrismicPrefixStructuredTextType",
		gatsbyContext.actions.createTypes as sinon.SinonStub,
	);
	const field = [{ type: "paragraph", text: "Rich Text", spans: [] }];
	const resolver = call.config.fields.html.resolve;
	const res = await resolver(field);

	t.true(res === "htmlSerializer");
});

test("richText field resolves to richText value", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	const call = findCreateTypesCall(
		"PrismicPrefixStructuredTextType",
		gatsbyContext.actions.createTypes as sinon.SinonStub,
	);
	const field = [{ type: "paragraph", text: "Rich Text", spans: [] }];
	const resolver = call.config.fields.richText.resolve;
	const res = await resolver(field);

	t.true(res === field);
});

test("raw field resolves to raw value", async (t) => {
	const gatsbyContext = createGatsbyContext();
	const pluginOptions = createPluginOptions(t);

	await createSchemaCustomization(
		gatsbyContext as gatsby.CreateSchemaCustomizationArgs,
		pluginOptions,
		noop,
	);

	const call = findCreateTypesCall(
		"PrismicPrefixStructuredTextType",
		gatsbyContext.actions.createTypes as sinon.SinonStub,
	);
	const field = [{ type: "paragraph", text: "Rich Text", spans: [] }];
	const resolver = call.config.fields.raw.resolve;
	const res = await resolver(field);

	t.true(res === field);
});
