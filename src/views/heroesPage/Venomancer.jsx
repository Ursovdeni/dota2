const React = require("react");
const Layout = require("../Layout");

function Venomancer({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>VENOMANCER</h1>
        <p>
          Venomancer несёт своим врагам медленную смерть. Он взращивает
          бесконечную армию прыскающих ядом защитников, а стоит неприятелям
          показаться рядом, он выпускает огромное облако яда, надолго
          ослабляющего недругов.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Venomancer;
