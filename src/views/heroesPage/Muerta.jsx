const React = require("react");
const Layout = require("../Layout");

function Muerta({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MUERTA</h1>
        <p>
          Повелительница смерти Муэрта ступает по миру живых, устрашая своих
          жертв виртуозными выстрелами и насылая духов на врагов. Муэрта всегда
          готова присмирить беспечных противников огнём из запасного пистолета и
          обрушить на них бесплотную ярость проклятых, зайдя за вуаль духов.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Muerta;
