const { imageUploadUtils } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtils(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "some error occurred",
    });
  }
};

// add a new products
const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    } = req.body;
    const newlyCreatedProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    });

    await newlyCreatedProduct.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "some error occurred",
    });
  }
};

// fetch all products

const fetchAllProduct = async(req, res) => {
  try {

    const listOfProducts = await Product.find({});
    res.status(200).json({
        success: true,
        data: listOfProducts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "some error occurred",
    });
  }
};

// edit a product

const editProduct = async (req, res) => {
  try {

    const {id} = req.params;
    const {
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice,
        totalStock,
      } = req.body;

      const findProduct = await Product.findById(id);
      if(!findProduct) return res.status(404).json({
        success: false,
        message: "Product not found",
      });

      Product.title = title || findProduct.title
      Product.description = description || findProduct.description
      Product.category = category || findProduct.category
      Product.brand = brand|| findProduct.brand
      Product.price = price|| findProduct.price
      Product.salePrice = salePrice|| findProduct.salePrice
      Product.totalStock = totalStock|| findProduct.totalStock
      Product.image = image|| findProduct.image


      await findProduct.save();
      res.status(200).json({
        success: true,
        data: findProduct,
      });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "some error occurred",
    });
  }
};
// delete a product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await Product.findByIdAndUpdate(id);
    if (!Product) return res.status(404).json({
      success: false,
      message: "Product not found",
    });

    res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
      
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "some error occurred",
    });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProduct,
  editProduct,
  deleteProduct,
};
