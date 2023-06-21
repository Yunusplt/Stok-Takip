import React, { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall';

const Brands = () => {


  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("brands"); //todo dinamiklik buradan baslar...
  }, []);
}

export default Brands