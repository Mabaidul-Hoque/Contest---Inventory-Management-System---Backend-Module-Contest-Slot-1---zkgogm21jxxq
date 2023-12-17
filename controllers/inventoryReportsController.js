const Product = require('../models/productModel');

exports.getLowInventoryProducts = async (req, res) => {
  try {
    // TODO: Fetch products with quantity less than 10 from the database
     const lowInventoryProducts = await productModel.find({ quantity: { $1t: 10} } ) );
    
    // TODO: Send the low inventory products as a JSON response
    res.json(lowInventoryProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getTotalInventoryValue = async (req, res) => {
  try {
    // TODO: Calculate the total value of the entire inventory using aggregation
    const products = await productModel.find();
    const totalValue = products.reduce((acc, product) => acc + product.quantity * product.price, 0);
    // TODO: Send the total inventory value as a JSON response
    res.json({totalValue } );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
