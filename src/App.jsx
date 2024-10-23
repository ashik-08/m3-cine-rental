import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import MovieList from "./components/cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/cartReducer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <section className={darkMode ? "dark" : ""}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
          </section>
        </MovieContext.Provider>
      </ThemeContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        theme={darkMode ? "dark" : "light"}
      />
    </>
  );
};

export default App;
