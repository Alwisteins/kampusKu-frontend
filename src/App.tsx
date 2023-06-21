// import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./AppRoutes";

import RootLayout from "./layouts/root";

function App() {
  return (
    <>
      <BrowserRouter>
        <RootLayout>
          <Routes />
        </RootLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
