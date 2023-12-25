const React = require("react");
const Layout = require("../Layout");

function Omniknight({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>OMNIKNIGHT</h1>
        <p>
          Omniknight всегда готов помочь своей команде на передовой. Он
          излечивает союзников заклинанием, наносящим урон всем врагам вокруг, а
          в случае чего берётся за свой могучий молот и оберегает соратников от
          вреда.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Omniknight;
