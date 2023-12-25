const React = require("react");
const Layout = require("../Layout");

function Terrorblade({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TERRORBLADE</h1>
        <p>
          Если в игре Terrorblade, то всё становится относительным. Своими
          могучими иллюзиями он обманывает врагов и разрушает их постройки, а
          если нужно предотвратить смерть или ослабить соперника, он меняется
          здоровьем с союзником или противником.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Terrorblade;
