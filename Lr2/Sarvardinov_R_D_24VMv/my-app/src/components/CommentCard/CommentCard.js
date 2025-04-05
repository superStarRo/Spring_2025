import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CommentCard = ({ username, comment }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{
        width: '640px', 
        maxHeight: '500px', 
        padding: '10px', 
        overflowY: 'auto', 
        marginTop: '10px', 
        marginBottom: '10px', 
        backgroundColor: '#2D2D2D', // темный фон
        borderRadius: '10px',
      }}
    >
      {/* Верхняя часть: никнейм пользователя */}
      <Typography 
        variant="h6" 
        sx={{ color: 'white', fontWeight: 'bold', marginBottom: '10px' }}
      >
        {username}
      </Typography>

      {/* Нижняя часть: текст комментария */}
      <Typography 
        variant="body1" 
        sx={{ color: '#A0A0A0' }}
      >
        {comment}
      </Typography>
    </Paper>
  );
};

export default CommentCard;
