const React = require("react");
const Layout = require("../Layout");

function Centaur({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>CENTAUR WARRUNNER</h1>
        <p>
          Centaur Warrunner умело наносит и принимает урон. Он ведёт команду в
          наступление, оглушает своим топотом врагов и мгновенно отвечает на
          каждый удар, ускоряя как союзников, так и смерть неприятелей.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Centaur;
