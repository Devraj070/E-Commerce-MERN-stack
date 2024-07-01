const Product = require('../../models/Product');

exports.search = async (req, res) => {
    try {
        const { query } = req.query;
        const results = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(results);
    } catch (error) {
        console.error('Error searching:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
