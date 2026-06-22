const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');

// Create Trip (No auth for now)
router.post('/', async (req, res) => {
    try {
        const { destination, numberOfDays, budgetType, interests } = req.body;

        const newTrip = new Trip({
            userId: "temp123",   // temporary
            destination,
            numberOfDays,
            budgetType,
            interests: interests || [],
            itinerary: Array.from({ length: numberOfDays || 3 }, (_, i) => ({
                day: i + 1,
                activities: [`Explore ${destination}`, 'Local experience']
            })),
            estimatedBudget: {
                flights: 400, accommodation: 300, food: 150, activities: 100, total: 950
            },
            hotels: []
        });

        const saved = await newTrip.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ message: 'Error creating trip' });
    }
});

// Get all trips
router.get('/', async (req, res) => {
    const trips = await Trip.find();
    res.json(trips);
});

module.exports = router;