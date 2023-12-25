const React = require("react");
const Layout = require("../Layout");

function Axe({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>AXE</h1>
        <p>
          Axe рубит одного врага за другим, неизменно ступая впереди своей
          команды. Он вынуждает противников вступить в бой, а затем отвечает на
          их удары смертоносными взмахами топора. Нещадно круша ослабленных
          врагов, он всегда несётся вперёд.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Axe;
