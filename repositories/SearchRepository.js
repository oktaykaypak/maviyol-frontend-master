export default ({ $axios }) => ({
  // FIXME: use for loop for faster search
  searchBoats(payload) {
    const filtered = {}
    Object.keys(payload).map((v) => {
      if (payload[v] || typeof payload[v] === 'number') {
        filtered[v] = payload[v]
      }
    })
    const searchParams = new URLSearchParams(filtered).toString()
    return $axios.get(`/search?${searchParams}`)
  },

  getLocation(slug) {
    return $axios.get(`/page/location/${slug}`)
  },
})
