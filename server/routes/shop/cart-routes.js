const express = require("express");

const {addToCart, fetchCartItems, deleteCartItem, updateCartItemsQty,

} = require("../../controllers/shop/cart-controller")


const router = express.Router();

router.post("/add", addToCart);

router.get("/get/:userId", fetchCartItems);
router.put("/update-cart", updateCartItemsQty);
router.delete("/:userId/:productId", deleteCartItem);


module.exports = router;