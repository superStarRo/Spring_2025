import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Убираем автоматическое преобразование текста
          color: '#ffffff', // Белый цвет текста
          backgroundColor: '#1976d2', // Синий цвет кнопки (MUI primary)
          border: 'none', // Убираем обводку
          boxShadow: 'none', // Убираем тень
          '&:hover': {
            backgroundColor: '#1565c0', // Чуть темнее при ховере
          },
          '&:active': {
            backgroundColor: '#1976d2', // Оставляем тот же цвет, чтобы не было эффекта нажатия
          }
        }
      }
    },
//
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#23262B', // Цвет фона
          borderRadius: 8, // Скругление углов
          boxShadow: '0 8px 12px -2px rgba(0,0,0,0.2), 0 4px 8px -2px rgba(0,0,0,0.1)', // Тень
          padding: 16, // Внутренние отступы
          width: '100%', // Ширина на всю родительскую ширину
        },
      },
    },
//
  }
});
