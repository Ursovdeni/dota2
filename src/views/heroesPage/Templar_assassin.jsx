const React = require("react");
const Layout = require("../Layout");

function Templar_assassin({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TEMPLAR ASSASSIN</h1>
        <p>
          Templar Assassin заполняет поле боя замедляющими ловушками и прячется
          в невидимости, готовясь в любой момент наброситься на жертву. Напав,
          она пробивает врагов насквозь своими псионическими клинками и отражает
          ответные удары преломляющим щитом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Templar_assassin;
