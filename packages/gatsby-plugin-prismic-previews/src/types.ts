import * as gatsby from "gatsby";
import * as imgixGatsby from "@imgix/gatsby";
import * as gatsbyPrismic from "gatsby-source-prismic";
import * as prismic from "@prismicio/client";
import * as prismicT from "@prismicio/types";
import * as prismicH from "@prismicio/helpers";
import { SetRequired } from "type-fest";

/**
 * A universal API to make network requests. A subset of the `fetch()` API.
 */
export type FetchLike = (
	input: string,
	init?: RequestInitLike,
) => Promise<ResponseLike>;

/**
 * The minimum required properties from RequestInit.
 */
export interface RequestInitLike extends prismic.RequestInitLike {
	cache?: RequestCache;
}

/**
 * The minimum required properties from Response.
 */
export interface ResponseLike extends prismic.ResponseLike {
	text(): Promise<string>;
}

export interface PluginOptions extends gatsby.PluginOptions {
	repositoryName: string;
	accessToken?: string;
	promptForAccessToken?: boolean;
	apiEndpoint: string;
	routes?: prismic.Route[];
	graphQuery?: string;
	fetchLinks?: string[];
	lang: string;
	pageSize?: number;
	imageImgixParams: imgixGatsby.ImgixUrlParams;
	imagePlaceholderImgixParams: imgixGatsby.ImgixUrlParams;
	typePrefix?: string;
	toolbar: "new" | "legacy";
	plugins: [];
	writeTypePathsToFilesystem: (
		args: WriteTypePathsToFilesystemArgs,
	) => void | Promise<void>;
}

export type WriteTypePathsToFilesystemArgs = {
	publicPath: string;
	serializedTypePaths: string;
};

// TODO: Delete
export interface PrismicAPIDocumentNodeInput<
	TData = prismicT.PrismicDocument["data"],
> extends prismicT.PrismicDocument<TData>,
		gatsby.NodeInput {
	prismicId: string;
}

export type FieldNameTransformer = (fieldName: string) => string;

export type UnknownRecord<K extends PropertyKey = PropertyKey> = Record<
	K,
	unknown
>;

export type PrismicRepositoryConfigs = PrismicRepositoryConfig[];

export type PrismicUnpublishedRepositoryConfig = SetRequired<
	PrismicRepositoryConfig,
	"componentResolver"
>;

export type PrismicUnpublishedRepositoryConfigs =
	PrismicUnpublishedRepositoryConfig[];

export type PrismicRepositoryConfig = {
	/**
	 * Name of the repository to be configured.
	 */
	repositoryName: string;

	/**
	 * Link Resolver for the repository. This should be the same Link Resolver
	 * provided to `gatsby-source-prismic`'s plugin options.
	 */
	linkResolver?: prismicH.LinkResolverFunction;

	/**
	 * HTML Serializer for the repository. This should be the same HTML Serializer
	 * provided to `gatsby-source-prismic`'s plugin options.
	 */
	htmlSerializer?: prismicH.HTMLMapSerializer | prismicH.HTMLFunctionSerializer;

	/**
	 * Field name transformer for the repository. This should be the same function
	 * provided to `gatsby-source-prismic`'s `transformFieldName` plugin option.
	 *
	 * @param fieldName - Field name to transform.
	 *
	 * @returns Transformed version of `fieldName`.
	 */
	transformFieldName?: FieldNameTransformer;

	/**
	 * Determines the React component to render during an unpublished preview.
	 * This function will be provided a list of nodes whose `url` field (computed
	 * using your app's Link Resolver) matches the page's URL.
	 *
	 * @param nodes - List of nodes whose `url` field matches the page's URL.
	 *
	 * @returns The React component to render. If no component is returned, the
	 *   wrapped component will be rendered.
	 */
	componentResolver?<P>(
		nodes: gatsbyPrismic.NormalizedDocumentValue[],
	): React.ComponentType<P> | undefined | null;

	/**
	 * Determines the data passed to a Gatsby page during an unpublished preview.
	 * The value returned from this function is passed directly to the `data` prop.
	 *
	 * @param nodes - List of nodes that have URLs resolved to the current page.
	 * @param data - The original page's `data` prop.
	 *
	 * @returns The value that will be passed to the page's `data` prop.
	 */
	dataResolver?<TData extends Record<string, unknown>>(
		nodes: gatsbyPrismic.NormalizedDocumentValue[],
		data: TData,
	): Record<string, unknown>;
};
