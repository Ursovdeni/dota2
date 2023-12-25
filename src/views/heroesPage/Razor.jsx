const React = require("react");
const Layout = require("../Layout");

function Razor({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>RAZOR</h1>
        <p>
          Razor, властитель смертоносной бури, всегда готов к сражению. Он
          поджаривает врагов расширяющимся кольцом энергетической плазмы, а
          также лишает их мощи, наращивая свою собственную.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Razor;
