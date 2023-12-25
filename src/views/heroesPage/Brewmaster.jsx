const React = require("react");
const Layout = require("../Layout");

function Brewmaster({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BREWMASTER</h1>
        <p>
          Грозный воитель Brewmaster способен изменить ход сражения, обернувшись
          тремя духами стихий с уникальными способностями, а в своей изначальной
          форме он погружает врагов в хмельной хаос замедляющими хлопками и
          могучими взмахами посоха.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Brewmaster;
