const React = require("react");
const Layout = require("../Layout");

function Nyx_assassin({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>NYX ASSASSIN</h1>
        <p>
          Nyx Assassin всегда охотится за хилыми противниками. Он незаметно
          крадётся по лесам и, обнаружив жертву, пронзает её острыми когтями и
          поражает оглушающими шипами, отражая любой ответный удар своим
          панцирем.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Nyx_assassin;
