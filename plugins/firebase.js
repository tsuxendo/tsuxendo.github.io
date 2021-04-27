import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

export default (context, inject) => {
  // 設定
  const config = context.env.FIREBASE_CONFIG
  const firebaseApp = firebase.initializeApp(config)
  // 認証
  const $auth = firebaseApp.auth()
  $auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  $auth.onAuthStateChanged(async user => {
    await context.store.dispatch('auth/setUser', user)
  })
  // データ
  const $firestore = firebaseApp.firestore()
  const $timestamp = (date = null) => firebase.firestore.Timestamp.fromDate(date || new Date())
  const $date = (timestamp = null) => timestamp ? new Date(timestamp.seconds * 1000) : new Date()
  // ストレージ
  const $storage = firebaseApp.storage()
  const $upload = async file => {
    const ref = `/versions/${context.env.VERSION}/files/${Date.now()}`
    const response = await $storage.ref(ref).put(file)
    return await response.ref.getDownloadURL()
  }
  // uuid
  const $uuid = (string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') => {
    string = string.replace('y', (Math.floor(Math.random() * 4) + 8).toString(16))
    while (string.includes('x')) {
      const x = Math.floor(Math.random() * 16).toString(16)
      string = string.replace('x', x)
    }
    return string
  }
  // 追加
  inject('firebase', {
    $auth,
    $firestore,
    $timestamp,
    $date,
    $upload,
    $uuid
  })
}
