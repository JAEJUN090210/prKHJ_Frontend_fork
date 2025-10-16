import { Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import React, { useState, useEffect } from "react";

import ScrollToTop from "./components/ScrollTop";

import Layout from "./Layout";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Dashboard from "./pages/Dashboard/Dashboard2";
import NotFound from "./pages/PageNotFound";
import AboutDev from "./pages/about/aboutDev";
import Contact from "./pages/contact/contact";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
  }
`;

function App() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1280) setIsBlocked(true);
      else setIsBlocked(false);
    };

    // 초기 체크
    checkScreenSize();

    // 창 크기 변경 시 체크
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // 기존 우클릭/복사/드래그 방지
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("selectstart", preventDefault);
    document.addEventListener("copy", preventDefault);
    document.addEventListener("dragstart", preventDefault);

    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("selectstart", preventDefault);
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
    };
  }, []);

  if (isBlocked) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        화면 크기가 작아 접속할 수 없습니다.
        <br />
        PC 데스크톱 환경에서 이용해주세요.
      </div>
    );
  }

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/list"
          element={
            <Layout>
              <List />
            </Layout>
          }
        />
        <Route
          path="/dashboard/:studentId"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/aboutDev"
          element={
            <Layout>
              <AboutDev />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/NotFound"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
