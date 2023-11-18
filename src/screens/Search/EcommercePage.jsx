import React, { useEffect, useState } from "react";
import ProductCard from "../Search/Category";
import Filter from "../Search/Filter";
import "./ecommerce.css";
import { ROLES_LIST } from "../../api/config";
import FreeTrialInfo from "./UpgradeNow";
import { useNavigate } from "react-router-dom";

const EcommercePage = ({ products }) => {
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
    // Update URL with new filters
    const urlParams = new URLSearchParams();
    Object.entries(setFilters).forEach(([key, value]) => {
      urlParams.set(key, value);
    });
    const newUrl = `/SearchPage?${urlParams.toString()}`;

    window.location.href = newUrl;
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
      {filteredAds.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
          {filteredAds.map((ad) => (
            <ProductCard key={ad.id} ad={ad} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center my-24 flex-col">
          <div className="text-2xl">No Records Available</div>
          <p className="p-2 text-center text-gray-500">
            For applied filters no more records available, clear out filters or
            try with other combination
          </p>
        </div>
      )}
    </div>
  );
};

export default EcommercePage;
