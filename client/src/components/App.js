import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Homes from "./Homes";
import Meals from "./Meals";
import LandingPage from "./LandingPage";
import MealItems from "./MealItems";
import Faq from "./Faq";

function App() {
  const [user, setUser] = useState(null);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <>
            <Switch>
              <Route exact path="/">
                <Homes user={user} />
                <LandingPage />
              </Route>
              <Route exact path="/buildameal">
                <MealItems setMeals={setMeals} meals={meals} />
              </Route>
              <Route exact path="/meals">
                <Meals user={user} setMeals={setMeals} meals={meals} />
              </Route>
              <Route exact path="/faq" component={Faq}></Route>
            </Switch>
          </>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Homes />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
