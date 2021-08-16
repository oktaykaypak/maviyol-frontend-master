import AccountRepository from '~/repositories/AccountRepository'
import AuthRepository from '~/repositories/AuthRepository'
import SuggestionRepository from '~/repositories/SuggestionRepository'
// FIXME: - auto get index file
import BoatRepository from '~/repositories/BoatRepository/index'
import SearchRepository from '~/repositories/SearchRepository'
import ProductRepository from '~/repositories/ProductRepository'

export default ({ $axios, $cookies, store, $nuxt }, inject) => {
  const dependency = {
    $axios,
    store,
    $cookies,
  }

  inject('repositories', {
    auth: AuthRepository(dependency),
    account: AccountRepository(dependency),
    suggestion: SuggestionRepository(dependency),
    boat: BoatRepository(dependency),
    search: SearchRepository(dependency),
    product: ProductRepository(dependency),
  })
}
