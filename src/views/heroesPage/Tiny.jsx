const React = require("react");
const Layout = require("../Layout");

function Tiny({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TINY</h1>
        <p>
          Tiny, становящийся больше и сильнее по ходу битвы, устрашает
          противника. Он швыряет героев и крипов в своих врагов или оглушает их
          камнепадом. Набрав мощь, он с лёгкостью разрушит вражескую базу.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Tiny;
