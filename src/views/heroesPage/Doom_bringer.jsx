const React = require("react");
const Layout = require("../Layout");

function Doom_bringer({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DOOM</h1>
        <p>
          Doom забирает жизни своих врагов разными способами. Он пожирает
          существ, чтобы перенять их способности, а также способен наслать на
          врага адское пламя, не дающее тому использовать способности и
          предметы.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Doom_bringer;
