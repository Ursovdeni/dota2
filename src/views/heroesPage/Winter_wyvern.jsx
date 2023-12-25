const React = require("react");
const Layout = require("../Layout");

function Winter_wyvern({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>WINTER WYVERN</h1>
        <p>
          Winter Wyvern бороздит небо над полем боя, замедляя врагов жгучим
          льдом. Если враги по глупости столпятся, она обернёт их против одного
          из товарищей и обдаст всех ледяными осколками.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Winter_wyvern;
