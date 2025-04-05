// App.js
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import MainPage from "./pages/MainPage/MainPage.js";
import AllGamesPage from "./pages/AllGamesPage/AllGamesPage.js";
import CategoryPage from "./pages/CategoryPage/CategoryPage.js";
import Game from "./pages/Game/Game.js";
import useFetchGames from "./hooks/useFetchGames.js";

export default function App() {
  const { allGames, loading, error } = useFetchGames();
  const navigate = useNavigate();

  const handleGameClick = (id) => {
    navigate(`/game/${id}`);
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage allGames={allGames} onGameClick={handleGameClick} />} />
        <Route path="/all-games" element={<AllGamesPage allGames={allGames} onGameClick={handleGameClick} />} />
        <Route path="/category/:category" element={<CategoryPage allGames={allGames} onGameClick={handleGameClick} />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
      <Footer />
    </>
  );
}