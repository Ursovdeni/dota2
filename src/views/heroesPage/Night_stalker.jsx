const React = require("react");
const Layout = require("../Layout");

function Night_stalker({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>NIGHT STALKER</h1>
        <p>
          Когда солнце скрывается за горизонтом, на охоту выходит Night Stalker.
          Проносясь сквозь тёмные чащи, он замедляет жертву и раздирает её в
          клочья. А если восход угрожает его планам, он может затмить светило и
          продолжить нападение.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Night_stalker;
