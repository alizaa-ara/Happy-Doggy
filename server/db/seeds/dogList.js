exports.seed = async (knex) => {
  await knex('dogList').del()
  return knex('dogList')
    .select()
    .rowNumber('availibility', function () {
      this.partitionBy('availibility')
    })
    .insert([
      {
        id: 4,

        dog_name: 'Robert',
        breed: 'Pug',
        needs: 'Not good with kids, needs lots of exercise.',
        availibility: '2022-12-11',
        description:
          'Robert is a very loving lad and enjoys cuddles. He likes long walks and sunbathing. He is bursting with energy and enjoys a game of frisbee.',
        owner_id: 'auth0|6379d30ad3348a28c1b1e950',
        suburb: 'Avondale, Auckland',
        url: 'https://st.depositphotos.com/2869437/3739/i/450/depositphotos_37392643-stock-photo-close-up-of-pug.jpg',
      },
      {
        id: 5,

        dog_name: 'Lilly',
        breed: 'Bulldog',
        needs: 'History of chasing cats and birds',
        availibility: '2022-12-10',
        description:
          'Lilly likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
        owner_id: 'auth0|6379d30ad3348a28c1b1e950',
        suburb: 'Waiheke, Auckland',
        url: 'https://www.thesprucepets.com/thmb/R03Eb1Y0Lcmwhr-4bpgy_hagZCQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1_American_Bulldog-5b339bcf4cedfd003712e3b5.jpg',
      },

      {
        id: 7,

        dog_name: 'Tango',
        breed: 'Greyhound',
        needs: 'Soft voices, reassurance and rewards(esp food!!)',
        availibility: '2022-12-19',
        description:
          'Tango is a little shy but will respond well to commands, and become a velcro dog once they trust you.',
        owner_id: 'auth0|6379d30ad3348a28c1b1e950',
        suburb: 'Devonport, Auckland',
        url: 'https://cdn-fastly.petguide.com/media/2022/02/28/8264126/greyhound.jpg?size=720x845&nocrop=1',
      },

      {
        id: 9,

        dog_name: 'Tank',
        breed: 'Doberman ',
        needs: 'Constant attention and cuddles',
        availibility: '2022-12-18',
        description:
          'Tank loves meeting new people and would love to be your new best friend.',
        owner_id: 'auth0|6379d30ad3348a28c1b1e950',
        suburb: 'CBD, Auckland',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIJlU3-leKRng6MC0O45wS2GoxwpQQ69VOA&usqp=CAU',
      },
      {
        id: 10,

        dog_name: 'Accorn',
        breed: 'Daschund',
        needs: 'Gentle music to put them to sleep',
        availibility: '2022-12-15',
        description:
          'Accorn is a lovable dog who is a little slower pace, likes listening to classical music (Accorn is classy!!)',
        owner_id: 'auth0|6379d30ad3348a28c1b1e950',
        suburb: 'Grey Lynn, Auckland',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIXwY8KsuopM9V5s90xbD3FNwkpEbGb_uRQ&usqp=CAU',
      },
      {
        id: 11,

        dog_name: 'Elvin',
        breed: 'Half Human',
        needs: 'Lots of food',
        availibility: '2022-12-25',
        description: 'Elvin loves eating and playing with a ball!!',
        owner_id: 'auth0|6379d30ad3348a28c1b1e950',
        suburb: 'Auckland CBD, Auckland',
        url: 'https://www.readersdigest.co.nz/wp-content/uploads/sites/3/2021/10/15-dog-beanie-GettyImages-114516871-770.jpg',
      },
    ])
}
