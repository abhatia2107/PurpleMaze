import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import "../Search/styleSearch.css";
import LogInHeader from "./LogInHeader";
import EcommercePage from "../Search/EcommercePage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_APP_URL, ROLES_LIST } from "../../api/config";
import { ReactComponent as ArrowForward } from "../../icons/ArrowForward.svg";
import { ReactComponent as ArrowBackward } from "../../icons/ArrowBackward.svg";

import { getFiltersFromURL } from "../../screens/Search/FilterDropdown";
import { usePagination } from "../../hooks/usePagination";

const getUrlParams = () => {
  const urlParams = new URLSearchParams();
  Object.entries(getFiltersFromURL()).forEach(([key, value]) => {
    urlParams.set(key, value);
  });

  return urlParams.toString();
};

export const SearchPage = () => {
  let { page } = useParams();
  if (!page) {
    page = 0;
  }
  const [filterCount, setFilterCount] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState("");
  const [totalPages, setTotalPages] = useState("");

  const itemsPerPage = 30;
  const [filterparamsString, setfilterparamsString] = useState("");

  const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
  const [isPaidUser, setIsPaidUser] = useState(false);

  useEffect(() => {
    if (
      accessAuth?.roles === ROLES_LIST.Admin ||
      accessAuth?.roles === ROLES_LIST.PaidUser
    ) {
      setIsPaidUser(true);
    }
  }, []);

  useEffect(() => {
    const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));

    if (!accessAuth?.accessToken) return;

    const queryParams = getQueryParams(getFiltersFromURL());

    axios
      .get(
        `${BASE_APP_URL}/v1/api/advertisements?page=${page}&itemsPerPage=${itemsPerPage}${queryParams}`,
        {
          headers: {
            Authorization: accessAuth?.accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setProducts(response.data);
        setCurrentPageNumber(response.data.page_number);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, filterparamsString]);

  const getQueryParams = (FiltersChange) => {
    let IndustryString = "";
    let TypeString = "";
    let FormatString = "";
    let SubIndustryString = "";
    let filterparams = "";
    if (FiltersChange?.Industry) {
      IndustryString = `&industry=${FiltersChange?.Industry}`;
    }
    if (FiltersChange?.Type) {
      TypeString = `&type=${FiltersChange?.Type}`;
    }
    if (FiltersChange?.Format) {
      FormatString = `&format=${FiltersChange?.Format}`;
    }
    if (FiltersChange?.SubIndustry) {
      SubIndustryString = `&subindustry=${FiltersChange?.SubIndustry}`;
    }
    filterparams =
      IndustryString + TypeString + FormatString + SubIndustryString;

    return filterparams;
  };
  const handleSetFiltersChange = (FiltersChange) => {
    let IndustryString = "";
    let TypeString = "";
    let FormatString = "";
    let SubIndustryString = "";
    let filterparams = "";
    if (FiltersChange?.Industry) {
      IndustryString = `&industry=${FiltersChange?.Industry}`;
    }
    if (FiltersChange?.Type) {
      TypeString = `&type=${FiltersChange?.Type}`;
    }
    if (FiltersChange?.Format) {
      FormatString = `&format=${FiltersChange?.Format}`;
    }
    if (FiltersChange?.SubIndustry) {
      SubIndustryString = `&subindustry=${FiltersChange?.SubIndustry}`;
    }
    filterparams =
      IndustryString + TypeString + FormatString + SubIndustryString;
    setFilterCount(FiltersChange);
    setfilterparamsString(`${filterparams}`);
    setCurrentPageNumber(1);
  };

  // useEffect(() => {
  //   handleSetFiltersChange(getFiltersFromURL());
  // }, [page]);

  const onPageClick = (page) => {
    const urlParams = new URLSearchParams();
    Object.entries(getFiltersFromURL()).forEach(([key, value]) => {
      urlParams.set(key, value);
    });

    window.location.href = `/SearchPage/${page}?${getUrlParams()}`;
  };

  const paginationRange = usePagination({
    totalCount: totalPages * itemsPerPage,
    pageSize: itemsPerPage,
    siblingCount: 1,
    currentPage: currentPageNumber,
  });

  return (
    <div className="flex flex-col">
      <LogInHeader />
      <EcommercePage
        products={products}
        setFiltersChange={handleSetFiltersChange}
      />

      {isPaidUser && (
        <div className="pagination py-2 pb-4">
          {currentPageNumber > 0 && (
            <button
              className="flex p-1"
              disabled={page === "0"}
              onClick={() => onPageClick(parseInt(page) - 1)}
            >
              <ArrowBackward className="flex self-center mx-1" />
              <span className="hidden sm:flex pr-2 py-2">Prev Page</span>
            </button>
          )}
          {paginationRange.map((key) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (key === "...") {
              return <div className="px-1">&#8230;</div>;
            }

            return (
              <div
                className={
                  key === currentPageNumber
                    ? "active px-2 py-1 m-1"
                    : "px-2 py-1 m-1"
                }
                onClick={() => onPageClick(key)}
                key={key}
              >
                {key}
              </div>
            );
          })}
          {currentPageNumber < totalPages && (
            <button
              className="flex p-1"
              onClick={() => onPageClick(parseInt(page) + 1)}
            >
              <span className="hidden sm:flex pl-2 py-2">Next Page</span>
              <ArrowForward className="flex self-center mx-1" />
            </button>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchPage;
