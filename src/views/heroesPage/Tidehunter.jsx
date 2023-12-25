const React = require("react");
const Layout = require("../Layout");

function Tidehunter({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TIDEHUNTER</h1>
        <p>
          Tidehunter выжидает подходящего момента для нападения вместе с
          командой. Когда такой момент наступает, он использует свой
          всесокрушающий ульт, позволяя союзникам расправиться с оглушёнными
          врагами.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Tidehunter;
