import React from "react";
import { Paper, Box, Typography } from "@mui/material";

const GameInfoCard = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        backgroundColor: "zinc.800",
        borderRadius: 2,
        boxShadow:
          "0 8px 12px -2px rgba(0,0,0,0.2), 0 4px 8px -2px rgba(0,0,0,0.1)",
        p: 2,
        display: "flex",
        gap: 2,
        mt: 1,
        mb: 1,
      }}
    >
      {/* Первая часть */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Box>
          <Typography variant="h6" color="white" fontWeight="bold">
            Title
          </Typography>
          <Typography color="zinc.300">--</Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="white" fontWeight="bold">
            Release Date
          </Typography>
          <Typography color="zinc.300">--</Typography>
        </Box>
      </Box>

      {/* Вторая часть */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Box>
          <Typography variant="h6" color="white" fontWeight="bold">
            Developer
          </Typography>
          <Typography color="zinc.300">--</Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="white" fontWeight="bold">
            Genre
          </Typography>
          <Typography color="zinc.300">--</Typography>
        </Box>
      </Box>

      {/* Третья часть */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Box>
          <Typography variant="h6" color="white" fontWeight="bold">
            Publisher
          </Typography>
          <Typography color="zinc.300">--</Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="white" fontWeight="bold">
            Platform
          </Typography>
          <Typography color="zinc.300">--</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default GameInfoCard;
