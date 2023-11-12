import React, { useEffect, useState } from "react";
import ProductCard from "../Search/Category";
import Filter from "../Search/Filter";
import "./ecommerce.css";
import { BASE_APP_URL, ROLES_LIST } from "../../api/config";
import FreeTrialInfo from "./UpgradeNow";
import { useNavigate } from "react-router-dom";

const EcommercePage = ({ products, setFiltersChange }) => {
  const [ads, setAds] = useState([]);
  const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
  const [freeRole, setFreeRole] = useState(true);
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState({
    industry: "",
    subindustry: "",
    type: "",
    format: "",
  });

  useEffect(() => {
    if (products?.ads) {
      setAds(products.ads);
    }
  }, [products]);

  const handleUpgradeClick = () => {
    navigate("/checkout-payment");
  };
  const filteredAds = ads.filter((ad) => {
    const industryMatch =
      !selectedFilters.industry || ad.industry === selectedFilters.industry;
    const subindustryMatch =
      !selectedFilters.subindustry ||
      ad.subindustry === selectedFilters.subindustry;
    const typeMatch = !selectedFilters.type || ad.type === selectedFilters.type;
    const formatMatch =
      !selectedFilters.format || ad.format === selectedFilters.format;

    return industryMatch && subindustryMatch && typeMatch && formatMatch;
  });
  const handleSetSelectedFiltersChange = (setFilters) => {
    setFiltersChange(setFilters);
  };

  useEffect(() => {
    if (
      accessAuth?.roles === ROLES_LIST.Admin ||
      accessAuth?.roles === ROLES_LIST.PaidUser
    ) {
      setFreeRole(false);
    }
  }, []);

  return (
    <div className="flex justify-center flex-col	">
      <Filter
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        onSelectedFiltersChange={handleSetSelectedFiltersChange}
      />
      {freeRole ? <FreeTrialInfo onUpgradeClick={handleUpgradeClick} /> : <></>}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
        {filteredAds.map((ad) => (
          <ProductCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
