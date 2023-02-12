import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let items = [];
let discountCodes = [];
let nextDiscountCodeOrder = 0;

app.get("/", (req, res) => {
  res.send("HIIIIIII");
});

// Endpoint for adding items to the cart
app.post("/addToCart", (req, res) => {
  const item = req.body;
  items.push(item);
  res.send({ message: "Item added to cart" });
});

// app.get("/totalCost", (req, res) => {
//   let total = 0;
//   for (let item of items) {
//     total += item.price;
//   }
//   res.send({ total });
// });

// Endpoint for generating the discount code
app.post("/add-to-cart", (req, res) => {
  const { item } = req.body;
  items.push(item);
  res.status(201).send({ message: "Item added to cart successfully" });
});

// Checkout endpoint
app.post("/checkout", (req, res) => {
  const { discountCode } = req.body;
  const isDiscountCodeValid = discountCodes.includes(discountCode);

  if (!isDiscountCodeValid) {
    return res.status(400).send({ message: "Invalid discount code" });
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);
  const discount = total * 0.1;
  const totalWithDiscount = total - discount;

  items = [];
  res.status(200).send({
    message: "Checkout successful",
    total: totalWithDiscount,
    discount: discount,
  });
});

// Generate discount code endpoint
app.post("/generate-discount-code", (req, res) => {
  if (nextDiscountCodeOrder !== 0 && nextDiscountCodeOrder % 10 !== 0) {
    return res.status(400).send({ message: "Cannot generate discount code" });
  }

  const discountCode = `DISCOUNT_${nextDiscountCodeOrder}`;
  discountCodes.push(discountCode);
  nextDiscountCodeOrder++;
  res.status(200).send({ message: "Discount code generated", discountCode });
});

// Get order summary endpoint
app.get("/order-summary", (req, res) => {
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
