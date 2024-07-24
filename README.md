## Backend API
| API Endpoint        | Headers                          | Request Method | Request Body                              | Response                             |
|---------------------|----------------------------------|----------------|-------------------------------------------|--------------------------------------|
| `/user/register`    | `Content-Type: application/json` | POST           | "name","email","password"                 | `{ "msg","token" }`                  |
| `/user/login`       | `Content-Type: application/json` | POST           | "email","password"                        | `{ "msg","token" }`                  |
| `/products`         | `Content-Type: application/json` | GET            | None                                      | `{ "products", "total", "page", "pages" }` |
| `/products/:id`     | `Content-Type: application/json` | GET            | None                                      | `{ "product" }`                      |
| `/products`         | `Content-Type: application/json` | POST           | "name","description","price"              | `{ "msg","product" }`                |
| `/products/:id`     | `Content-Type: application/json` | PUT            | "name","description","price" (optional)   | `{ "msg","product" }`                |
| `/products/:id`     | `Content-Type: application/json` | DELETE         | None                                      | `{ "msg" }`                          |
| `/cart`             | `Content-Type: application/json` | GET            | None                                      | `{ "data": carts }`                  |
| `/cart`             | `Content-Type: application/json` | POST           | "productId","quantity"                    | `{ "status", "data": cart }`         |
| `/cart/:id`         | `Content-Type: application/json` | DELETE         | None                                      | `{ "status","msg" }`                 |
| `/payment/checkout` | `Content-Type: application/json` | POST           | None                                      | `{ "success", "order" }`             |
| `/payment/verify`   | `Content-Type: application/json` | POST           | "razorpay_order_id","razorpay_payment_id","razorpay_signature" | `{ "success", "message" }`           |
