const React = require("react");
const Layout = require("../Layout");

function Ember_spirit({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>EMBER SPIRIT</h1>
        <p>
          Ловкий и неуловимый Ember Spirit стремительно атакует всех врагов
          вокруг и связывает их горящими цепями. Он быстро перемещается по полю
          битвы с помощью своих взрывающихся копий, и немногие смогут избежать
          пламени или обуздать его.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Ember_spirit;
