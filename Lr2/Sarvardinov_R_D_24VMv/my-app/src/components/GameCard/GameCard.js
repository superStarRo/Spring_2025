import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
const FreeIcon = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, 
  color: theme.palette.common.white,
  borderRadius: "4px",
  padding: "4px 8px",
  fontSize: "14px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export default function GameCard({ id, title, img, onGameClick }){
  return(
    <Paper onClick={()=>onGameClick(id)}
        sx={{
        width: 345,
        height: 250,
        backgroundColor: "#23262B",
        borderRadius: 2,
        boxShadow:
          "0 8px 12px -2px rgba(0,0,0,0.2), 0 4px 8px -2px rgba(0,0,0,0.1)",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover":{
          boxShadow:
            "0 16px 24px -4px rgba(0,0,0,0.3), 0 8px 16px -4px rgba(0,0,0,0.2)"}}}>
      <Box sx={{ mb: 2 }}>
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px"}}/>
      </Box>
      <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"}}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 16 }}>{title}</Typography>
        <FreeIcon>Free</FreeIcon>
      </Box>
    </Paper>
  );
};
