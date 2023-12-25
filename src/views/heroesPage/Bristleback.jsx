const React = require("react");
const Layout = require("../Layout");

function Bristleback({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BRISTLEBACK</h1>
        <p>
          В сражении Bristleback совсем не против подставить врагам спину.
          Уменьшая весь урон, который ему наносят сзади и сбоку, он безрассудно
          бросается в бой и обдаёт врагов смертоносными иглами и замедляющими
          соплями.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Bristleback;
