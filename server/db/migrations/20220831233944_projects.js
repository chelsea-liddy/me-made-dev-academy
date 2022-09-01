/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('name')
    table.string('designer')
    table.string('description')
    table.string('materials')
    table.string('link')
    table.string('updates')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
