import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(1100)
console.log('Server on port', 1100)