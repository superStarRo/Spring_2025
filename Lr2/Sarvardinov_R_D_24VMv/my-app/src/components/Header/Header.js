import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Иконка гамбургера
import logo from "./logo.png";

const typeGame = [
  "MMORPG", "Shooter", "MOBA", "Anime",
  "Battle Royale", "Strategy", "Fantasy",
  "Sci-Fi", "Card Games", "Racing", "Fighting",
  "Social", "Sports"
];

const GameCategoryMenu = ({ isMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)} variant="contained" color="primary">
        Game Category
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#23262B', // Цвет фона меню
            color: 'white', // Цвет текста
            minWidth: '200px', // Минимальная ширина меню
            maxWidth: '300px', // Максимальная ширина меню
          },
        }}
      >
        {typeGame.map((gameType) => (
          <MenuItem
            key={gameType}
            onClick={() => {
              navigate(`/category/${gameType.toLowerCase()}`);
              setAnchorEl(null);
            }}
            sx={{
              '&:hover': {
                backgroundColor: '#3A57E8', // Цвет фона при наведении
              },
            }}
          >
            {gameType}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Мобильные устройства и планшеты
  const [drawerOpen, setDrawerOpen] = useState(false); // Состояние для открытия/закрытия Drawer
  const [categoryMenuAnchor, setCategoryMenuAnchor] = useState(null); // Состояние для меню категорий

  // Функция для перехода на страницу
  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false); // Закрываем Drawer после перехода
  };

  // Открытие меню категорий
  const handleCategoryMenuOpen = (event) => {
    setCategoryMenuAnchor(event.currentTarget);
  };

  // Закрытие меню категорий
  const handleCategoryMenuClose = () => {
    setCategoryMenuAnchor(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#23262B', padding: '15px' }}>
      {/* Логотип */}
      <Box onClick={() => navigate("/")} sx={{ cursor: 'pointer' }}>
        <img src={logo} alt="logo" style={{ width: '150px' }} />
      </Box>

      {/* Основное меню (скрыто на мобильных устройствах) */}
      {!isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, gap: '30px' }}>
          <Button onClick={() => navigate("/all-games")} variant="contained" color="primary">
            All Games
          </Button>
          <GameCategoryMenu isMobile={isMobile} />
        </Box>
      )}

      {/* Кнопки справа (скрыты на мобильных устройствах) */}
      {!isMobile && (
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button variant="contained">Join Free!</Button>
          <Button variant="outlined">Log in</Button>
        </Box>
      )}

      {/* Бургер-меню (отображается только на мобильных устройствах) */}
      {isMobile && (
        <>
          <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
            <MenuIcon sx={{ color: 'white' }} /> {/* Иконка гамбургера */}
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box sx={{ width: 250, backgroundColor: '#23262B', height: '100%', color: 'white' }}>
              <List>
                {/* Все игры */}
                <ListItem button onClick={() => handleNavigation("/all-games")}>
                  <ListItemText primary="All Games" />
                </ListItem>

                {/* Категории игр */}
                <ListItem button onClick={handleCategoryMenuOpen}>
                  <ListItemText primary="Game Category" />
                </ListItem>
                <Menu
                  anchorEl={categoryMenuAnchor}
                  open={Boolean(categoryMenuAnchor)}
                  onClose={handleCategoryMenuClose}
                  sx={{
                    '& .MuiPaper-root': {
                      backgroundColor: '#23262B', // Цвет фона меню
                      color: 'white', // Цвет текста
                      minWidth: '200px', // Минимальная ширина меню
                      maxWidth: '300px', // Максимальная ширина меню
                    },
                  }}
                >
                  {typeGame.map((gameType) => (
                    <MenuItem
                      key={gameType}
                      onClick={() => {
                        navigate(`/category/${gameType.toLowerCase()}`);
                        handleCategoryMenuClose();
                        setDrawerOpen(false);
                      }}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#3A57E8', // Цвет фона при наведении
                        },
                      }}
                    >
                      {gameType}
                    </MenuItem>
                  ))}
                </Menu>

                {/* Join Free! */}
                <ListItem button onClick={() => handleNavigation("/join-free")}>
                  <ListItemText primary="Join Free!" />
                </ListItem>

                {/* Log in */}
                <ListItem button onClick={() => handleNavigation("/login")}>
                  <ListItemText primary="Log in" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Header;