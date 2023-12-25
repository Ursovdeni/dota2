const React = require("react");
const Layout = require("../Layout");

function Sven({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SVEN</h1>
        <p>
          Sven всегда рад сражению. Он оглушает столпившихся врагов, а после
          использования ульта, увеличивающего урон героя, противники погибают от
          пары ударов огромного меча.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Sven;
