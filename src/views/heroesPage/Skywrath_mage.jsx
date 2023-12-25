const React = require("react");
const Layout = require("../Layout");

function Skywrath_mage({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SKYWRATH MAGE</h1>
        <p>
          Смертоносный, но хрупкий Skywrath Mage быстро уничтожает врагов
          залпами мощной магии. Он сотрёт в порошок кого угодно благодаря своей
          способности обезмолвить противника, сделав его уязвимым к заклинаниям.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Skywrath_mage;
