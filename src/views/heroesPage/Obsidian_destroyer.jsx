const React = require("react");
const Layout = require("../Layout");

function Obsidian_destroyer({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>OUTWORLD DESTROYER</h1>
        <p>
          Похищая разум своих жертв, Outworld Destroyer превращает чистый
          интеллект в инструмент разрушения. Ослабив врагов залпом магической
          энергии, он проверяет их разум на прочность и сжигает ману тем, кто
          выжил.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Obsidian_destroyer;
