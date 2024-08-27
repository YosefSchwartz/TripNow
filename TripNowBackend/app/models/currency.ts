import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Currency extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare code: string

  @column.dateTime({ autoCreate: true })
  declare create_date: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare update_date: DateTime
}
