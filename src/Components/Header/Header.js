import React from "react";
import NavigationBar from '../../Widgets/NavigationBar/NavigationBar';

const Header = () => {
  return (
    <>
      <NavigationBar logoUrl="/logo/cars.png" brandText="Cars Inventory" 
      linkURL="/"
      />
    </>
  );
};
export default Header;
