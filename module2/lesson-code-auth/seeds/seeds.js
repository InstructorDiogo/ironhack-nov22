const Product = require("../models/product.model")
const User = require("../models/user.model")
const mongoose = require("mongoose");

const products = [{ "id": 1, "title": "Smart Water Bottle", "price": 29.99, "description": "Stay hydrated and on top of your daily water intake with this smart water bottle. It tracks your water consumption, reminds you to drink, and syncs with your smartphone." }, { "id": 2, "title": "Noise-Cancelling Headphones", "price": 149.99, "description": "Block out distractions and immerse yourself in your music with these noise-cancelling headphones. They feature advanced noise-cancellation technology and comfortable ear cups." }, { "id": 3, "title": "Electric Toothbrush", "price": 69.99, "description": "Upgrade your oral care routine with this electric toothbrush. It features multiple brush modes, a timer, and pressure sensor to ensure a thorough and gentle clean." }, { "id": 4, "title": "Fitness Tracker Watch", "price": 89.99, "description": "Keep track of your fitness goals with this smartwatch. It tracks your steps, heart rate, and sleep quality, and offers personalized insights and coaching." }, { "id": 5, "title": "Portable Bluetooth Speaker", "price": 49.99, "description": "Bring your music anywhere with this portable Bluetooth speaker. It delivers powerful sound, has a long battery life, and is waterproof for worry-free outdoor use." }, { "id": 6, "title": "Air Fryer", "price": 79.99, "description": "Enjoy crispy and delicious fried food without the guilt with this air fryer. It uses hot air to fry food with little to no oil, making it a healthier alternative to traditional frying." }, { "id": 7, "title": "Robot Vacuum Cleaner", "price": 249.99, "description": "Keep your floors clean without lifting a finger with this robot vacuum cleaner. It navigates around your home and automatically returns to its charging dock when done." }, { "id": 8, "title": "Instant Pot", "price": 99.99, "description": "Make healthy and delicious meals in minutes with this versatile Instant Pot. It functions as a pressure cooker, slow cooker, rice cooker, and more." }, { "id": 9, "title": "Kindle Paperwhite", "price": 129.99, "description": "Enjoy reading your favorite books anywhere with this Kindle Paperwhite. It features a glare-free display, long battery life, and waterproof design." }, { "id": 10, "title": "Wireless Charging Pad", "price": 39.99, "description": "Charge your smartphone without the hassle of cords with this wireless charging pad. It supports fast charging and works with compatible devices." }]

// Password for DiogoBarros -> DiogoBarros1 (admin)
// Password for DiogoDelgado -> DiogoDelgado1
const users = [
  { username: "DiogoBarros", email: "diogo.barros@ironhack.com", passwordHash: "$2a$10$LZ8XiLY1melVKdAr.E/WreBSaO.W66uclyIuH3.7CgKqUhdP7FDua", role: "admin" },
  { username: "DiogoDelgado", email: "diogo.delgado@ironhack.com", passwordHash: "$2a$10$xP.BJEWmCmF/6uDsNFeoXe1/GiuZr9Gyf3VTEHO/R9bYJ/yhhbHaq", role: "user" }
]

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/basic-auth";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    Product.create(products)
      .then(data => {

        console.log(`${data.length} products inserted.`)
        mongoose.connection.close()

      }).catch((err) => {
        console.error("Error creating products: ", err);
      });

    User.create(users)
      .then(data => {

        console.log(`${data.length} users inserted.`)
        mongoose.connection.close()

      }).catch((err) => {
        console.error("Error creating products: ", err);
      });

  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });