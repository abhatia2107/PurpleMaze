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

import { usePagination } from "../../hooks/usePagination";

export const SearchPage = () => {
  let { page } = useParams();
  if (!page) {
    page = 0;
  }
  const [filterCount, setFilterCount] = useState("");
  const [products, setProducts] = useState([]);
  const [showPageNumber, setShowPageNumber] = useState("");
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
    axios
      .get(
        `${BASE_APP_URL}/v1/api/advertisements?page=${page}&itemsPerPage=${itemsPerPage}${filterparamsString}`,
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
  }, [page, filterCount]);

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
  };
  useEffect(() => {
    const nextPage = String(parseInt(page, 10) + 1);
    setShowPageNumber(nextPage);
  }, [page]);

  const onPageClick = (page) => {
    window.location.href = `/SearchPage/${page}`;
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
              className="flex"
              disabled={page === "0"}
              onClick={() =>
                (window.location.href = `/SearchPage/${parseInt(page) - 1}`)
              }
            >
              <ArrowBackward className="flex self-center mr-1" />
              Prev Page
            </button>
          )}
          {paginationRange.map((key) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (key === "...") {
              return <span className="pagination-item dots">&#8230;</span>;
            }

            return (
              <span
                className={key === currentPageNumber ? "active" : null}
                onClick={() => onPageClick(key)}
                key={key}
              >
                {key}
              </span>
            );
          })}
          {currentPageNumber < totalPages && (
            <button
              className="flex"
              onClick={() =>
                (window.location.href = `/SearchPage/${parseInt(page) + 1}`)
              }
            >
              Next Page <ArrowForward className="flex self-center ml-1" />
            </button>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchPage;
