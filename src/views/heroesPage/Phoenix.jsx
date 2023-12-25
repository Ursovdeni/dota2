const React = require("react");
const Layout = require("../Layout");

function Phoenix({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PHOENIX</h1>
        <p>
          Влетев в битву, Phoenix поражает врагов и излечивает союзников
          солнечным лучом, а в нужный момент может превратиться в звезду,
          обжигающую всех противников вокруг, чтобы после её оглушающего взрыва
          возродиться с полным запасом сил.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Phoenix;
