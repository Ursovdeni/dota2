const React = require("react");
const Layout = require("../Layout");

function Lycan({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LYCAN</h1>
        <p>
          Lycan разрывает врагов острыми когтями и смертоносными клыками в
          обличье человека или волка. Он призывает невидимых волков, которые
          помогают в разведке и нападении. Превратившись в волка, он становится
          сильнее и быстрее и с лёгкостью догоняет врагов или спасается из
          засады.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Lycan;
