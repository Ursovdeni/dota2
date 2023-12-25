const React = require("react");
const Layout = require("../Layout");

function Abyssal_underlord({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>UNDERLORD</h1>
        <p>
          Underlord обрушивает волны рокового пламени на врагов, обездвиженных
          своей злобной хваткой. Он ослабляет атаки противников одним своим
          видом, упивается праздником смерти, получая прилив сил с каждым
          недругом, павшим в его присутствии, и разрывает полотно реальности,
          перемещаясь с союзниками по полю брани. Жестокая кара ждёт каждого,
          кто восстанет против Врогроша, Владыки бездны.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Abyssal_underlord;
