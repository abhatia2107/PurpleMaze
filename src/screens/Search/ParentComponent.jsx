import React, { useState, useEffect } from "react";
import SearchPage from "./SearchPage";
import axios from "axios";
import Pagination from "./Pagination";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_APP_URL } from "../../api/config";

const ParentComponent = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 30;

  useEffect(() => {
    
    axios
      .get(
        `${BASE_APP_URL}/v1/api/advertisements?page=${currentPage}&itemsPerPage=${itemsPerPage}`
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/SearchPage/${pageNumber}`);
  };

  return (
    <div>
      <SearchPage products={products} currentPage={currentPage} />
    </div>
  );
};

export default ParentComponent;
