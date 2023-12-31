import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
