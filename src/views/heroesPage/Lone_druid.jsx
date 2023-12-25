const React = require("react");
const Layout = require("../Layout");

function Lone_druid({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LONE DRUID</h1>
        <p>
          Сражаясь бок о бок со своим могучим медведем, Lone Druid разрывает на
          части врагов и их постройки. С помощью перевоплощения он переключается
          между ближним и дальним боем. Когда он и его компаньон наберут
          достаточно мощи, их невозможно будет остановить.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Lone_druid;
