import { useState } from "react";
import { useEffect } from "react";

const useMenu = (id) => {
  const [menuDetails, setMenuDetails] = useState(null);
  //Get data from api
  useEffect(() => {
    getMenuDetails();
  }, []);
  async function getMenuDetails() {
    const data = await fetch(
      "  https://www.swiggy.com/dapi/menu/quick?menuId=" +
        id +
        "&categories=true"
    );
    const json = await data.json();
    setMenuDetails(json);
  }
  //  return menu data
  return menuDetails;
};

export default useMenu;
