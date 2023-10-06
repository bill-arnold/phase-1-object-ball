// 00-objectball.js

function gameObject() {
    // Define the data for both home and away teams
    const gameData = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  
    return gameData;
  }
  
  // Call gameObject and log its output
  console.log(gameObject());

  
  // 01-objectball-functions.js

// Function to get the team name of a player
function teamName(playerName) {
    const gameData = gameObject();
  
    for (const team in gameData) {
      if (gameData[team].players.hasOwnProperty(playerName)) {
        return gameData[team].teamName;
      }
    }
  
    return "Player not found";
  }
  
  // Function to get the number of points scored by a player
  function numPointsScored(playerName) {
    const gameData = gameObject();
  
    for (const team in gameData) {
      if (gameData[team].players.hasOwnProperty(playerName)) {
        return gameData[team].players[playerName].points;
      }
    }
  
    return "Player not found";
  }
  
  // Function to get the shoe size of a player
  function shoeSize(playerName) {
    const gameData = gameObject();
  
    for (const team in gameData) {
      if (gameData[team].players.hasOwnProperty(playerName)) {
        return gameData[team].players[playerName].shoe;
      }
    }
  
    return "Player not found";
  }
  
  // Function to get the team colors of a team
  function teamColors(teamName) {
    const gameData = gameObject();
  
    for (const team in gameData) {
      if (gameData[team].teamName === teamName) {
        return gameData[team].colors;
      }
    }
  
    return "Team not found";
  }
  
  // Function to get an array of team names
  function teamNames() {
    const gameData = gameObject();
    return Object.values(gameData).map(team => team.teamName);
  }
  
  // Function to get an array of player numbers for a team
  function playerNumbers(teamName) {
    const gameData = gameObject();
  
    for (const team in gameData) {
      if (gameData[team].teamName === teamName) {
        return Object.values(gameData[team].players).map(player => player.number);
      }
    }
  
    return "Team not found";
  }
  
  // Function to get player stats for a player
  function playerStats(playerName) {
    const gameData = gameObject();
  
    for (const team in gameData) {
      if (gameData[team].players.hasOwnProperty(playerName)) {
        return gameData[team].players[playerName];
      }
    }
  
    return "Player not found";
  }
  
  // Function to get the number of rebounds for the player with the largest shoe size
  function bigShoeRebounds() {
    const gameData = gameObject();
    let maxShoeSize = 0;
    let playerWithMaxShoe;
  
    for (const team in gameData) {
      for (const player in gameData[team].players) {
        const currentPlayer = gameData[team].players[player];
        if (currentPlayer.shoe > maxShoeSize) {
          maxShoeSize = currentPlayer.shoe;
          playerWithMaxShoe = currentPlayer;
        }
      }
    }
  
    return playerWithMaxShoe.rebounds;
  }
  
  // Test the functions
  console.log(teamName("Alan Anderson")); // Brooklyn Nets
  console.log(numPointsScored("Alan Anderson")); // 22
  console.log(shoeSize("Alan Anderson")); // 16
  console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
  console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
  console.log(playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]
  console.log(playerStats("Alan Anderson")); // { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 }
  console.log(bigShoeRebounds()); // 12
  