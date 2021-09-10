import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { getBasename } from "./core/utils/helpers";
// import { CookiesProvider } from "react-cookie";
// import { ToastContainer } from "react-toastify";
// import getLocale from "core/utils/getLocale";
// import getMessages from "core/utils/getMessages";
// import ShopPage from "pages/shop";
// import IndexPage from "pages/index";
// import LoginPage from "pages/login";
// import CodePage from "pages/code";
// import LandingPage from "pages/landing";
// import Intl from "core/components/Intl";
// TODO: Import all css from editor package
// import "node-snackbar/dist/snackbar.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "./core/redux/store";
import ProductList from "./pages/ProductList";
import CardList from "./pages/CardList";
import ProductDetail from "./pages/ProductDetail";
import RouterWrapper from "./core/components/RouterWrapper";
import "./App.scss";

const queryClient = new QueryClient();
export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          {/* <CssBaseline /> */}
          <RouterWrapper>
            <Switch>
              <Route path="/" exact>
                <ProductList />
              </Route>
              <Route path="/product/:productId" exact>
                <ProductDetail />
              </Route>
              <Route path="/card" exact>
                <CardList />
              </Route>
            </Switch>
          </RouterWrapper>
        </Router>
        {/* </CookiesProvider> */}
      </QueryClientProvider>
    </Provider>
  );
}
