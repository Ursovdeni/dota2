const React = require("react");
const Layout = require("../Layout");

function Morphling({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MORPHLING</h1>
        <p>
          Благодаря способности вливаться в любую ситуацию Morphling увёртлив и
          смертоносен. Если его пытаются загнать в угол, он уходит от врага на
          своей волне или увеличивает здоровье и перемещается к созданному им
          ложному двойнику героя.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Morphling;
