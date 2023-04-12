import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
