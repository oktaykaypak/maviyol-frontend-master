import searchMixin from '~/mixins/search'

export default {
  mixins: [searchMixin],
  methods: {
    filter() {
      const props = [
        'captain',
        'cabin',
        'amount',
        'constructionYear',
        'renter',
        'length',
        'type',
        'guestCapacity',
      ]

      this.$store.commit(
        'filter/updateIsFiltered',
        typeof props.find((key) => this.$store.state.filter[key].length > 0) !==
          'undefined'
      )
      this.search()
    },
  },
}
