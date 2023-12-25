const React = require("react");
const Layout = require("../Layout");

function Jakiro({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>JAKIRO</h1>
        <p>
          Jakiro сам себе друг. Не довольствуясь одним только огнём, близнецы
          примораживают к земле пытающихся спастись противников, а пока те
          горят, Jakiro разрушает вражеские постройки своим жидким пламенем.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Jakiro;
