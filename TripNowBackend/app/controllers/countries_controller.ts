import type { HttpContext } from '@adonisjs/core/http'
import Country from '#models/country'

export default class CountriesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const countries = await Country.query().orderBy('name', 'asc')
    return response.json(countries)
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const country = await Country.findBy('code', params.id)
    return response.json(country)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
