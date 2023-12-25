const React = require("react");
const Layout = require("../Layout");

function Riki({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>RIKI</h1>
        <p>
          Riki крадётся по полю боя, скрываясь от глаз противника. Он тщательно
          выжидает момент и бросается в бой сквозь свою дымовую завесу, нанося
          удар в спину ещё до того, как враги что-то поймут.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Riki;
