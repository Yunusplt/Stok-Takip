import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Products = () => {
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("firms"); //todo dinamiklik buradan baslar...
  }, []);
};

export default Products;
