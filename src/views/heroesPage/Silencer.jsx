const React = require("react");
const Layout = require("../Layout");

function Silencer({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SILENCER</h1>
        <p>
          Silencer изменяет ход каждого сражения, запрещая врагам использовать
          заклинания. Он кромсает противников глефами и крадёт у них интеллект,
          не давая соперникам получить преимущество.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Silencer;
