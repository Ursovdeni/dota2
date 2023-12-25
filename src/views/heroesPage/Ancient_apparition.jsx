const React = require("react");
const Layout = require("../Layout");


function Ancient_apparition({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>Ancient_apparition</h1>
        <p>Ancient Apparition, способный запустить мощный заряд льда через всё поле битвы, может заморозить раненых врагов до смерти, где бы те ни находились. Он держит врагов в напряжении, замедляя их и помогая своим союзникам.</p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Ancient_apparition;