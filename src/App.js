import { Footer, NavBar, Newsleter } from "./Components";
import { Cart, Contact, Home, Shop, SingleProduct, Wishlist } from "./Pages";
import { Route, Routes } from "react-router-dom";
import SingleContextProvider from "./Contexts/SingleContext";

function App() {
  return (
    <div className="App overflow-hidden ">
      <SingleContextProvider>
        <NavBar />
        <div className="home">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route
              exact
              path="/singleProduct/:productId"
              element={<SingleProduct />}
            />
          </Routes>
        </div>
        <Newsleter />
        <Footer />
      </SingleContextProvider>
    </div>
  );
}

export default App;
