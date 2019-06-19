import React from "react";
import cars from "../../api/cars";
import BrandModelItem from "./BrandModelItem/BrandModelItem";
import layout from "../../hoc/layout";
import BrandListItem from "../BrandsList/BrandsListItem/BrandListItem";
import BackBtn from "../../Widgets/BackBtn/BackBtn";
import uuid from "uuid/v1";
import Spinner from "../../Widgets/Spinner/Spinner";

class BrandModels extends React.Component {
  state = { availableModels: [], makeValue: "" };

  fetchAvailableModels = make => {
    cars
      .get()
      .then(res => {
        let data = res.data;
        const availableModels = data.filter(item => {
          return item.make === make;
        });
        this.setState({ availableModels, makeValue: make });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    const { make } = this.props.match.params;
    this.fetchAvailableModels(make);
  }

  renderBrandModels = () => {
    const { availableModels } = this.state;
    return availableModels.map((model, index) => {
      return <BrandModelItem model={model} index={index} key={uuid()} />;
    });
  };

  renderTemplate = () => {
    const { availableModels, makeValue } = this.state;
    return (
      <>
        <div className="mb-5">
          <BrandListItem
            brandItem={{
              make: makeValue,
              logo: availableModels[0].logo,
              additionalInfo: "List of available models"
            }}
          />
        </div>

        <div className="row" style={{ borderBottom: "3px solid #000" }}>
          <div className="col-md-2">
            <h6>S.no</h6>
          </div>
          <div className="col-md-2">
            <h6>Aspiration</h6>
          </div>
          <div className="col-md-2">
            <h6>Body Style</h6>
          </div>
          <div className="col-md-2">
            <h6>Fuel Type</h6>
          </div>
          <div className="col-md-2">
            <h6>Price</h6>
          </div>
          <div className="col-md-2">
            <h6>More Details</h6>
          </div>
        </div>
      </>
    );
  };

  render() {
    const { availableModels } = this.state;
    return availableModels.length > 0 ? (
      <div className="container mt-5">
        <BackBtn
          URL="/"
          text="Back"
          onBackBtnClick={() => {
            this.props.history.push("/");
          }}
        />
        {this.renderTemplate()}
        {this.renderBrandModels()}
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default layout(BrandModels);
