import { Box, Paper, Typography } from '@mui/material';
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
  whiteSpace: "nowrap",
}));

export default function FlatGameCard({ id, img, title, category, platform, short_description, onGameClick }){
  return (
    <Paper 
      onClick={()=> onGameClick(id)}
      elevation={3}
      sx={{
        width: { xs: '95%', sm: '500px', md: '800px' },
        minWidth: { xs: '10%', sm: '95%', md: '100%' }, 
        height: { xs: 'auto', md: '120px' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: '#23262B',
        transition: 'box-shadow 0.3s',
        '&:hover': {
          boxShadow: '0 12px 16px -4px rgba(0, 0, 0, 0.3), 0 6px 12px -4px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {/* Блок изображения */}
      <Box 
        sx={{ 
          width: { xs: '100%', sm:'350px',md: '160px' }, 
          height: { xs: 'auto', md: '90px' }, 
          flexShrink: 0 
        }}
      >
        <img
          src={img}
          alt="Game"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            borderRadius: '8px' 
          }}
        />
      </Box>

      {/* Основной блок с информацией */}
      <Box 
        sx={{ 
          flex: 1, 
          marginX: { xs: '0', md: '10px' },
          marginTop: { xs: '10px', md: '0' }, 
          display: 'flex', 
          flexDirection: 'column',
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
          {short_description}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            color:'#272B30',
            backgroundColor:'#7A8288',
            width:'fit-content', 
            borderRadius:'6px', 
            padding: '3px',
            marginTop:'5px',
            fontSize:'12px',
            fontWeight: 'bold',
            marginX: { xs: 'auto', md: '0' } // Выравнивание по центру на мобильных
          }}>
          {category}
        </Typography>
      </Box>

      {/* Блок Free */}
      <Box 
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "center",
          marginLeft: { xs: 0, md: 'auto' }, 
          marginTop: { xs: '10px', md: '0' }
        }}
      >
        <FreeIcon>Free</FreeIcon>
      </Box>
    </Paper>
  );
};
