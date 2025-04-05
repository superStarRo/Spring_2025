import { makeAutoObservable } from "mobx";
import { ApiData } from "../ApiData.js";

export class GameStore {
  allGames = []; 
  gameDetails = null; 
  loading = false; 
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.apiData = new ApiData();
  }

  async fetchAllGames() {
    this.loading = true;
    this.error = null;
    try {
      const games = await this.apiData.getAllGames();
      this.allGames = games;
    } catch (err) {
      this.error = err;
      console.error("Ошибка при загрузке всех игр:", err);
    } finally {
      this.loading = false;
    }
  }

// GameStore.js
async fetchGameDetailsById(gameId) {
  this.loading = true;
  this.error = null;
  try {
    const details = await this.apiData.getGameDetailsById(gameId);
    this.gameDetails = details;
  } catch (err) {
    this.error = err;
    console.error("Ошибка при загрузке деталей игры:", err);
  } finally {
    this.loading = false;
  }
}
}

export const gameStore = new GameStore();