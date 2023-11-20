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
  const [products, setProducts] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 30;

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

    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [page]);

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

  if (isLoading)
    return (
      <>
        <LogInHeader />
        <div className="flex justify-center my-32" role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <Footer />
      </>
    );

  return (
    <div className="flex flex-col">
      <LogInHeader />
      <EcommercePage products={products} />

      {isPaidUser && (products?.total_pages || 0) > 0 && (
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
