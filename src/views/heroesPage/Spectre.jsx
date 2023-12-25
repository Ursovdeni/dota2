const React = require("react");
const Layout = require("../Layout");

function Spectre({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SPECTRE</h1>
        <p>
          Spectre преследует своих врагов, где бы они ни были. Открыв себе всё
          поле боя и выбрав одинокую жертву, она с лёгкостью расправляется с
          ней. Если она наберёт силу, то никому не удастся спастись от ужасной
          участи.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Spectre;
