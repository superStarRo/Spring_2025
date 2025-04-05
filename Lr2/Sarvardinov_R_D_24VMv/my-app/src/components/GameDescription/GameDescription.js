import React from "react";
import { Paper, Typography } from "@mui/material";

const GameDescription = ({ description }) => {
  return (
    <Paper
      sx={{
        width: "100%",
        backgroundColor: "zinc.800",
        borderRadius: 2,
        boxShadow:
          "0 8px 12px -2px rgba(0,0,0,0.2), 0 4px 8px -2px rgba(0,0,0,0.1)",
        p: 2,
        mt: 1,
        mb: 1,
      }}
    >
      <Typography color="zinc.300">{description}</Typography>
    </Paper>
  );
};

export default GameDescription;
