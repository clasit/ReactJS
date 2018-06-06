import faker from 'faker';

let animals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

animals = animals.map(post => {
  return {
    id: post,
    title: faker.lorem.sentence(),
    excerpt: faker.lorem.sentences(10),
    content: faker.lorem.sentences(100),
    author: faker.name.findName()
  }
});

export default animals;
