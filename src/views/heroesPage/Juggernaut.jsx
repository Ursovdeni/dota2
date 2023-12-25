const React = require("react");
const Layout = require("../Layout");

function Juggernaut({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>JUGGERNAUT</h1>
        <p>
          Juggernaut разрубает своих врагов шквалом рассекающих ударов. Мало кто
          сможет остановить или пережить его отчаянное наступление, ведь, набрав
          обороты, он становится практически неуязвимым.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Juggernaut;
