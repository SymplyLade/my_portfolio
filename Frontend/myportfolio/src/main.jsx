// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css"; 

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 ADD THIS
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   {/* 👈 WRAP APP */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
