export class GameNotification {
    constructor(type, data) {
      this.type = type; // e.g., 'scoreUpdate', 'resetScores'
      this.data = data; // e.g., updated scores or other relevant data
    }
  }