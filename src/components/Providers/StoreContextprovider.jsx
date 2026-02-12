import React, { useState } from "react";
import StoreContext from "../../context/StoreContext";
import { food_list } from "../../assets/assets";

const StoreContextProvider = ({ children }) => {
  const [state, setState] = useState({ /* initial state */ });
  const [cartItems,setCartItems]=useState({})

  const addToCart=(itemId)=>{
    setCartItems((prev)=>{
 if(prev[itemId]){
     return {...prev,[itemId]:prev[itemId]+1}

    }
    else{
      return {...prev,[itemId]:1}

    }
    });
   
  }

const getTotalCartAmount=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      let itemInfo=food_list.find((product)=>product._id===item);
      totalAmount+=cartItems[item]*itemInfo.price;
    }
  }
  return totalAmount;
}

  const removeFromCart = (itemId) => {
  setCartItems((prev) => {
    if (prev[itemId] > 1) {
      // If count > 1, decrement
      return { ...prev, [itemId]: prev[itemId] - 1 };
    } else {
      // If count is 1, remove the item from cart
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    }
  });
};

  const contextValue = {
food_list,
cartItems,
setCartItems,
addToCart,
removeFromCart,
getTotalCartAmount
  };
  
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;