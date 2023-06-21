import React from "react";
import Navbar from "../components/navbar/Navbar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default RootLayout;
