const React = require("react");
const Layout = require("../Layout");

function Rubick({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>RUBICK</h1>
        <p>
          Rubick неустанно ищет полезные вражеские способности, которые можно
          использовать против их бывших владельцев. Поднимая противников в
          воздух и указывая, где им упасть, Rubick сеет хаос в их рядах.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Rubick;
