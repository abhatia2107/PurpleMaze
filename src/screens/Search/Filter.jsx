import React, { useEffect, useState } from "react";
import "./filter.css";
import axios from "axios";
import FilterDropdown from "./FilterDropdown";

const Filter = () => {
  const initialFilters = {};

  // const [selectedFilters, setSelectedFilters] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Fetch data for each filter from their respective URLs
    const fetchData = async () => {
      try {
        const filterOption = await axios.get("https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements/filters");

        // const industryResponse = await axios.get("https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements/filters/industry");
        // const subindustryResponse = await axios.get("https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements/filters/subindustry");
        // const typeResponse = await axios.get("https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements/filters/type");
        // const formatResponse = await axios.get("https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements/filters/format");

        // Assuming the data is in the response's data property, adjust accordingly

        setFilterData([
          { label: "Industry", options: filterOption.data.industry || [] },
          { label: "Sub Industry", options: filterOption.data.subindustry || [] },
          { label: "Type", options: filterOption.data.type || [] },
          { label: "Format", options: filterOption.data.format || [] },
        ]);
        console.log('filterData', filterData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);

    console.log('Selected Filters:', newFilters);
  };

  // const handleFilterChange = (category, value) => {
  //   setSelectedFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [category]: value,
  //   }));
  // };

  // const handleDropdownToggle = () => {
  //   setShowDropdown(!showDropdown);
  // };

  return (
    <div className="container">
      {/* <div className="overlap">
        <div className="frame-10">
          <div className="frame-11">
            <div className="text-wrapper-13">Search Here</div>
          </div>
          <img
            className="vuesax-linear-search"
            alt="Vuesax linear search"
            src="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/vuesax-linear-search-normal.svg"
          />
        </div>
        <img
          className="img-2"
          alt="Img"
          src="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/64088dfd259d863110d90801-doodle1-1.svg"
        />
      </div> */}
      <FilterDropdown data={filterData} onFilterChange={handleFilterChange} />     
      {/* <div className="frame-12">
        {filterData.length > 0 &&
          filterData.map((filter, index) => (
            <div className="frame-13" key={index}>
              <div className="dropdown">
                <button className="dropdown-toggle" onClick={handleDropdownToggle}>
                  Show Filters
                </button>
                {showDropdown && (
                  <select
                    value={selectedFilters[filter.label]}
                    onChange={(e) => handleFilterChange(filter.label, e.target.value)}
                  >
                    <option value="">Select {filter.label}</option>
                    {filter.options.map((option, optionIndex) => (
                      <option value={option} key={optionIndex}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default Filter;
