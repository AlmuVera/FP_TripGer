require("../config/db.config");

const Trip = require("../models/trip.model");
const { faker } = require("@faker-js/faker");

Trip.deleteMany({})
  .then(() => {
    for (let i = 0; i < 5; i++) {
      Trip.create({
        city: faker.address.cityName(),
        description: faker.lorem.paragraph(),
        coverPhoto: faker.image.city(undefined, undefined, true),
        startDate: faker.date.soon(10),
        endDate: faker.date.soon(10),
        travelers: Math.floor(Math.random() * 15),
        budget: Math.floor(Math.random() * 3000),
        owner: faker.internet.userName(),
        
      }).then((trip) => {
        console.log(`trip to ${trip.city} created`);

        // TODO: create relations
      });
    }
  })
  .catch((err) => {
    console.error(err);
  });