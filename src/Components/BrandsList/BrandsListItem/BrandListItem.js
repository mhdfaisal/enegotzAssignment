import React from "react";
import styles from './BrandsListItem.module.css';
import {Link} from 'react-router-dom';

const renderBrandListIem = ({ make, logo, additionalInfo=null }) => {
  return (
    <div
      className={`my-4 ${styles.brandsListItemContainer}`}
    >
      <div
        className={styles.brandsListImageContainer}
      >
        <div>
          <img
            src={logo}
            className={styles.brandListImage}
            alt="logo"
          />
        </div>
      </div>
      <div className="align-self-center">
        <Link to={`/list/${make}`}><h4>{make.toUpperCase()}</h4></Link>
        <h6>{additionalInfo}</h6>
      </div>
    </div>
  );
};

const BrandListItem = ({ brandItem }) => {
  return <div>{renderBrandListIem(brandItem)}</div>;
};

export default BrandListItem;
