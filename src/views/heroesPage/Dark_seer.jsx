const React = require("react");
const Layout = require("../Layout");

function Dark_seer({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DARK SEER</h1>
        <p>
          Изворотливый стратег Dark Seer мастерски манипулирует местоположением
          своих врагов. Он способен затянуть их под удары союзников и обратить
          мощь неприятелей против них самих своей отражающей стеной.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Dark_seer;
