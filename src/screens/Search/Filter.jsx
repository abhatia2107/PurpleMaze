import React, { useEffect, useState } from "react";
import "./filter.css";
import axios from "axios";
import FilterDropdown from "./FilterDropdown";
import { BASE_APP_URL } from "../../api/config";

const Filter = ({onSelectedFiltersChange}) => {

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filterOption = await axios.get(BASE_APP_URL+"/v1/api/advertisements/filters");

        setFilterData([
          { label: "Industry", options: filterOption.data.industry || [] },
          { label: "SubIndustry", options: filterOption.data.subindustry || [] },
          { label: "Type", options: filterOption.data.type || [] },
          { label: "Format", options: filterOption.data.format || [] },
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const handleFilterChange = (newFilters) => {
    onSelectedFiltersChange(newFilters)
  };

  return (
    <div className="flex items-center justify-center">
      <FilterDropdown data={filterData} onFilterChange={handleFilterChange} />     
    </div>
  );
};

export default Filter;
