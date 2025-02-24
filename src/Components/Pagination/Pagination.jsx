import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; 

  
  const goToPrevious = () => onPageChange(currentPage - 1);
  const goToNext = () => onPageChange(currentPage + 1);
  const goToPage = (page) => onPageChange(page);

  // Generate page numbers (basic version)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return <nav aria-label="Pagination">{/* Pagination UI */}</nav>;
};

export default Pagination;
