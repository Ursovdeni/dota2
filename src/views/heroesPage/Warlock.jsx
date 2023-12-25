const React = require("react");
const Layout = require("../Layout");

function Warlock({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>WARLOCK</h1>
        <p>
          Призвав на помощь демона-голема, Warlock уничтожает врагов и их
          постройки. Но чернокнижник способен сеять хаос и без посторонней
          помощи: одним лишь словом он излечивает союзников и калечит
          противников — или связывает врагов в общей агонии.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Warlock;
