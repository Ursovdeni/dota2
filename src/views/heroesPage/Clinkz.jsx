const React = require("react");
const Layout = require("../Layout");

function Clinkz({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>CLINKZ</h1>
        <p>
          Clinkz незримо рыщет по полю битвы, и от внезапного нападения не
          спастись никому. Этот изворотливый лучник накрывает врагов дождём
          огненных стрел, а затем призывает в бой армию пылающих собратьев.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Clinkz;
