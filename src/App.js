import { useState } from "react";

import Header from "./components/Layout/Header";
import Sneakers from "./components/Sneakers/Sneakers";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart />}
      <header className="App-header">
        <Header onShowCart={showCartHandler} />
      </header>
      <Sneakers />
    </CartProvider>
  );
}

export default App;
