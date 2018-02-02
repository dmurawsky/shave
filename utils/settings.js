import { database, auth } from 'firebase'

export const getPageSettings = async page => {
  const snap = await database()
    .ref('settings/pages/' + page)
    .once('value')
  return snap.val()
}
