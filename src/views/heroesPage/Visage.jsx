const React = require("react");
const Layout = require("../Layout");

function Visage({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>VISAGE</h1>
        <p>
          Разведывая смертоносными гаргульями поле боя, Visage покрывает себя
          бронёй и ищет битвы. Оказавшись рядом со схваткой, он обращает
          страдания тех, кто получает урон, в мощные заряды энергии и сокрушает
          ими врагов.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Visage;
