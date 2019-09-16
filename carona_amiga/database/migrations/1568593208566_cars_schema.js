'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarsSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('model')
        .notNullable()
      table.string('color')
        .notNullable()
      table.string('plate')
        .unique()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarsSchema
