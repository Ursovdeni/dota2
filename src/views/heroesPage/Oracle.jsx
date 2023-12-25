const React = require("react");
const Layout = require("../Layout");

function Oracle({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>ORACLE</h1>
        <p>
          Аккуратно сочетая свои замысловатые умения, Oracle предрекает удел
          своих друзей и врагов. Окутав союзника неясным будущим, он даёт ему
          пожить ещё немного, чтобы уничтожить противника или даже избежать
          страшной участи.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Oracle;
