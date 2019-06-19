import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BrandsList from "../BrandsList/BrandsList";
import BrandModels from "../BrandModels/BrandModels";
import ModelDetailedInfo from "../ModelDetailedInfo/ModelDetailedInfo";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={BrandsList} exact />
          <Route
            path="/details/:make/:id"
            component={ModelDetailedInfo}
            exact
          />
          <Route path="/list/:make" component={BrandModels} exact />
          <Route
            component={() => {
              return <h1>404 - Not Found</h1>;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
