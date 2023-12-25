const React = require("react");
const Layout = require("../Layout");

function Shadow_shaman({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SHADOW SHAMAN</h1>
        <p>
          Shadow Shaman быстро расчищает своей команде путь до вражеского
          Древнего. Он способен поразить противников ударом энергии, превратить
          нападающего в беспомощное животное и призвать могучие змеиные тотемы,
          которые с лёгкостью разрушат вражеские постройки.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Shadow_shaman;
