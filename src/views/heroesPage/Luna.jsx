const React = require("react");
const Layout = require("../Layout");

function Luna({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LUNA</h1>
        <p>
          Luna быстро врывается в битву, кромсая противника своими
          отскакивающими атаками. Если враги идут в наступление, она призывает
          на помощь силу Луны и сокрушает их жгучим лучом или лунным градом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Luna;
