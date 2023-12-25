const React = require("react");
const Layout = require("../Layout");

function Lina({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LINA</h1>
        <p>
          Опасная и хрупкая Lina легко свалит любого одинокого врага. Она
          поражает противников огнём и молнией, а каждое произнесённое ей
          заклинание увеличивает скорость её атаки, не давая выжить никому.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Lina;
