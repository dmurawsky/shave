import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ChangePasswordForm from './ChangePasswordForm'

const SecurityPage = () => (
  <div id="securityPage" className="content page is-clearfix">
    <h2>Change Password</h2>
    <ChangePasswordForm />
  </div>
)

SecurityPage.propTypes = {
  profile: PropTypes.object,
}

export default connect(s => ({
  profile: s.profile,
}))(SecurityPage)
