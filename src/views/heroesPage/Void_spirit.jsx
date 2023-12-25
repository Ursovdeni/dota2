const React = require("react");
const Layout = require("../Layout");

function Void_spirit({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>VOID SPIRIT</h1>
        <p>
          Дух пустоты хранит секреты, которые могут расколоть сознание
          смертного. Он покидает Сокрытый храм, несёт дозор над всем полем битвы
          и по своей воле может покинуть мир смертных и вернуться в него. В
          мгновения нужды взывая к защите скрытой реальности, он легко обходит
          врагов, чтобы ударить, откуда он сам пожелает.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Void_spirit;
