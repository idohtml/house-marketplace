import { Link } from "react-router-dom";
import rentCatagoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCatagoryImage from "../assets/jpg/sellCategoryImage.jpg";

export default function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/* Slider */}

        <p className="exploreCategoryHeading">Catagories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCatagoryImage}
              alt="Rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCatagoryImage}
              alt="Sell"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
