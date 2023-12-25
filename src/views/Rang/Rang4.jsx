const React = require("react");
const Layout = require("../Layout");

function Rang4({ user, heroes }) {
  const sortedHeroes = heroes.sort((a, b) => {
    const winPercentageA = (a["4_win"] / a["4_pick"]) * 100;
    const winPercentageB = (b["4_win"] / b["4_pick"]) * 100;
    return winPercentageB - winPercentageA;
  });

  const topHeroes = sortedHeroes.slice(0, 25);

  return (
    <Layout user={user}>
      <div className="rangContainer">
        <h1>Ранг Герой</h1>
        <table className="heroes-table">
          <thead>
            <tr>
              <th>Герой</th>
              <th>Выбрали (количество раз)</th>
              <th>Выиграно игр</th>
              <th>Процент побед</th>
            </tr>
          </thead>
          <tbody>
            {topHeroes.map((hero) => (
              <tr key={hero.id} className="hero-row">
                <td className="hero-name">
                  <strong>{hero.localized_name}</strong>
                </td>
                <td className="hero-stats">{hero["4_pick"]}</td>
                <td className="hero-stats">{hero["4_win"]}</td>
                <td className="hero-stats">
                  {((hero["4_win"] / hero["4_pick"]) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

module.exports = Rang4;