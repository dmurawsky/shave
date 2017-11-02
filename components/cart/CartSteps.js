import PropTypes from 'prop-types'
import Step from './Step'


const CartSteps = ({step}) => {
  switch (step) {
    case 1:
      return (
        <ul className="steps is-narrow is-medium is-centered has-content-centered">
          <Step first={true} linked={true} gaps={true} hollow={false} active={true} icon="shopping-cart" href="/cart" heading="Cart" />
          <Step first={false} linked={false} gaps={true} hollow={true} active={false} icon="map-marker" href="/cart/user-info" heading="Shipping" />
          <Step first={false} linked={false} gaps={true} hollow={true} active={false} icon="usd" href="/cart/payment" heading="Payment" />
          <Step first={false} linked={false} gaps={false} hollow={true} active={false} icon="check" href="/cart/confirm" heading="Confirmation" />
        </ul>
      )
    case 2:
      return (
        <ul className="steps is-narrow is-medium is-centered has-content-centered">
          <Step first={true} linked={true} gaps={false} hollow={false} active={false} icon="shopping-cart" href="/cart" heading="Cart" />
          <Step first={false} linked={true} gaps={true} hollow={false} active={true} icon="map-marker" href="/cart/user-info" heading="Shipping" />
          <Step first={false} linked={false} gaps={true} hollow={true} active={false} icon="usd" href="/cart/payment" heading="Payment" />
          <Step first={false} linked={false} gaps={false} hollow={true} active={false} icon="check" href="/cart/confirm" heading="Confirmation" />
        </ul>
      )
    case 3:
      return (
        <ul className="steps is-narrow is-medium is-centered has-content-centered">
          <Step first={true} linked={true} gaps={false} hollow={false} active={false} icon="shopping-cart" href="/cart" heading="Cart" />
          <Step first={false} linked={true} gaps={false} hollow={false} active={false} icon="map-marker" href="/cart/user-info" heading="Shipping" />
          <Step first={false} linked={true} gaps={true} hollow={false} active={true} icon="usd" href="/cart/payment" heading="Payment" />
          <Step first={false} linked={false} gaps={false} hollow={true} active={false} icon="check" href="/cart/confirm" heading="Confirmation" />
        </ul>
      )
    case 4:
      return (
        <ul className="steps is-narrow is-medium is-centered has-content-centered">
          <Step first={true} linked={true} gaps={false} hollow={false} active={false} icon="shopping-cart" href="/cart" heading="Cart" />
          <Step first={false} linked={true} gaps={false} hollow={false} active={false} icon="map-marker" href="/cart/user-info" heading="Shipping" />
          <Step first={false} linked={true} gaps={false} hollow={false} active={false} icon="usd" href="/cart/payment" heading="Payment" />
          <Step first={false} linked={true} gaps={false} hollow={false} active={true} icon="check" href="/cart/confirm" heading="Confirmation" />
        </ul>
      )
    default:
      return null
  }
}

CartSteps.propTypes = {
  step: PropTypes.number.isRequired,
}

export default CartSteps



// <Step
//   icon="shopping-cart"
//   href="/cart"
//   heading="Cart"
//   first={true}
//   linked={true}
//   gaps={true}
//   hollow={false} active={false}
// />
