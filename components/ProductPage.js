import PropTypes from 'prop-types'

import {gql, graphql} from 'react-apollo'

const ProductPage = ({id, data}) => {
  if (data.Product) {
    return (
      <div className="content container">
        <h1>{data.Product.name}</h1>
        <p>{data.Product.description}</p>
      </div>
    )
  } else {
    return null
  }
}

ProductPage.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object
}

const allItems = gql`
  query Product($id: ID!) {
    Product(id: $id) {
      name
      description
      price
      id
      brand {
        id
        name
      }
      category {
        id
        name
      }
    }
  }
`


export default graphql(allItems, {
  options: {},
  props: ({data, id}) => ({ data, variables: { id } })
})(ProductPage)
