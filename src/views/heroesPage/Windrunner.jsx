const React = require("react");
const Layout = require("../Layout");

function Windrunner({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>WINDRANGER</h1>
        <p>
          Проворная и ловкая Windranger всегда поджидает подходящего момента для
          нападения. Она постоянно в движении — даже когда расчищает путь
          смертоносным выстрелом или связывает врагов, чтобы нашпиговать их
          стрелами.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Windrunner;
