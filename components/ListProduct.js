import Link from 'next/link'

const ListProduct = ({product}) => (
  <div>
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <img src={product.photo} />
        </div>
        <div className="level-item">
          <div>
            <h2><Link href="/saved-items"><a>{product.name}</a></Link></h2>
            <p>{'$'+product.price}</p>
          </div>
        </div>
      </div>
      <div className="level-right">
        <div>
          <Link href="/saved-items"><a className="button primary">Add To Cart</a></Link>
          <Link href="/saved-items"><a className="button is-small">Remove</a></Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .level {
        width: 100%;
        padding: 20px 0px;
        border-top: solid 1px #ccc;
      }
      .level-item {
        margin: 0 15px;
      }
      img {
        width: 120px;
      }
      .level-right {
        width: 200px;
      }
      .level-right .button {
        width: 200px;
        margin-bottom: 10px;
      }
      .button.primary {
        background: #084e6c;
        color: white;
      }
    `}</style>
  </div>
)

export default ListProduct;
