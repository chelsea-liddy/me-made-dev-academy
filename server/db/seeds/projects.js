/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(() => {
      // insert seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'Georgie Sweater',
          designer: 'Truly Myrtle',
          description: 'Top-down sweater in the round with lace detail',
          materials: 'Sport weight yarn',
          link: 'https://trulymyrtle.co.nz/shop/georgie',
          updates: [
            {
              update: 'Ready for blocking',
            },
          ],
        },
      ])
    })
}
