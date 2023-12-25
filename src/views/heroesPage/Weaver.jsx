const React = require("react");
const Layout = require("../Layout");

function Weaver({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>WEAVER</h1>
        <p>
          Weaver сбегает от врагов лишь для того, чтобы напасть вновь. Он
          способен на время стать невидимым или вовсе ускользнуть от смерти,
          вернув своё местоположение и состояние здоровья на несколько секунд
          назад. Его изворотливость позволяет доставлять врагам массу
          неприятностей.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Weaver;
