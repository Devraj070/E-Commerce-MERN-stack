// const authenticateUser = (req, res, next) => {
//     // Check if user is authenticated
//     if (req.isAuthenticated()) {
//         // If authenticated, call next() to proceed to the next middleware or route handler
//         next();
//     } else {
//         // If not authenticated, send unauthorized response (e.g., 401 Unauthorized)
//         res.status(401).send('Unauthorized');
//     }
// };

// module.exports = { authenticateUser };



const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    // Check if Authorization header is present
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1]; // Extract token from header
        try {
            // Verify JWT token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Attach user information to request object
            req.user = decoded;
            next(); // Call next middleware
        } catch (error) {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticateUser;
