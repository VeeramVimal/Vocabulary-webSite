import React from "react"
import { Switch, Route } from "react-router-dom"

import ListWords from "../ListWords";

function Main() {

    return (

<Switch>
  
      <Route exact path='/' component={ListWords} />
      
</Switch>

    );

}
export default Main;

