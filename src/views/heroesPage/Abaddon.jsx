const React = require("react");
const Layout = require("../Layout");


function Abaddon({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>Abaddon</h1>
        <p>Abaddon, способный лечиться за счёт вражеских атак, может пережить почти любое нападение. Он всегда готов вклиниться в битву, закрывая союзников щитом и запуская обоюдоострые витки мглы, которыми он увечит врагов и исцеляет товарищей.</p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Abaddon;
