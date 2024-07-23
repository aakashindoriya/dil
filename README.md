## Backend API
| API Endpoint        | Headers                          | Request Method | Request Body                              | Response                             |
|---------------------|----------------------------------|----------------|-------------------------------------------|--------------------------------------|
| `/user/register`      | `Content-Type: application/json`  | POST           | "name","email","password"              | `{ "msg","token" }` |
| `/user/login`      | `Content-Type: application/json`  | POST           | "email","password"              | `{ "msg","token" }` |
