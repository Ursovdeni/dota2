const React = require("react");
const Layout = require("../Layout");

function Treant({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TREANT PROTECTOR</h1>
        <p>
          Великодушный Treant Protector защищает своих соратников и союзные
          постройки восстанавливающей бронёй. Незаметно перемещаясь меж
          деревьев, он связывает врагов корнями и передаёт их жизненные силы
          товарищам.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Treant;
