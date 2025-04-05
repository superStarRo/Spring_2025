import { Box, Paper, Typography, Button } from '@mui/material';
import ad from "./ad.jpg";
import Title from "../Title/Title.js";

export default function Ad() {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Вертикальное расположение на мобильных устройствах, горизонтальное на десктопах
        alignItems: 'center',
        padding: { xs: '15px', md: '20px' }, // Адаптивные отступы
        borderRadius: '10px',
        backgroundColor: '#23262B',
        width: '100%',
        margin: '100px 0 100px 0',
        boxSizing: 'border-box', // Учитываем padding в общей ширине
      }}
    >
      {/* Левый блок: картинка */}
      <Box
        sx={{
          width: { xs: '100%', md: '500px' }, // Адаптивная ширина изображения
          maxWidth: '100%', // Ограничиваем ширину контейнера
          height: { xs: '90%', md: '90%' }, // Адаптивная высота изображения
          flexShrink: 0,
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center', // Центрируем картинку
          alignItems: 'center',
        }}
      >
        <img
          src={ad}
          alt="Join Now"
          style={{
            width: '100%', // Картинка занимает всю ширину контейнера
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </Box>

      {/* Правый блок: заголовок, текст и кнопка */}
      <Box
        sx={{
          flex: 1,
          marginLeft: { xs: 0, md: '20px' }, // Адаптивные отступы
          marginTop: { xs: '20px', md: 0 },
          textAlign: { xs: 'center', md: 'left' }, // Центрирование текста на мобильных устройствах
          width: '100%', // Занимает всю доступную ширину
        }}
      >
        {/* Заголовок */}
        <Title title="More Fun and More Rewarding!" />

        {/* Описание */}
        <Typography
          variant="h6"
          sx={{
            marginBottom: '20px',
            fontSize: { xs: '16px', md: '18px' }, // Адаптивный размер шрифта
            color: '#7a8288',
          }}
        >
          FreeToGame is a gaming platform that brings all the best Free-to-Play Multiplayer Games and MMO Games into one place while rewarding gamers with free premium loot and exclusive perks. Plus maintain your own games library, track what you've played and search for what to play next!
        </Typography>

        {/* Кнопка */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '12px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#1976D2',
            },
          }}
        >
          Join NOW!
        </Button>
      </Box>
    </Paper>
  );
}