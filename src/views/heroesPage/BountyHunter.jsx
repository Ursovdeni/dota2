const React = require("react");
const Layout = require("../Layout");

function BountyHunter({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BOUNTY HUNTER</h1>
        <p>
          Bounty Hunter незримо крадётся по следам своих врагов и не даёт им
          скрыться из виду. Когда его жертва падает замертво, он и его союзники
          получают хорошую прибыль.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = BountyHunter;
