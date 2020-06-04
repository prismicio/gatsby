import { graphql } from 'gatsby'

export const GatsbyPrismicImageFixed = graphql`
  fragment GatsbyPrismicImageFixed on PrismicImageFixedType {
    base64
    width
    height
    src
    srcSet
  }
`

export const GatsbyPrismicImageFixed_noBase64 = graphql`
  fragment GatsbyPrismicImageFixed_noBase64 on PrismicImageFixedType {
    width
    height
    src
    srcSet
  }
`

// Not actually necessary since applying `auto=format` to the source URL
// automatically returns WebP for all URLs.
export const GatsbyPrismicImageFixed_withWebp = graphql`
  fragment GatsbyPrismicImageFixed_withWebp on PrismicImageFixedType {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

// Not actually necessary since applying `auto=format` to the source URL
// automatically returns WebP for all URLs.
export const GatsbyPrismicImageFixed_withWebp_noBase64 = graphql`
  fragment GatsbyPrismicImageFixed_withWebp_noBase64 on PrismicImageFixedType {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

export const GatsbyPrismicImageFluid = graphql`
  fragment GatsbyPrismicImageFluid on PrismicImageFluidType {
    base64
    width
    height
    src
    srcSet
  }
`

export const GatsbyPrismicImageFluid_noBase64 = graphql`
  fragment GatsbyPrismicImageFluid_noBase64 on PrismicImageFluidType {
    width
    height
    src
    srcSet
  }
`

// Not actually necessary since applying `auto=format` to the source URL
// automatically returns WebP for all URLs.
export const GatsbyPrismicImageFluid_withWebp = graphql`
  fragment GatsbyPrismicImageFluid_withWebp on PrismicImageFluidType {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

// Not actually necessary since applying `auto=format` to the source URL
// automatically returns WebP for all URLs.
export const GatsbyPrismicImageFluid_withWebp_noBase64 = graphql`
  fragment GatsbyPrismicImageFluid_withWebp_noBase64 on PrismicImageFluidType {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
