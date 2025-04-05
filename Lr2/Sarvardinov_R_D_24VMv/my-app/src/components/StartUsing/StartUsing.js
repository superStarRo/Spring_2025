import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import paladins from "./paladins.png"
const StartUsing = ({ src, alt, width = '30%', height = '300px' }) => {
 return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',  // Блок растягивается на всю ширину
        height: '30vh',  // Высота на весь экран
        overflow: 'hidden', // Скрывает все, что выходит за пределы
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Внешний контейнер с виньеткой */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />
      
      {/* Картинка, сохраняющая свои размеры */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'inline-block',
        }}
      >
        <img src={paladins} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>

      {/* Текст и кнопка */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          padding: '0 20px',
          width: '100%',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '3rem', marginBottom: '20px' }}>
          Discover the best free-to-play games!
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          Track what you've played and search for what to play next! Plus get free premium loot!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            borderRadius: '5px',
            textTransform: 'none',
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default StartUsing;
