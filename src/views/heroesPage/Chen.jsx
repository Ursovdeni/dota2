const React = require("react");
const Layout = require("../Layout");

function Chen({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>CHEN</h1>
        <p>
          Обратив лесных существ в свою веру, Chen ведёт свою импровизированную
          армию на помощь команде. Он насылает свою паству на противников,
          отправляет союзников в безопасное место, а в крайнем случае излечивает
          их, где бы они ни были.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Chen;
