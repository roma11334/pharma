import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Sales from "./pages/Sales";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import { Provider } from "react-redux";
import { store } from "./components/store/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Item from "./pages/Item/Item";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Slider />
        <BreadCrumbs />
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<About />} path="/about" />
          <Route element={<Sales />} path="/sales" />
          <Route element={<Delivery />} path="/delivery" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<Item />} path="/items/:id" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
