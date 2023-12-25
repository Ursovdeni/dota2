document
  .getElementById("playerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    fetch(`https://api.opendota.com/api/proPlayers`)
      .then((response) => response.json())
      .then((data) => {
        // Получаем массив игроков
        // Получаем массив игроков
        const players = data;

        // Получаем контейнер, в котором будем отображать информацию
        const container = document.getElementById("resultContainer");

        // Создаем массив случайных индексов
        const randomIndices = [];
        while (randomIndices.length < 5) {
          const randomIndex = Math.floor(Math.random() * players.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }

        // Создаем элементы для каждого случайного игрока и заполняем их данными
        randomIndices.forEach((randomIndex) => {
          const player = players[randomIndex];
          const playerElement = document.createElement("div");
          playerElement.innerHTML = `
    <img src="${player.avatar}" alt="Player Avatar">
    <h3>${player.personaname}</h3>
    <p>Country: ${player.loccountrycode}</p>
    <p>Team: ${player.team_name}</p>
    <p>Role: ${player.fantasy_role === 1 ? "Core" : "Support"}</p>
  `;
          container.appendChild(playerElement);
        });
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error);
      });
  });
