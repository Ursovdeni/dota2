const React = require("react");
const Layout = require("../Layout");

function Dazzle({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DAZZLE</h1>
        <p>
          Рождённый поддерживать своих сторонников, Dazzle не даёт соратникам
          умереть, пока те уничтожают врагов. Его необычные заклинания
          вплетаются в броню, ослабляя противников и усиливая союзников.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Dazzle;
