import React from "react";
import _ from "lodash";
import cars from "../../api/cars";
import Spinner from "../../Widgets/Spinner/Spinner";
import uuid from "uuid/v1";
import BrandsListItem from "./BrandsListItem/BrandListItem";
import layout from "../../hoc/layout";

class BrandList extends React.Component {
  state = { brandsArray: [] };

  setUniqueBrands = data => {
    const uniqueBrands = _.uniqBy(data, e => {
      return e.make;
    });
    this.setState({ brandsArray: uniqueBrands });
  };

  componentDidMount() {
    cars.get().then(res => this.setUniqueBrands(res.data));
  }

  renderBrandList = () => {
    const { brandsArray } = this.state;
    return brandsArray.map(brand => {
      return (
        <div className="container" key={uuid()}>
          <BrandsListItem brandItem={brand} />
        </div>
      );
    });
  };

  render() {
    const { brandsArray } = this.state;
    return brandsArray.length > 0 ? this.renderBrandList() : <Spinner />;
  }
}

export default layout(BrandList);
