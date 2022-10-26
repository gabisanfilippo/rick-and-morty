import { RouterProvider } from "react-router-dom";
import { Router } from './routes/index';
import React from "react";
import { GlobalStyle } from "./styles";
import { Provider as JotaiProvider } from "jotai";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <JotaiProvider>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools /> */}
          <GlobalStyle />
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </JotaiProvider>
    </div>
  );
}

export default App;
