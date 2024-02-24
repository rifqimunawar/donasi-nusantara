import { request, gql } from 'graphql-request'

const MASTER_URL =
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clspsnmch0mbm01w7lgb3nkke/master'

const LIST_BLOGS_URL = 'https://pmiismart.iconnet-operation.com/api/listBlogs'

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

const GetListBlog = async () => {
  try {
    const response = await fetch(LIST_BLOGS_URL)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(
      'There was a problem with the fetch operation:',
      error.message
    )
    throw error
  }
}

export default {
  GetSlider,
  GetCategory,
  GetListBlog,
}
