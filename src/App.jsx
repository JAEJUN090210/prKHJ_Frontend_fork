import { Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./Layout";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Dashboard from "./pages/Dashboard/Dashboard";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  document.addEventListener("contextmenu", (e) => e.preventDefault()); // 우클릭 방지
  document.addEventListener("selectstart", (e) => e.preventDefault()); // 드래그 선택 방지
  document.addEventListener("copy", (e) => e.preventDefault()); // 복사 방지
  document.addEventListener("dragstart", (e) => e.preventDefault()); // 드래그 방지

  return (
    <>
      <GlobalStyle />
      <Routes>
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
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
