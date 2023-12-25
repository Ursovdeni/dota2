const React = require("react");
const Layout = require("../Layout");

function Furion({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>NATURE'S PROPHET</h1>
        <p>
          Nature's Prophet будто вездусущ: вот он в гуще боя, а вот уже
          подготавливает ресурсы для следующей атаки. Благодаря способности
          телепортироваться в любое место и мгновенно создать армию
          воинов-энтов, он нападает на противников, когда те этого не ожидают.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Furion;
