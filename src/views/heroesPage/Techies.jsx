const React = require("react");
const Layout = require("../Layout");

function Techies({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TECHIES</h1>
        <p>
          Озорные Techies любят как следует подгадить врагу. С хихиканьем они
          швыряются бомбами-липучками, а невидимые мины, электрические разряды и
          беспечные полёты на взрывчатке сведут любого противника в могилу. Или
          с ума. Одно другому не мешает.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Techies;
