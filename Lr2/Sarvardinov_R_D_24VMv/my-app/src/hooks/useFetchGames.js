import { useState, useEffect } from 'react';
import { ApiData } from '../ApiData.js';

export default function useFetchGames() {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiData = new ApiData();
    const fetchGames = async () => {
      try {
        const games = await apiData.getAllGames();
        setAllGames(games);
      } catch (err) {
        console.error("Ошибка при загрузке данных:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  return { allGames, loading, error };
}