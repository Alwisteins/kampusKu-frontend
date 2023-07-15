// import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./AppRoutes";

import RootLayout from "./layouts/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RootLayout>
            <Routes />
          </RootLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
