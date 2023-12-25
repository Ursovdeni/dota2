const React = require("react");
const Layout = require("../Layout");

function Legion_commander({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LEGION COMMANDER</h1>
        <p>
          Маршируя по полю боя, Legion Commander вызывает заблудших противников
          на дуэль. С каждой выигранной дуэлью она бьёт всё сильнее и к концу
          сражения становится непобедимой воительницей.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Legion_commander;
