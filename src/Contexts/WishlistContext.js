import { createContext, useReducer, useEffect } from "react";
import { getUserFromLocalStorage } from "./localStorage";

const Reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SAVED_PRODUCT":
      return { ...state, savedItems: { ...state.savedItems, saved: action.payload } };
    case "FETCH_LOADING_SAVED_PRODUCT":
      return { ...state, savedItems: { ...state.savedItems, loading: action.payload } };
    default:
      return state;
  }
};

export const WishlistContext = createContext();

const initialState = {
  savedItems: {
    loading: false,
    saved: [],
  },
};

const WishlistContextProvider = ({ children }) => {
  const user = getUserFromLocalStorage();
  const token = user ? user.token : null;

  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchWishlist = async () => {
    if (!token) return;

    dispatch({ type: "FETCH_LOADING_SAVED_PRODUCT", payload: true });

    try {
      const res = await fetch("http://localhost:5000/api/user/saveItems", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: "FETCH_LOADING_SAVED_PRODUCT", payload: false });
        dispatch({ type: "FETCH_SAVED_PRODUCT", payload: data.products });
      } else {
        console.error("Failed to fetch cart items.");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToWishlist = async ({ productId }) => {
    if (!token) return;

    try {
      const res = await fetch("http://localhost:5000/api/user/saveItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        await fetchWishlist();
      } else {
        const error = await res.json();
        console.error("Error adding to cart:", error);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const deleteProductFromWishlist = async (productId) => {
    if (!token) return;

    try {
      const res = await fetch(`http://localhost:5000/api/user/saveItems/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        await fetchWishlist();
        console.log("Product deleted successfully");
      } else {
        const errorData = await res.json();
        console.error("Failed to delete product:", errorData);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const clearWishlist = async () => {
    if (!token) return;

    try {
      const res = await fetch(`http://localhost:5000/api/user/saveItems/deleteAll`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        await fetchWishlist();
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
    fetchWishlist();
  }, [token]);

  return (
    <WishlistContext.Provider
      value={{ ...state, deleteProductFromWishlist, addToWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
