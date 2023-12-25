const React = require("react");
const Layout = require("../Layout");

function Enigma({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>ENIGMA</h1>
        <p>
          Многие опасаются Enigma из-за его способности создать чёрную дыру,
          которая удерживает врагов и делает их лёгкой мишенью. Вместе с
          вездесущими союзными эйдолонами он атакует врагов издалека.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Enigma;
