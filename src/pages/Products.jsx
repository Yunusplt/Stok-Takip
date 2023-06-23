import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductModal from "../components/ProductModal";
import BrandCard from "../components/BrandCard";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Products = () => {
  const { getStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      category_id: "",
      brand_id: "",
    });
  };

  const [info, setInfo] = useState({
    name: "",
    category_id: "",
    brand_id: "",
  });

  useEffect(() => {
    getStockData("products");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={2}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 2 }}>
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {products.map((brand) => (
          <Grid item key={brand.id}>
            <BrandCard
              brand={brand}
              handleOpen={handleOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;

// https://cdn.pixabay.com/photo/2016/11/18/11/16/instagram-1834010__340.png
// https://cdn.pixabay.com/photo/2016/11/18/11/16/facebook-1834007__340.png
// https://cdn.pixabay.com/photo/2016/11/18/11/17/youtube-1834016__340.png
// https://cdn.pixabay.com/photo/2016/11/21/08/44/whatsapp-1844471__340.png
// https://cdn.pixabay.com/photo/2016/11/18/11/16/social-1834011__340.png
// https://cdn.pixabay.com/photo/2017/01/11/08/31/icon-1971130__340.png
// https://cdn.pixabay.com/photo/2017/01/11/08/32/icon-1971136__340.png
// https://cdn.pixabay.com/photo/2017/02/01/08/55/social-2029115__340.png
// https://cdn.pixabay.com/photo/2016/11/23/09/40/social-1852360__340.png
