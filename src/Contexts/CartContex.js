import { createContext, useReducer, useEffect } from "react";
import { getUserFromLocalStorage } from "./localStorage";

const Reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CART":
      return { ...state, cartItems: { ...state.cartItems, cart: action.payload } };
    case "FETCH_LOADING_CART":
      return { ...state, cartItems: { ...state.cartItems, loading: action.payload } };
    default:
      return state;
  }
};

export const CartContext = createContext();

const initialState = {
  cartItems: {
    loading: false,
    cart: [],
  },
};

const CartContextProvider = ({ children }) => {
  const user = getUserFromLocalStorage();
  const token = user ? user.token : null;

  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchCart = async () => {
    if (!token) return;

    dispatch({ type: "FETCH_LOADING_CART", payload: true });

    try {
      const res = await fetch("https://building-backend.onrender.com/api/user/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: "FETCH_LOADING_CART", payload: false });
        dispatch({ type: "FETCH_CART", payload: data.cartItems });
      } else {
        console.error("Failed to fetch cart items.");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (productId) => {
    if (!token) return;

    try {
      const res = await fetch("https://building-backend.onrender.com/api/user/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
        credentials: "include",
      });

      if (res.ok) {
        await fetchCart();
      } else {
        const error = await res.json();
        console.error("Error adding to cart:", error);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const deleteProductFromCart = async (productId) => {
    if (!token) return;

    try {
      const res = await fetch(`https://building-backend.onrender.com/api/user/cart/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        await fetchCart();
        console.log("Product deleted successfully");
      } else {
        const errorData = await res.json();
        console.error("Failed to delete product:", errorData);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateQuantity = async ({ productId, quantity }) => {
    if (!token) return;

    try {
      const res = await fetch(
        `https://building-backend.onrender.com/api/user/cart/updateQuantity`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId, quantity }),
        }
      );

      if (res.ok) {
        await fetchCart();
        console.log("Product quantity updated successfully");
      } else {
        const errorData = await res.json();
        console.error("Failed to update product quantity:", errorData);
      }
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };

  const clearCart = async () => {
    if (!token) return;

    try {
      const res = await fetch(`https://building-backend.onrender.com/api/user/cart/deleteAll`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        await fetchCart();
        console.log("Cart items successfully cleared");
      } else {
        const errorData = await res.json();
        console.error("Failed to clear all cart products:", errorData);
      }
    } catch (error) {
      console.error("Error clear cart product:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  return (
    <CartContext.Provider
      value={{ ...state, deleteProductFromCart, updateQuantity, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
