// to hit Register end point
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationServices.register({
// email: 'testing@gmail.com',
// password: '12334'
// })
