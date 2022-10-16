import { RouterProvider } from "react-router-dom";
import { Router } from './routes/index';
import React from "react";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
