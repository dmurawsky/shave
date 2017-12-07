import AddressForm from './AddressForm'
import Addresses from './Addresses'

const AddressesPage = () => (
  <div id="addressesPage" className="content page">
    <h2 className="has-text-centered">Default Address</h2>
    <Addresses addressType="selectedShippingAddress" />
    <hr />
    <h2 className="has-text-centered">Add New Address</h2>
    <AddressForm addressType="selectedShippingAddress" />
  </div>
)

AddressesPage.propTypes = {}

export default AddressesPage
