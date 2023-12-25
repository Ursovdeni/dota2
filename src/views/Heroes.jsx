const React = require("react");
const Layout = require("./Layout");

function Heroes({ heroess, user }) {
  return (
    <Layout user={user}>
      <div className="heroesContainer">
        <div className="heroesGrid">
          {heroess.map((hero) => (
            <div key={hero.id} className="button butheroes">
              <a href={`/heroes/${hero.id}`}>
                <img src={hero.img} alt={hero.name} className="imgContainer" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Heroes;
