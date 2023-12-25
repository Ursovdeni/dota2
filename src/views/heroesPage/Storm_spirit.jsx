const React = require("react");
const Layout = require("../Layout");

function Storm_spirit({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>STORM SPIRIT</h1>
        <p>
          Storm Spirit не пропускает ни одного сражения. Он молнией проносится
          по карте, со всех сторон бьёт врагов своими взрывными копиями и
          заряженными атаками и исчезает с поля битвы, прежде чем шокированные
          противники успеют среагировать.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Storm_spirit;
