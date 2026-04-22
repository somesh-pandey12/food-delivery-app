const Food = require('../models/foodModel');

// Saare food items ko fetch karein [cite: 21]
const getFoods = async (req, res) => {
    try {
        const foods = await Food.find({});
        res.json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Naya food item add karein (Admin ke liye)
const addFood = async (req, res) => {
    const { name, description, price, image, category } = req.body;
    try {
        const food = new Food({ name, description, price, image, category });
        await food.save();
        res.status(201).json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getFoods, addFood };