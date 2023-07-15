import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default RootLayout;
