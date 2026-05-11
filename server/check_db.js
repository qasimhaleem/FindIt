const mongoose = require('mongoose');
require('dotenv').config();
const Item = require('./models/item.model');

mongoose.connect(process.env.MONGO_DB_URI)
  .then(async () => {
    const items = await Item.find({});
    console.log("Total items:", items.length);
    items.forEach(i => console.log(i._id, i.itemName));
    process.exit(0);
  })
  .catch(console.error);
