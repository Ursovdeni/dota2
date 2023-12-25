const React = require("react");
const Layout = require("../Layout");

function Undying({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>UNDYING</h1>
        <p>
          Волочась к битве, Undying даёт врагам выбор: они либо бегут от его
          ярости, либо погибают от неё же. Он забирает себе жизненные силы
          противников и призывает толпы цепких мертвецов. К моменту, когда он
          наконец превратится в массивного трупного голема, врагов может уже не
          стать.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Undying;
