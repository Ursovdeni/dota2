const React = require("react");
const Layout = require("../Layout");

function Medusa({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MEDUSA</h1>
        <p>
          Medusa всегда возглавляет наступление. Она сдерживает любое нападение
          противника магическим щитом и расправляется с группами врагов,
          выпуская сразу несколько стрел. Набрав полную силу, она заставит
          окаменеть кого угодно.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Medusa;
