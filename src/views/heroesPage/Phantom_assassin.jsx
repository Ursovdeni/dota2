const React = require("react");
const Layout = require("../Layout");

function Phantom_assassin({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PHANTOM ASSASSIN</h1>
        <p>
          Phantom Assassin идёт в наступление, едва завидев свою жертву.
          Мгновенно сблизившись с ней, Мортред легко уклоняется от атак и
          обрушивает на врага удар за ударом, любой из которых может оказаться
          роковым.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Phantom_assassin;
