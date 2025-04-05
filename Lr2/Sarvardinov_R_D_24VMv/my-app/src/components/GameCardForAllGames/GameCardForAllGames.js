import { Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
// Стилизованный компонент для иконки "Free"
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

export default function GameCardForAllGames({ id, title, img, category, short_description, onGameClick}) {
  return (
    <Paper onClick={()=>onGameClick(id)} sx={{ cursor: 'pointer' }}
      sx={{
        width: { xs: '90%', md: '90%' },
        height: 450,
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
        "&:hover": {
          boxShadow:
            "0 16px 24px -4px rgba(0,0,0,0.3), 0 8px 16px -4px rgba(0,0,0,0.2)",
        },
      }}
    >
      {/* Название игры */}
      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 18, mb: 2 }}>
        {title}
      </Typography>

      {/* Изображение игры */}
      <Box sx={{ mb: 2 }}>
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%", // Фиксированная высота для изображения
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Описание игры */}
      <Typography variant="body2" sx={{ fontSize: 14, color: "#7A8288", mb: 2 }}>
        {short_description}
      </Typography>

      {/* Нижний блок: категория и Free */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Категория */}
        <Typography
          variant="body2"
          sx={{
            color: "#272B30",
            backgroundColor: "#7A8288",
            width: "fit-content",
            borderRadius: "6px",
            padding: "3px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {category}
        </Typography>

        {/* Иконка "Free" */}
        <FreeIcon>Free</FreeIcon>
      </Box>
    </Paper>
  );
}