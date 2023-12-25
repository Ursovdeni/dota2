const React = require("react");
const Layout = require("../Layout");

function Beastmaster({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BEASTMASTER</h1>
        <p>
          Beastmaster никогда не вступает в бой неподготовленным. Он призывает
          на помощь изрыгающих яд кабанов и зорких ястребов, он прорубается
          топорами через лес, а его оглушительный рёв позволяет беспрепятственно
          напасть на врагов.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Beastmaster;
