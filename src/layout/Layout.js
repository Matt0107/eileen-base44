import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
}
