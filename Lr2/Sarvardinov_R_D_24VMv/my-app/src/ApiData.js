export class ApiData {
  #urlAllGames = "/api/games";
  #urlGameDetailsById = "/api/game";
  async getData(url, arg = "") {
    try {
      const response = await fetch(`${url}${arg}`);
      if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
      return await response.json();
    } catch (err) {
      console.error("Ошибка при запросе:", err);
      return null;
    }
  }
  async getAllGames() {
    return this.getData(this.#urlAllGames);
  }
  async getGameDetailsById(gameId) {
    return this.getData(this.#urlGameDetailsById, `?id=${gameId}`);
  }
}