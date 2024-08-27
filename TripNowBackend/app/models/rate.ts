import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Rate extends BaseModel {
  static get table() {
    return 'rates_based_usd'
  }

  @column({ isPrimary: true })
  declare code: string

  @column()
  declare rate: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare update_date: DateTime
}
