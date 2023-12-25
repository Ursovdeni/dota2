const React = require("react");
const Layout = require("../Layout");

function Wisp({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>IO</h1>
        <p>
          Io мастерски повышает эффективность союзников. Связав себя с
          кем-нибудь из них, он ускоряет свою цель, а враги между ним и его
          товарищем замедляются. Способность телепортироваться вместе с
          союзником может многократно увеличить потенциал и без того
          смертоносного героя
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Wisp;
