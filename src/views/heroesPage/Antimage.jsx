const React = require("react");
const Layout = require("../Layout");


function AntiMage({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>Anti-Mage</h1>
        <p>Если Anti-Mage наберёт полную силу, мало кто сможет его остановить. Он способен забирать у врагов ману каждым ударом или телепортироваться на небольшие расстояния, что не позволяет врагам загнать его в угол.</p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = AntiMage;