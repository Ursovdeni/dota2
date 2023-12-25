const React = require("react");
const Layout = require("../Layout");

function Slardar({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SLARDAR</h1>
        <p>
          Всегда готовый найти и сокрушить врагов Slardar шустро вползает в
          битву. Раскрыв расположение противника и разрушив его броню, он
          сокращает расстояние до жертвы и держит её на месте сокрушительными
          водными всплесками и оглушающими ударами своего внушительного
          трезубца.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Slardar;
