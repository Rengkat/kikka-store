import { Footer, NavBar, Newsleter } from "./Components";
import { Cart, Contact, Home, Shop, SingleProduct, Wishlist, CheckOut } from "./Pages";
import { Route, Routes } from "react-router-dom";
import SingleContextProvider from "./Contexts/SingleContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import SharedLayout from "./SharedLayout";
import SharedLayoutProtected from "./Components/SharedLayoutProtedted";

function App() {
  return (
    <div className="App overflow-hidden ">
      <SingleContextProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              exact
              path="/"
              element={
                <ProtectedRoute>
                  <SharedLayoutProtected />
                </ProtectedRoute>
              }>
              <Route exact path="cart" element={<Cart />} />
              <Route exact path="wishlist" element={<Wishlist />} />
              <Route exact path="checkout" element={<CheckOut />} />
            </Route>
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/singleProduct/:productId" element={<SingleProduct />} />
          </Route>
        </Routes>
      </SingleContextProvider>
    </div>
  );
}

export default App;
