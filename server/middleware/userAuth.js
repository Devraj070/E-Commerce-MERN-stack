// middleware/auth.js
const verifyUser = (req, res, next) => {
    const userId = req.headers['user-id'];

    if (!userId) {
        return res.status(403).json({ message: 'No user ID provided.' });
    }

    // Here you should implement your logic to verify the user, e.g., check in the database
    // For now, we just proceed to the next middleware/route handler
    req.user = { id: userId };
    next();
};

module.exports = verifyUser;
