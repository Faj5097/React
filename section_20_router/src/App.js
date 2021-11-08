import { Fragment } from "react";
import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/detailProducts/:detail">
          <DetailProduct />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
