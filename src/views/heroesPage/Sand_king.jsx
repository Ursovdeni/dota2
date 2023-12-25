const React = require("react");
const Layout = require("../Layout");

function Sand_king({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SAND KING</h1>
        <p>
          Немногие способны пережить нападение Sand King. Он разрушает
          смертоносными волнами ульта всё вокруг себя, скрывается от ответных
          ударов в песчаной буре и оглушает врагов, поддевая их снизу.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Sand_king;
