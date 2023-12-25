const React = require("react");
const Layout = require("../Layout");

function Bane({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BANE</h1>
        <p>
          Bane наводит ужас на врагов своим арсеналом обездвиживающих
          способностей. Погружая противников в заразительные кошмары или
          удерживая их на месте, он даёт союзникам достаточно времени, чтобы
          прикончить неприятеля.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Bane;
