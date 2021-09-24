import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase/firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51JdKXGHrRvMowm8hQxces6GHHBxQNU4MesW2tT8BGWiY1zDMlxejKQF9mR7WKoCtwBvW9zfp9vOakh4U5V9Qu77U00raAarEhr"
);
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("user is -> ", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
