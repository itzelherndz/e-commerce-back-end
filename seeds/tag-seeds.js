const { Tag } = require('../models');

const tagData = [
  {
    id:1,
    tag_name: 'rock music',
  },
  {
    id:2,
    tag_name: 'pop music',
  },
  {
    id:3,
    tag_name: 'blue',
  },
  {
    id:4,
    tag_name: 'red',
  },
  {
    id:5,
    tag_name: 'green',
  },
  {
    id:6,
    tag_name: 'white',
  },
  {
    id:7,
    tag_name: 'gold',
  },
  {
    id:8,
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
