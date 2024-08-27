import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare code: string

  @column()
  declare flag: string

  @column()
  declare region: string

  @column()
  declare capital_city: string

  @column()
  declare capital_city_tz: string

  @column.dateTime({ autoCreate: true })
  declare create_date: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare update_date: DateTime
}
