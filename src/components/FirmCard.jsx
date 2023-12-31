import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../hooks/useStockCall";
import { btnStyle } from "../styles/globalStyle";

export default function FirmCard({ firm, handleOpen , setInfo }) {
    const {deleteStockData} = useStockCall()
  return (
    <Card sx={{ 
    p:2,
    width:"300px",
    height:"400px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
    }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: "contain" }}
        image={firm.image}
        title={firm.name}
        alt={firm.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone: {firm.phone}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <EditIcon onClick={()=>handleOpen(setInfo(firm))} sx={btnStyle} />
        <DeleteOutlineIcon 
          sx={btnStyle}
          onClick={()=>deleteStockData("firms",firm.id,firm.name)}
        />
      </CardActions>
    </Card>
  );
}
