const React = require("react");
const Layout = require("../Layout");

function Zuus({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>ZEUS</h1>
        <p>
          Никому не спастись от ярости Zeus. Он использует молнию, чтобы
          разведывать ближайшие территории, пускает заряд электричества,
          скачущий по нескольким врагам, или призывает вселяющий ужас шквал
          молний на всех противников сразу. Zeus найдет врагов, где бы те ни
          были.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Zuus;
