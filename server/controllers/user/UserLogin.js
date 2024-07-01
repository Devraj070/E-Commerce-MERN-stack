// const User = require('../../models/User');
// const bcrypt = require('bcrypt');

// async function handleUserLogin (req, res) {
//     // Extract username/email and password from the request body
//     const { username, password } = req.body;

//     try {
//         // Find the user by username or email in the database
//         const user = await User.findOne({ $or: [{ username }, { email: username }] });

//         // If user does not exist, respond with an error message
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Check if the provided password matches the hashed password stored in the database
//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         // If password is invalid, respond with an error message
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         // If authentication is successful, you can generate a token here and send it back to the client
//         // For simplicity, let's just send a success message for now
//         res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         // If an error occurs during login, respond with an error message
//         console.error(error);
//         res.status(500).json({ message: 'Error logging in' });
//     }
// };

// module.exports = {handleUserLogin};



/// includes user id

const User = require('../../models/User');
const bcrypt = require('bcrypt');

async function handleUserLogin(req, res) {
    // Extract username/email and password from the request body
    const { username, password } = req.body;

    try {
        // Find the user by username or email in the database
        const user = await User.findOne({ $or: [{ username }, { email: username }] });

        // If user does not exist, respond with an error message
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the provided password matches the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If password is invalid, respond with an error message
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If authentication is successful, send the user ID along with the success message
        res.status(200).json({ message: 'Login successful', userId: user._id, username: user.username });
    } catch (error) {
        // If an error occurs during login, respond with an error message
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
};

module.exports = { handleUserLogin };

