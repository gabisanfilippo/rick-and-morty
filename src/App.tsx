import { RouterProvider } from "react-router-dom";
import { Router } from './routes/index';
import React from "react";
import { GlobalStyle } from "./styles";
import { Provider as JotaiProvider } from "jotai";

function App() {
  return (
    <div className="App">
      <JotaiProvider>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </JotaiProvider>
    </div>
  );
}

export default App;
