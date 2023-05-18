// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter as Router} from 'react-router-dom';
// ReactDOM.render(
//       <React.StrictMode>
//         <Router>
//         <App />
//         </Router>
//       </React.StrictMode>,
//   document.getElementById("root")
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);