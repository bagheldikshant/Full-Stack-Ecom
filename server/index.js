import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

let items = [];
let discountCodes = [];
let nextDiscountCodeOrder = 0;

//Endpoint for getting the cart items
app.get("/cartItems", (req, res) => {
  res.status(200).json(items);
});

// Endpoint for generating the discount code
app.post("/addToCart", (req, res) => {
  const { item } = req.body;
  items.push(item);
  res.status(201).send({ message: "Item added to cart successfully" });
});

// Checkout endpoint
app.post("/checkout", (req, res) => {
  const { discountCode } = req.body;
  const isDiscountCodeValid = discountCodes.includes(discountCode);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (!discountCode || !isDiscountCodeValid) {
    items = [];
    return res.status(200).send({
      message: "Checkout successfully without discount",
      total: total,
      discount: 0,
    });
  }

  const discount = total * 0.1;
  const totalWithDiscount = total - discount;
  items = [];

  res.status(200).send({
    message: "Checkout successful with Discount",
    total: totalWithDiscount,
    discount: discount,
  });
});

// Generate discount code endpoint
app.post("/generateDiscountCode", (req, res) => {
  nextDiscountCodeOrder++;
  if (nextDiscountCodeOrder !== 0 && nextDiscountCodeOrder % 2 !== 0) {
    return res.send({ message: "Cannot generate discount code" });
  }

  const discountCode = `DISCOUNT_${nextDiscountCodeOrder}`;
  discountCodes.push(discountCode);

  res.status(200).send({ message: "Discount code generated", discountCode });
});

// Get order summary endpoint
app.get("/orderSummary", (req, res) => {
  const totalPurchasedItems = items.length;
  const totalPurchaseAmount = items.reduce((sum, item) => sum + item.price, 0);
  const totalDiscountAmount = discountCodes.length * 0.1 * totalPurchaseAmount;

  res.status(200).send({
    totalPurchasedItems,
    totalPurchaseAmount,
    discountCodes,
    totalDiscountAmount,
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
