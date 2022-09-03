/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('project_updates', (table) => {
    table.increments('id').primary()
    table.integer('project_id')
    table.date('date_updated')
    table.string('update')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('project_updates')
}
