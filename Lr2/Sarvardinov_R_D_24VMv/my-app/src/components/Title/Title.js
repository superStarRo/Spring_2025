import { Typography, Box } from '@mui/material';
export default function CustomTitle({title}){
  return <Typography variant="h6" 
      sx={{
        width: '100%',
        fontWeight: 'bold',
        py: 1,
        mb: 1,
        color: 'rgba(170, 170, 170, 1)'}}>
      <Box sx={{ mt: 3, mb: 2 }}>
        {title.toUpperCase()}
      </Box>
    </Typography>
};