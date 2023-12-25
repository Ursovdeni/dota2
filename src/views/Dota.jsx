const React = require("react");
const Layout = require("./Layout");

function Dota({ user, heroes }) {
  // Сортируем массив героев по полю 5_win в порядке убывания
  const sortedHeroes = heroes.sort((a, b) => {
    const winPercentageA = (a["5_win"] / a["5_pick"]) * 100;
    const winPercentageB = (b["5_win"] / b["5_pick"]) * 100;
    return winPercentageB - winPercentageA;
  });

  // Получаем только первые 10 героев
  const topHeroes = sortedHeroes.slice(0, 25);

  return (
    <Layout user={user}>
      <div>
        <h1>Герои Dota 2</h1>
        <ul className="heroes-list">
          {topHeroes.map((hero) => (
            <li key={hero.id} className="hero-item">
              <div className="hero-details">
                <span className="hero-name">{hero.localized_name}</span>
                <span className="hero-stats">
                  Picks: {hero["5_pick"]}, Wins: {hero["5_win"]}, Percent wins:{" "}
                  {(hero["5_win"] / hero["5_pick"]) * 100}%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Dota;