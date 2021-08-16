/* eslint-disable */
export default ({ $axios, $cookies }) => {
  $axios.onRequest(async (config) => {
    const token = await $cookies.get('token')
    if (token) {
      config.headers.common.Authorization = token
    }
    config.headers.common['X-Language'] = 'tr'
    return config
  })
}
