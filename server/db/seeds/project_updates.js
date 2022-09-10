/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('project_updates')
    .del()
    .then(() => {
      // insert seed entries
      return knex('project_updates').insert([
        {
          id: 1,
          project_id: 1,
          date_updated: new Date(Date.now()),
          update: 'Ready for blocking',
        },
        {
          id: 2,
          project_id: 1,
          date_updated: new Date(Date.now()),
          update: 'Finished',
        },
        {
          id: 3,
          project_id: 2,
          date_updated: new Date(Date.now()),
          update: 'Row 62',
        },
      ])
    })
}
