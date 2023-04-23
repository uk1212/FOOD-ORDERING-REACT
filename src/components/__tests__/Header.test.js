import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";


test("Logo should load on rendering header", () => {
  //Load the header
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  // console.log(header);

  const logo =header.getAllByTestId("logo");
  // console.log(logo[0]);
  //Check if logo is loaded
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});


test("Online status should be green on rendering head", () => {
  //Load the header
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  // console.log(header);

  const onlineStatus =header.getByTestId("online-status");
  
  expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart should have zero items", () => {
  //Load the header
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );

  const cart =header.getByTestId("cart");
  
  expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart- 0 items</a>");
});
