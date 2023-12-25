const React = require("react");
const Layout = require("../Layout");

function Pudge({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PUDGE</h1>
        <p>
          Каждый точный бросок знаменитого крюка вселяет страх во врагов Pudge,
          ведь, притянув жертву, он расчленяет её своим тесаком. С каждым
          убийством его здоровье и урон увеличиваются, и вскоре погибель от его
          рук становится неизбежной.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Pudge;
