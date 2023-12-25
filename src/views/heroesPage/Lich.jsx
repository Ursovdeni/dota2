const React = require("react");
const Layout = require("../Layout");

function Lich({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LICH</h1>
        <p>
          Паря над полем битвы, Lich подпитывает свои силы союзными крипами и
          помогает союзникам своим замедляющим холодом. Если противники по
          глупости сбились в кучу, то он расправится сразу со всеми своим
          отскакивающим ультом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Lich;
