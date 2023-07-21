import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div>
                  <Home />
                </div>
              }
            />

            <Route
              path="/favorites"
              exact
              element={
                <div>
                  <Favorites />
                </div>
              }
            />

            <Route
              path="*"
              element={
                <div className="mt-20 sm:mt-12 max-w-[80%] mx-auto">
                  <Error />
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
