const React = require("react");
const Layout = require("../Layout");


function Alchemist({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>Alchemist</h1>
        <p>Alchemist, синтезирующий дополнительные средства за каждое убийство, с лёгкостью получает необходимое вооружение. Он сражается во имя своей жадности, используя едкую кислоту и запас нестабильных химикатов.</p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Alchemist;