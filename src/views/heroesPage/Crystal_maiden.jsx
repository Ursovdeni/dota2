const React = require("react");
const Layout = require("../Layout");

function Crystal_maiden({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>CRYSTAL MAIDEN</h1>
        <p>
          Crystal Maiden пригодится любой команде, ведь она даёт союзникам ману
          и не позволяет врагам сбежать. А когда представляется случай, она
          может уничтожить врагов своим сокрушительным ультом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Crystal_maiden;
