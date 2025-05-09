const Order = require("../../models/Order");

const getAllOrdersOfAllUsers = async (req, res) => {
  console.log("Orders:");

  try {
    const orders = await Order.find({});

    if (!orders || orders.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No orders found.",
      });
    }
    

    console.log("Orders:", orders);

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.error("Error fetching orders:", e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};


const getOrderDetailsForAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    await Order.findByIdAndUpdate(id, { orderStatus });

    res.status(200).json({
      success: true,
      message: "Order status is updated successfully!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
};
