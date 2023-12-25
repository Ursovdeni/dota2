const React = require("react");
const Layout = require("../Layout");

function Vengefulspirit({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>VENGEFUL SPIRIT</h1>
        <p>
          Vengeful Spirit напоминает о себе даже после смерти. Она постоянно
          сеет хаос в рядах врагов, обмениваясь местами с другими героями
          неподалёку, оглушая врагов и ослабляя того, кто её одолеет.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Vengefulspirit;
