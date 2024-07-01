const User = require('../../models/User');
const bcrypt = require('bcrypt');

async function handleUserRegister(req, res) {
    // Extract username, email, and password from the request body
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // If user already exists, respond with an error message
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the user document to the database
        await newUser.save();

        // Respond with a success message
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        // If an error occurs during registration, respond with an error message
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
};

module.exports = {handleUserRegister};