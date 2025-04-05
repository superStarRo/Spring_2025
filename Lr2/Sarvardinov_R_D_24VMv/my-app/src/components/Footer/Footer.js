import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from "./logo.png";

export default function Footer() {
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#23262B',  // Цвет фона
        display: 'flex', // Используем flex для выравнивания элементов
        justifyContent: 'space-around', // Элементы по краям
        alignItems: 'center', // Вертикальное выравнивание
        padding: '15px',
        marginTop: '50px',
        boxSizing: 'border-box', // Учитываем паддинги в общей ширине
        overflow: 'hidden', // Убираем прокрутку
      }}
    >
      <Typography 
        sx={{
          color: '#7A8288',  // Цвет текста
          fontSize: '14px', // Размер шрифта
          fontWeight: 'normal',
          whiteSpace: 'nowrap', // Запрещаем перенос текста
          overflow: 'hidden', // Обрезаем текст, если он не помещается
          textOverflow: 'ellipsis', // Три точки в конце, если текст слишком длинный
        }}
      >
        © 2025 Digiwalls Media, all rights reserved. All trademarks are property of their respective owners.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logo} 
          alt="Footer Logo"
          style={{ 
            width: '50px',  // Размер изображения
            height: 'auto',
            objectFit: 'contain',
            maxWidth: '100%', // Убедимся, что изображение не выходит за пределы
          }}
        />
      </Box>
    </Box>
  );
}
