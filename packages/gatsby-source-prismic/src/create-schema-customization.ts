import * as gatsby from 'gatsby'
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import * as E from 'fp-ts/Either'
import { pipe, constVoid } from 'fp-ts/function'

import { createAllDocumentTypesType } from './lib/createAllDocumentTypesType'
import { createCustomType } from './lib/createCustomType'
import { createTypes } from './lib/createTypes'
import { throwError } from './lib/throwError'
import { writeTypePathsToCache } from './lib/writeTypePathsToCache'

import { buildLinkTypeEnumType } from './builders/buildLinkTypeEnumType'
import { buildGeoPointType } from './builders/buildGeoPointType'
import { buildImageThumbnailType } from './builders/buildImageThumbnailType'
import { buildImageDimensionsType } from './builders/buildImageDimensionsType'

import { Dependencies, PluginOptions } from './types'
import { buildDependencies } from './buildDependencies'

export const createBaseTypes: RTE.ReaderTaskEither<
  Dependencies,
  never,
  void
> = pipe(
  [
    buildLinkTypeEnumType,
    buildGeoPointType,
    buildImageDimensionsType,
    buildImageThumbnailType,
  ],
  A.sequence(RTE.readerTaskEither),
  RTE.chain(createTypes),
  RTE.map(constVoid),
)

const createCustomTypes: RTE.ReaderTaskEither<
  Dependencies,
  never,
  gatsby.GatsbyGraphQLObjectType[]
> = pipe(
  RTE.asks((deps: Dependencies) => deps.pluginOptions.schemas),
  RTE.map(R.mapWithIndex(createCustomType)),
  RTE.chain(R.sequence(RTE.readerTaskEither)),
  RTE.map(R.collect((_, value) => value)),
)

/**
 * To be executed in the `createSchemaCustomization` stage.
 */
const createSchemaCustomizationProgram: RTE.ReaderTaskEither<
  Dependencies,
  never,
  void
> = pipe(
  RTE.ask<Dependencies>(),
  RTE.chainFirst(() => createBaseTypes),
  RTE.bind('types', () => createCustomTypes),
  RTE.chainFirst((scope) => createAllDocumentTypesType(scope.types)),
  RTE.chainFirst(() => writeTypePathsToCache),
  RTE.map(constVoid),
)

export const createSchemaCustomization: NonNullable<
  gatsby.GatsbyNode['createSchemaCustomization']
> = async (
  gatsbyContext: gatsby.CreateSchemaCustomizationArgs,
  pluginOptions: PluginOptions,
) =>
  pipe(
    await RTE.run(
      createSchemaCustomizationProgram,
      buildDependencies(gatsbyContext, pluginOptions),
    ),
    E.fold(throwError, constVoid),
  )
