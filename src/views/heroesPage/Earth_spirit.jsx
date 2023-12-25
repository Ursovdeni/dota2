const React = require("react");
const Layout = require("../Layout");

function Earth_spirit({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>EARTH SPIRIT</h1>
        <p>
          Earth Spirit держит противников в смятении и поддерживает друзей в
          бою. Приспосабливаясь к ходу любой битвы, он наносит врагам урон
          своими каменными копиями и спасает товарищей, вырывая их из объятий
          смерти.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Earth_spirit;
