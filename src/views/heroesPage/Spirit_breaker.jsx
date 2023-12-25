const React = require("react");
const Layout = require("../Layout");

function Spirit_breaker({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SPIRIT BREAKER</h1>
        <p>
          Мобильный и агрессивный Spirit Breaker носится по полю боя, навязывая
          противнику схватку. Каждый оглушающий удар его палицы выводит врага из
          строя. Жертва попытается убежать, но достаточно пары вардов, и
          прятаться будет негде.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Spirit_breaker;
