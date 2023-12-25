const React = require("react");
const Layout = require("../Layout");

function Broodmother({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BROODMOTHER</h1>
        <p>
          Скользя по своей паутине, Broodmother взращивает армию пауков, которые
          вместе с её командой наступают на базу врага. Если на пути встречается
          жертва, паучиха присоединяется к своим отпрыскам и нападает, замедляя
          врагов ядовитыми укусами и утоляя свой животный голод.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Broodmother;
