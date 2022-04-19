import React from "react";
//react router dom
import { Switch, Route } from "react-router-dom";
//contexts
import AuthContextProvider from "./context/AuthContextProvider";
//components
import Login from "./components/Login";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path={"/chats"} component={Chats} />
          <Route path={"/"} component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
