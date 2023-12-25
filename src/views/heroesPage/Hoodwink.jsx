const React = require("react");
const Layout = require("../Layout");

function Hoodwink({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>HOODWINK</h1>
        <p>
          Hoodwink всегда спешит туда, где ждёт беда, и готова противостоять
          любой угрозе из призрачного леса, ставшего ей домом. Даже с тяжёлым
          арбалетом она мимолётно прошмыгивает меж веток и листьев, и выследить
          её в бою почти невозможно. На мгновение потеряете её из виду, и она
          уже у вас за спиной — а ваша остолбенелая туша висит в её сетях.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Hoodwink;
