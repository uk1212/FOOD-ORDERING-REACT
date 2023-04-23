import Body from "../Body";
import { render,waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Restaurant_Data } from "../../mocks/dummyDataApi";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Restaurant_Data);
    },
  });
});

// test("Search Results on Homepage", () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );
//   // console.log(body);
//   const searchBtn=body.getByTestId("search-btn");
//   console.log(searchBtn);
// });
test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  const shimmer=body.getByTestId("shimmer");
  expect (shimmer.children.length).toBe(15);
  console.log(shimmer);
});
test("Restaurant should load on Homepage",async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=>expect(body.getByTestId("search-btn")))
  const resList=body.getByTestId("res-list");
  expect (resList.children.length).toBe(15);
  // console.log(shimmer);
});
