// FIXME: fix those return false expressions
export default ({ $axios }) => ({
  city(q = '') {
    if (!q) return false
    return $axios.get('/suggestion/city?q=' + q)
  },
  location(q) {
    if (!q) return false
    return $axios.get('/suggestion/location?q=' + q)
  },
  harbour(q = '') {
    if (!q) return false
    return $axios.get('/suggestion/harbour?q=' + q)
  },
  popularHarbours() {
    return $axios.get('/popular-harbours')
  },
  manufacturer(q = '', id = 0) {
    if (!q) return false
    if (id > 0) {
      return $axios.get('/suggestion/manufacturer/ ' + id + '/model?q=' + q)
    } else {
      return $axios.get('/suggestion/manufacturer?q=' + q)
    }
  },
  equipments(q = '') {
    if (!q) return false
    return $axios.get('/suggestion/inventory?q=' + q)
  },
})
