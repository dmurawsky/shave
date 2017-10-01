import {
  Hits,
  RefinementList,
  CurrentRefinements,
  ClearAll,
  Pagination,
} from 'react-instantsearch/dom'
import Product from './Product'

const Results = () => (
  <div className="container content">
    <div className="columns">
      <div className="column is-one-quarter">
        <ClearAll />
        <h2>Category</h2>
        <RefinementList attributeName="category" />
        <h2>Brand</h2>
        <RefinementList attributeName="brand" />
      </div>
      <div className="column">
        <Hits hitComponent={Product} />
        <Pagination />
      </div>
    </div>
  </div>
)

export default Results;
