const React = require("react");
const Layout = require("../Layout");

function Shadow_demon({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SHADOW DEMON</h1>
        <p>
          Shadow Demon опасен своей способностью наносить урон и разведывать
          поле боя облаками демонического яда. Он ненадолго изгоняет врага в
          иной мир, позволяя товарищам оказать жертве тёплый приём, накладывает
          на противников проклятья и призывает иллюзии, обращая силу соперников
          против них самих.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Shadow_demon;
