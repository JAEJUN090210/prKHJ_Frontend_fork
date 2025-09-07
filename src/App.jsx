import { Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./Layout";
import Home from "./pages/home/home";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function App() {
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
      </Routes>
    </>
  );
}

export default App;
