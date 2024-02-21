import { request, gql } from 'graphql-request'

const MASTER_URL =
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clspsnmch0mbm01w7lgb3nkke/master'
const GetSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders1 {
        id
        name
        image {
          url
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result
}

const GetCategory = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        title
        image {
          url
        }
      }
    }
  `

  const result = await request(MASTER_URL, query)
  return result
}

export default {
  GetSlider,
  GetCategory,
}
