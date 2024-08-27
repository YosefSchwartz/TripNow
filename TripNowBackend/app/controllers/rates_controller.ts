import Rate from '#models/rate'
import type { HttpContext } from '@adonisjs/core/http'

export default class RatesController {
  async convert({ request, response }: HttpContext) {
    const { from, to, amount } = request.qs()

    if (!from || !to || !amount) {
      return response.status(400).json({ error: 'Missing parameters' })
    }

    const fromCurrency = await Rate.findBy('code', from)
    const toCurrency = await Rate.findBy('code', to)

    if (!fromCurrency || !toCurrency) {
      return response.status(404).json({ error: 'Currency not found' })
    }

    const fromRate = fromCurrency.rate
    const toRate = toCurrency.rate

    if (fromRate === 0) {
      return response.status(500).json({ error: 'Conversion rate cannot be zero' })
    }

    const convertedAmount = (amount / fromRate) * toRate

    return response.json({ convertedAmount })
  }
}
