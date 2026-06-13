// default import
import num from "./app.js";

// named import
import { username, user_email, age } from "./user.js";

var h1 = document.createElement("h1");
h1.innerHTML = `My number imported: ${num}`;
document.body.appendChild(h1);