const React = require("react");
const Layout = require("../Layout");

function Tinker({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TINKER</h1>
        <p>
          Tinker сокрушает врагов своей армией механизмов и другими
          смертоносными устройствами. Набрав мощь, он способен нападать по
          нескольким фронтам благодаря ульту, который перезаряжает все его
          способности.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Tinker;
