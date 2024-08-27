/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const RatesController = () => import('#controllers/rates_controller')
const CountriesController = () => import('#controllers/countries_controller')
// const CurrencyController = () => import('#controllers/currencies_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('countries', CountriesController)
router.get('rates/convert', [RatesController, 'convert'])
