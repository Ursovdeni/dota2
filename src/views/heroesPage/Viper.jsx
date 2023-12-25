const React = require("react");
const Layout = require("../Layout");

function Viper({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>VIPER</h1>
        <p>
          Ядовитый Viper несёт погибель любой своей жертве. Токсины, которыми он
          плюётся, ослабляют и замедляют врага, а Viper просто делает то, что
          умеет лучше всего: продолжает источать яд.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Viper;
