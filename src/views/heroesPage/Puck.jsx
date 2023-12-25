const React = require("react");
const Layout = require("../Layout");

function Puck({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PUCK</h1>
        <p>
          Игривый и увёртливый Puck мастерски запутывает противников. Он может
          переместиться на небольшое расстояние с помощью своей смертоносной
          сферы и обезмолвить врагов магической пылью, а когда противник
          опомнится, будет слишком поздно: Puck уже исчезнет за горизонтом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Puck;
