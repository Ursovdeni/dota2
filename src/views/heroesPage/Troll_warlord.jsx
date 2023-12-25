const React = require("react");
const Layout = require("../Layout");

function Troll_warlord({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TROLL WARLORD</h1>
        <p>
          Грозный боец Troll Warlord способен сражаться как в ближнем, так и в
          дальнем бою. Он машет своими топорами и крутит ими вокруг себя, нанося
          удары всё быстрее, и увеличивает скорость атаки всех союзников, где бы
          они ни были.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Troll_warlord;
