const React = require("react");
const Layout = require("../Layout");

function Slark({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SLARK</h1>
        <p>
          Slark способен впрыгнуть в гущу сражения и выйти из него живым. Он
          всегда рад приковать заблудшего врага к месту, украсть его сущность
          ударами своего кинжала, а в случае чего мгновенно испариться.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Slark;
