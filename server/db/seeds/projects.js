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
          image:
            'https://images4-g.ravelrycache.com/uploads/trulymyrtle/664603751/georgie2_medium2.jpg',
          date_started: '12/01/2022',
          category: 'Knitting',
          name: 'Georgie Sweater',
          designer: 'Truly Myrtle',
          description: 'Top-down sweater in the round with lace detail',
          materials: 'Sport weight yarn',
          link: 'https://trulymyrtle.co.nz/shop/georgie',
        },
        {
          id: 2,
          image: '/images/3D086FD8-ECFE-4540-A96C-E396DAB59508 (1).jpg',
          date_started: '02/09/2022',
          category: 'Sewing',
          name: 'Duality Scarf',
          designer: 'Knitatude',
          description: 'Scarf knitted flat and seamed',
          materials: 'DK yarn',
          link: 'https://www.ravelry.com/patterns/library/duality-scarf',
        },
      ])
    })
}
