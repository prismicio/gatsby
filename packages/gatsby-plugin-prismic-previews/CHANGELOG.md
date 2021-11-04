# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.3](https://github.com/prismicio/prismic-gatsby/compare/v5.0.2...v5.0.3) (2021-11-03)

**Note:** Version bump only for package gatsby-plugin-prismic-previews





## [5.0.2](https://github.com/prismicio/prismic-gatsby/compare/v5.0.1...v5.0.2) (2021-10-30)


### Bug Fixes

* **previews:** resolve CORS error with `@prismicio/client` ([1d66749](https://github.com/prismicio/prismic-gatsby/commit/1d6674912d5780de37d8cad78c56b59b0d83b92a))





## [5.0.1](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0...v5.0.1) (2021-10-29)


### Bug Fixes

* allow complete opt-in file downloading ([#470](https://github.com/prismicio/prismic-gatsby/issues/470)) ([c1b27b3](https://github.com/prismicio/prismic-gatsby/commit/c1b27b3003372dc258d5d9911e748a448b0e408d))





# [5.0.0](https://github.com/prismicio/prismic-gatsby/compare/v4.2.0...v5.0.0) (2021-10-21)


### Features

* support Gatsby 4 ([#466](https://github.com/prismicio/prismic-gatsby/issues/466)) ([d391580](https://github.com/prismicio/prismic-gatsby/commit/d391580a1ef5828b8bde018126eefdd859b54ae8))


### BREAKING CHANGES

* Changes to Gatsby's query runner requires the plugin to
download local files at bootstrap. Add a `shouldDownloadFiles` plugin
option if you use the `localFile` field for Image and Link fields.

* v5.0.0-alpha.0

* chore: link test-site to local packages

* chore: add publish:next script

* fix: provide better missing schema message

* style: run prettier

* chore: update dependencies

* v5.0.0-next.0

* chore: update gatsby-plugin-image

* v5.0.0-next.1

* chore: fix duplicated changelog

* fix: include gatsby-node.js on npm

* v5.0.0-next.2

* fix(previews): remove missing styles message

* v5.0.0-next.3

* chore: update gatsby, gatsby-plugin-image peer dep

* v5.0.0-next.4

* fix(previews): optional repositoryConfigs option for withPrismicPreviewResolver

* v5.0.0-next.5

* fix: move default function plugin options to Node APIs

* v5.0.0-next.6

* fix: use non-.mjs exports

This is primarily to support Storybook without special configuration.

* v5.0.0-next.7

* feat(source): move plugin option defaults to Gatsby Node APIs

* v5.0.0-next.8

* chore: update yarn.lock

* refactor: plugin options validation

* feat: improved plugin options validation messages

* chore: merge CHANGELOG

* feat: support pageSize plugin option

* chore: update dependencies

* fix: use updated @prismicio/helpers `asLink`

* v5.0.0-next.9

* fix(source): skip data field normalization for documents without data fields

* fix(previews): upgrade gatsby-source-prismic dependency

* v5.0.0-next.10

* fix(source): skip schema validation if Custom Types API is used

* v5.0.0-next.11

* fix: update peerDependencies for Gatsby 4

* chore: update test site dependencies

* chore: do not format CHANGELOG with prettier

* test: temporarily skip snapshot tests in CI

* test: explicitly pass CI-skipped tests





# [5.0.0-next.10](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.9...v5.0.0-next.10) (2021-10-20)


### Bug Fixes

* **previews:** upgrade gatsby-source-prismic dependency ([c8e8e35](https://github.com/prismicio/prismic-gatsby/commit/c8e8e358dfd03f87221877cc369e4bbebed53e43))





# [5.0.0-next.9](https://github.com/prismicio/prismic-gatsby/compare/v4.2.0...v5.0.0-next.9) (2021-10-15)


### Bug Fixes

* use updated @prismicio/helpers `asLink` ([9f3c93f](https://github.com/prismicio/prismic-gatsby/commit/9f3c93f520f38174724e2b74fb9cdb08a48e9e63))


### Features

* improved plugin options validation messages ([f7b7ff9](https://github.com/prismicio/prismic-gatsby/commit/f7b7ff9adb6f8f57a1f9fe52f9e79c93e7ef528c))
* support pageSize plugin option ([5cc03b3](https://github.com/prismicio/prismic-gatsby/commit/5cc03b302f5e9352fdf2472520b17e34c4cb2870))



# [5.0.0-next.7](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.6...v5.0.0-next.7) (2021-09-18)


### Bug Fixes

* use non-.mjs exports ([318789e](https://github.com/prismicio/prismic-gatsby/commit/318789eb766f2cd97ec0c6a791183ab9bc7a72ef))



# [5.0.0-next.5](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.4...v5.0.0-next.5) (2021-09-16)


### Bug Fixes

* **previews:** optional repositoryConfigs option for withPrismicPreviewResolver ([29b3363](https://github.com/prismicio/prismic-gatsby/commit/29b3363b5582aac2aac9abd288b6bcc65f68a23e))



# [5.0.0-next.4](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.3...v5.0.0-next.4) (2021-09-16)



# [5.0.0-next.3](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.2...v5.0.0-next.3) (2021-09-16)


### Bug Fixes

* **previews:** remove missing styles message ([00de4ca](https://github.com/prismicio/prismic-gatsby/commit/00de4ca6d253e7a670894a1ca42c8153ae1601a4))



# [5.0.0-next.0](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-alpha.0...v5.0.0-next.0) (2021-09-14)



# [5.0.0-alpha.0](https://github.com/prismicio/prismic-gatsby/compare/v4.1.3...v5.0.0-alpha.0) (2021-09-09)


### Bug Fixes

* **previews:** display correct package version in error modal ([00d3a6e](https://github.com/prismicio/prismic-gatsby/commit/00d3a6e69db6df6d6032688a1af4bd69699c0b3e))
* restore type path serialization ([907b3ee](https://github.com/prismicio/prismic-gatsby/commit/907b3eebb1fcf232c990c806de252f66a1a3a65a))
* setup runtime with correct config ([cf14441](https://github.com/prismicio/prismic-gatsby/commit/cf14441e927cd3b66ae295a892423b527db50333))
* use latest `@prismicio/client` ([0ea5cef](https://github.com/prismicio/prismic-gatsby/commit/0ea5cefdbb6ba50657c006c83a9305dd84f94f84))
* use serialized type paths ([ea5c427](https://github.com/prismicio/prismic-gatsby/commit/ea5c4275b85b8b988a7fca7284d44e0bef683362))


### Features

* add richText field to StructuredText fields ([f967015](https://github.com/prismicio/prismic-gatsby/commit/f967015382385e49bf5db0db3cb949e05bb0d000))
* initial parallelization support ([217c97f](https://github.com/prismicio/prismic-gatsby/commit/217c97f2242d0062b7f09c832d69c84545a600bf))
* **previews:** support Shared Slices ([2727b93](https://github.com/prismicio/prismic-gatsby/commit/2727b93be4e23d3c7fda4ec3ac02b5d5fd5d7a4f))
* **previews:** use new shared runtime ([0030398](https://github.com/prismicio/prismic-gatsby/commit/0030398846dc1a41fe034eb5ffc8ad784f974177))
* **previews:** use runtime throughout plugin ([937650b](https://github.com/prismicio/prismic-gatsby/commit/937650b522e06c36725f56229090d84b22307b26))
* **previews:** use shadow dom for style isolation ([f4e5448](https://github.com/prismicio/prismic-gatsby/commit/f4e5448fc6fabda20c06f3f26c0892e2a2fa59ac))
* support Gatsby 4 ([600e566](https://github.com/prismicio/prismic-gatsby/commit/600e5669c8bad99f75d5fce68b8b2ba57c11592a))


### BREAKING CHANGES

* Changes to Gatsby's query runner requires the plugin to
download local files at bootstrap. Add a `shouldDownloadFiles` plugin
option if you use the `localFile` field for Image and Link fields.





# [5.0.0-next.7](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.6...v5.0.0-next.7) (2021-09-18)


### Bug Fixes

* use non-.mjs exports ([318789e](https://github.com/prismicio/prismic-gatsby/commit/318789eb766f2cd97ec0c6a791183ab9bc7a72ef))





# [5.0.0-next.5](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.4...v5.0.0-next.5) (2021-09-16)


### Bug Fixes

* **previews:** optional repositoryConfigs option for withPrismicPreviewResolver ([29b3363](https://github.com/prismicio/prismic-gatsby/commit/29b3363b5582aac2aac9abd288b6bcc65f68a23e))





# [5.0.0-next.4](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.3...v5.0.0-next.4) (2021-09-16)

**Note:** Version bump only for package gatsby-plugin-prismic-previews





# [5.0.0-next.3](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-next.2...v5.0.0-next.3) (2021-09-16)


### Bug Fixes

* **previews:** remove missing styles message ([00de4ca](https://github.com/prismicio/prismic-gatsby/commit/00de4ca6d253e7a670894a1ca42c8153ae1601a4))





# [5.0.0-next.0](https://github.com/prismicio/prismic-gatsby/compare/v5.0.0-alpha.0...v5.0.0-next.0) (2021-09-14)

**Note:** Version bump only for package gatsby-plugin-prismic-previews





# [5.0.0-alpha.0](https://github.com/prismicio/prismic-gatsby/compare/v4.1.3...v5.0.0-alpha.0) (2021-09-09)


### Bug Fixes

* **previews:** display correct package version in error modal ([00d3a6e](https://github.com/prismicio/prismic-gatsby/commit/00d3a6e69db6df6d6032688a1af4bd69699c0b3e))
* restore type path serialization ([907b3ee](https://github.com/prismicio/prismic-gatsby/commit/907b3eebb1fcf232c990c806de252f66a1a3a65a))
* setup runtime with correct config ([cf14441](https://github.com/prismicio/prismic-gatsby/commit/cf14441e927cd3b66ae295a892423b527db50333))
* use latest `@prismicio/client` ([0ea5cef](https://github.com/prismicio/prismic-gatsby/commit/0ea5cefdbb6ba50657c006c83a9305dd84f94f84))
* use serialized type paths ([ea5c427](https://github.com/prismicio/prismic-gatsby/commit/ea5c4275b85b8b988a7fca7284d44e0bef683362))


### Features

* add richText field to StructuredText fields ([f967015](https://github.com/prismicio/prismic-gatsby/commit/f967015382385e49bf5db0db3cb949e05bb0d000))
* initial parallelization support ([217c97f](https://github.com/prismicio/prismic-gatsby/commit/217c97f2242d0062b7f09c832d69c84545a600bf))
* **previews:** support Shared Slices ([2727b93](https://github.com/prismicio/prismic-gatsby/commit/2727b93be4e23d3c7fda4ec3ac02b5d5fd5d7a4f))
* **previews:** use new shared runtime ([0030398](https://github.com/prismicio/prismic-gatsby/commit/0030398846dc1a41fe034eb5ffc8ad784f974177))
* **previews:** use runtime throughout plugin ([937650b](https://github.com/prismicio/prismic-gatsby/commit/937650b522e06c36725f56229090d84b22307b26))
* **previews:** use shadow dom for style isolation ([f4e5448](https://github.com/prismicio/prismic-gatsby/commit/f4e5448fc6fabda20c06f3f26c0892e2a2fa59ac))
* support Gatsby 4 ([600e566](https://github.com/prismicio/prismic-gatsby/commit/600e5669c8bad99f75d5fce68b8b2ba57c11592a))


### BREAKING CHANGES

* Changes to Gatsby's query runner requires the plugin to
download local files at bootstrap. Add a `shouldDownloadFiles` plugin
option if you use the `localFile` field for Image and Link fields.





# [4.2.0](https://github.com/prismicio/gatsby/compare/v4.1.7...v4.2.0) (2021-10-04)


### Features

* add `pageSize` option ([#456](https://github.com/prismicio/gatsby/issues/456)) ([72d6a68](https://github.com/prismicio/gatsby/commit/72d6a6860262293d3ade374387ac9ffa07b629da))





## [4.1.7](https://github.com/prismicio/gatsby/compare/v4.1.6...v4.1.7) (2021-10-01)


### Bug Fixes

* update dependencies ([57ceb56](https://github.com/prismicio/gatsby/commit/57ceb5625bbfb989745845c50d770bca659ae4c1))





## [4.1.3](https://github.com/prismicio/gatsby/compare/v4.1.2...v4.1.3) (2021-09-01)


### Bug Fixes

* **previews:** wait for bootstrap to complete before merging data ([4b9bfe4](https://github.com/prismicio/gatsby/commit/4b9bfe4594810bf3b4de919ed0b3c967c20b4382))





## [4.1.2](https://github.com/prismicio/gatsby/compare/v4.1.1...v4.1.2) (2021-08-25)

### Bug Fixes

- image field proxy types ([91e07eb](https://github.com/prismicio/gatsby/commit/91e07eb91275db18312193c1b39cfbbbf1f3fb7a))
- lock `@prismicio/client` version ([43e7795](https://github.com/prismicio/gatsby/commit/43e77957ed579ae1519699278c56522da5b8c75a))

## [4.1.1](https://github.com/prismicio/gatsby/compare/v4.1.0...v4.1.1) (2021-08-25)

### Bug Fixes

- **previews:** treat null link fields as valid ([#433](https://github.com/prismicio/gatsby/issues/433)) ([4e6cc1d](https://github.com/prismicio/gatsby/commit/4e6cc1db493baa13d7b74b7f95c52c30f55a149d))

# [4.1.0](https://github.com/prismicio/gatsby/compare/v4.0.3...v4.1.0) (2021-08-18)

**Note:** Version bump only for package gatsby-plugin-prismic-previews

## [4.0.3](https://github.com/prismicio/gatsby/compare/v4.0.2...v4.0.3) (2021-07-28)

### Bug Fixes

- **previews:** catch error when a field type cannot be found ([352c923](https://github.com/prismicio/gatsby/commit/352c9238c51166863134aed823ae609807be6b01))

## [4.0.2](https://github.com/prismicio/gatsby/compare/v4.0.1...v4.0.2) (2021-07-27)

### Bug Fixes

- correctly resolve fields with transformed names ([#415](https://github.com/prismicio/gatsby/issues/415)) ([1c7907f](https://github.com/prismicio/gatsby/commit/1c7907f420e22b99d3c6009d85c443e2a00fa414))

## [4.0.1](https://github.com/prismicio/gatsby/compare/v4.0.0...v4.0.1) (2021-07-20)

**Note:** Version bump only for package gatsby-plugin-prismic-previews

# [4.0.0](https://github.com/angeloashmore/gatsby-source-prismic/compare/v3.3.6...v4.0.0) (2021-07-20)

### Features

- v4.0.0 ([#408](https://github.com/angeloashmore/gatsby-source-prismic/issues/408)) ([407887f](https://github.com/angeloashmore/gatsby-source-prismic/commit/407887f2a039346420d4238beb8866dd33d230f8)), closes [#334](https://github.com/angeloashmore/gatsby-source-prismic/issues/334) [#335](https://github.com/angeloashmore/gatsby-source-prismic/issues/335) [#349](https://github.com/angeloashmore/gatsby-source-prismic/issues/349) [#350](https://github.com/angeloashmore/gatsby-source-prismic/issues/350) [#352](https://github.com/angeloashmore/gatsby-source-prismic/issues/352) [#353](https://github.com/angeloashmore/gatsby-source-prismic/issues/353) [#359](https://github.com/angeloashmore/gatsby-source-prismic/issues/359) [#360](https://github.com/angeloashmore/gatsby-source-prismic/issues/360) [#351](https://github.com/angeloashmore/gatsby-source-prismic/issues/351) [#364](https://github.com/angeloashmore/gatsby-source-prismic/issues/364) [#371](https://github.com/angeloashmore/gatsby-source-prismic/issues/371) [#375](https://github.com/angeloashmore/gatsby-source-prismic/issues/375) [#383](https://github.com/angeloashmore/gatsby-source-prismic/issues/383) [#405](https://github.com/angeloashmore/gatsby-source-prismic/issues/405) [#406](https://github.com/angeloashmore/gatsby-source-prismic/issues/406)

# [4.0.0-beta.22](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.21...v4.0.0-beta.22) (2021-07-13)

### Bug Fixes

- update all dependencies ([66f71b5](https://github.com/angeloashmore/gatsby-source-prismic/commit/66f71b5fb44e4443a1cce6de884ca6627747dab8))

# [4.0.0-beta.21](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.20...v4.0.0-beta.21) (2021-07-08)

### Bug Fixes

- properly decode image URLs ([#405](https://github.com/angeloashmore/gatsby-source-prismic/issues/405)) ([6df0059](https://github.com/angeloashmore/gatsby-source-prismic/commit/6df00597389a2743b70760a6449655615f92299c))

### Features

- **previews:** warn when provider and styles are missing ([87c4f7b](https://github.com/angeloashmore/gatsby-source-prismic/commit/87c4f7b21f65e1a2c8c15c850ca57fa60912032e))

# [4.0.0-beta.20](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.19...v4.0.0-beta.20) (2021-06-28)

**Note:** Version bump only for package gatsby-plugin-prismic-previews

# [4.0.0-beta.19](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.18...v4.0.0-beta.19) (2021-06-28)

### Bug Fixes

- fetch uncached typepaths ([deaaaa3](https://github.com/angeloashmore/gatsby-source-prismic/commit/deaaaa33c54bb11fdb2ff46da1ae4adf4c8cd68e))

# [4.0.0-beta.18](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.17...v4.0.0-beta.18) (2021-06-09)

### Features

- **previews:** add `localFile.publicURL` to images ([d52af64](https://github.com/angeloashmore/gatsby-source-prismic/commit/d52af6427c0e564906ed3303392338df03963d36))

# [4.0.0-beta.17](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.16...v4.0.0-beta.17) (2021-06-09)

### Bug Fixes

- prepare imgix URLs by removing query params ([3178489](https://github.com/angeloashmore/gatsby-source-prismic/commit/3178489761b5720bde60845a71296a9955f027da))

# [4.0.0-beta.16](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.15...v4.0.0-beta.16) (2021-06-08)

### Bug Fixes

- **previews:** use better missing config message ([732e061](https://github.com/angeloashmore/gatsby-source-prismic/commit/732e061aef66bd5409cfe57e403b83cdc5eb5b28))

# [4.0.0-beta.15](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.14...v4.0.0-beta.15) (2021-06-08)

**Note:** Version bump only for package gatsby-plugin-prismic-previews

# [4.0.0-beta.14](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.13...v4.0.0-beta.14) (2021-06-08)

### Bug Fixes

- **previews:** add \_\_typename to match GraphQL API ([cf75c7a](https://github.com/angeloashmore/gatsby-source-prismic/commit/cf75c7af0589c848b2faf385e8ffee48a347fd36))

# [4.0.0-beta.13](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.12...v4.0.0-beta.13) (2021-06-01)

### Bug Fixes

- **previews:** restore content relation document field ([7eebe51](https://github.com/angeloashmore/gatsby-source-prismic/commit/7eebe51ee0fbc9abf2c92411f19dd91329686e99))

# [4.0.0-beta.12](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.11...v4.0.0-beta.12) (2021-06-01)

### Bug Fixes

- support Node.js 12 fs module ([e120087](https://github.com/angeloashmore/gatsby-source-prismic/commit/e120087f47a36bc24ea2d85b3fa714fcc0a23a9e))

# [4.0.0-beta.11](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.10...v4.0.0-beta.11) (2021-06-01)

### Bug Fixes

- **previews:** handle documents without data ([0239cd2](https://github.com/angeloashmore/gatsby-source-prismic/commit/0239cd28b42f0ad9717fecd171af9ee106cf8471)), closes [#383](https://github.com/angeloashmore/gatsby-source-prismic/issues/383)

# [4.0.0-beta.10](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.9...v4.0.0-beta.10) (2021-06-01)

**Note:** Version bump only for package gatsby-plugin-prismic-previews

# [4.0.0-beta.9](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.8...v4.0.0-beta.9) (2021-05-29)

### Bug Fixes

- **previews:** sanitize all image field URLs ([ddaef3f](https://github.com/angeloashmore/gatsby-source-prismic/commit/ddaef3f61d1d6715293f0bdf143bd00b46348544))

# [4.0.0-beta.8](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.7...v4.0.0-beta.8) (2021-05-29)

### Bug Fixes

- decode image URLs ([85deba5](https://github.com/angeloashmore/gatsby-source-prismic/commit/85deba5b05a7a37d5c343c05a3b1137c00988a22))

# [4.0.0-beta.7](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.6...v4.0.0-beta.7) (2021-05-28)

### Bug Fixes

- use properly escaped regex ([020717e](https://github.com/angeloashmore/gatsby-source-prismic/commit/020717e8521b2571a8b1b17ee9fedbef0107b58f))

# [4.0.0-beta.6](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.5...v4.0.0-beta.6) (2021-05-28)

### Bug Fixes

- manually handle spaces in image URLs ([2acad02](https://github.com/angeloashmore/gatsby-source-prismic/commit/2acad02975f9a0562e02b1586d5e8afea5e89d5d))

# [4.0.0-beta.5](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.4...v4.0.0-beta.5) (2021-05-28)

### Bug Fixes

- disable automatic PrismicPreviewProvider injection ([7638988](https://github.com/angeloashmore/gatsby-source-prismic/commit/7638988aa6aea4d2ac6bdba3eacc6c8156691107))

# [4.0.0-beta.4](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.3...v4.0.0-beta.4) (2021-05-28)

**Note:** Version bump only for package gatsby-plugin-prismic-previews

# [4.0.0-beta.3](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.2...v4.0.0-beta.3) (2021-05-28)

### Bug Fixes

- **previews:** position modal at maximum z-index ([38df712](https://github.com/angeloashmore/gatsby-source-prismic/commit/38df7125cbdb6a5d06b3e1869b1d238fba99579c))

# [4.0.0-beta.2](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2021-05-28)

### Bug Fixes

- support images in Rich Text previews ([3234a83](https://github.com/angeloashmore/gatsby-source-prismic/commit/3234a8396693ce2250287dd46c106a39d34f9a88))

# [4.0.0-beta.1](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-beta.0...v4.0.0-beta.1) (2021-05-28)

### Bug Fixes

- pass path to image field proxy ([89ade0e](https://github.com/angeloashmore/gatsby-source-prismic/commit/89ade0e8660edce7cd3461f3337efda757302ead))
- pass path to image proxy ([6a84bc9](https://github.com/angeloashmore/gatsby-source-prismic/commit/6a84bc91ee3919f4f78062a43bee17ffe44b7017))

### Features

- print failed field refinement path ([78d88cf](https://github.com/angeloashmore/gatsby-source-prismic/commit/78d88cf8d1764db9e0d25965752328a365d2dc01))

# [4.0.0-beta.0](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-alpha.12...v4.0.0-beta.0) (2021-05-26)

**Note:** Version bump only for package gatsby-plugin-prismic-previews

# [4.0.0-alpha.12](https://github.com/angeloashmore/gatsby-source-prismic/compare/v4.0.0-alpha.11...v4.0.0-alpha.12) (2021-05-26)

### Bug Fixes

- retain existing Imgix URL parameters on images ([#375](https://github.com/angeloashmore/gatsby-source-prismic/issues/375)) ([f812d2e](https://github.com/angeloashmore/gatsby-source-prismic/commit/f812d2eca08d98d1ffa93e636839404dff8ecebd))
