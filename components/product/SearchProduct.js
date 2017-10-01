import Link from 'next/link'
import {Highlight} from 'react-instantsearch/dom'

const SearchProduct = ({hit}) => (
  <div style={{marginTop: '10px'}}>
    <Link href={'/product?id='+hit.id}>
      <a className="hit-name">
        <Highlight attributeName="name" hit={hit} />
      </a>
    </Link>
    <p><Highlight attributeName="description" hit={hit} /></p>
  </div>
)

export default SearchProduct;
