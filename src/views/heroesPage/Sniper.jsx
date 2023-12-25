const React = require("react");
const Layout = require("../Layout");

function Sniper({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SNIPER</h1>
        <p>
          Сеять смерть на расстоянии — вот что Sniper умеет лучше всего. Он
          сдерживает своих врагов нескончаемым градом пуль, а в подходящий
          момент добивает их смертельным выстрелом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Sniper;
