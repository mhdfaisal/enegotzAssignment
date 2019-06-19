import React from "react";
import uuid from "uuid/v1";
import BrandListItem from "../BrandsList/BrandsListItem/BrandListItem";
import BackBtn from "../../Widgets/BackBtn/BackBtn";
import layout from "../../hoc/layout";
import cars from "../../api/cars";
import ModelDetailedInfoItem from "./ModelDetailedInfoItem/ModelDetailedInfoItem";
import Spinner from "../../Widgets/Spinner/Spinner";

class MoreDetailedInfo extends React.Component {
  state = { selectedModelDetails: [], id: null };

  componentDidMount() {
    const { make, id } = this.props.match.params;
    cars.get().then(res => {
      let shortlistedModels = res.data.filter(model => model.make === make);
      this.setState({
        selectedModelDetails: { ...shortlistedModels[id - 1] },
        id: id - 1
      });
    });
  }

  renderTemplate = () => {
    const { selectedModelDetails, id } = this.state;
    return (
      <>
        <BackBtn
          URL="/"
          text="Back"
          onBackBtnClick={() => {
            this.props.history.push(`/list/${selectedModelDetails.make}`);
          }}
        />

        <span className="ml-3">
          <BackBtn
            URL="/"
            text="Back to home"
            onBackBtnClick={() => {
              this.props.history.push(`/`);
            }}
          />
        </span>

        <BrandListItem
          brandItem={{
            make: selectedModelDetails.make,
            logo: selectedModelDetails.logo,
            additionalInfo: `Detailed Information of model ${id + 1} :`
          }}
        />
      </>
    );
  };

  renderModelDetails = () => {
    const { selectedModelDetails } = this.state;
    const output = [];
    for (let x in selectedModelDetails) {
      if (x !== "logo") {
        output.push(
          <ModelDetailedInfoItem
            item={{ name: x, value: selectedModelDetails[x] }}
            key={uuid()}
          />
        );
      }
    }

    return output;
  };

  render() {
    const { selectedModelDetails } = this.state;
    return Object.keys(selectedModelDetails).length > 0 ? (
      <div className="container my-5">
        {this.renderTemplate()}
        {this.renderModelDetails()}
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default layout(MoreDetailedInfo);
