import {auth, database} from 'firebase'

const deleteUser = e => {
  e.preventDefault()
  const cu = auth().currentUser
  database().ref('users/' + cu.uid).remove(() => {
    cu.delete()
  })
}

const signOut = e => {
  e.preventDefault()
  auth().signOut()
}

const UserTestActions = () => (
  <div id="userTestActions">
    <div onClick={deleteUser} id="deleteUserBtn" />
    <div onClick={signOut} id="signOutBtn" />
    <style jsx>{`
      #userTestActions {
        position: absolute;
        top: -9999px;
        left: -9999px;
        visibility: hidden;
      }
    `}</style>
  </div>
)

export default UserTestActions;
