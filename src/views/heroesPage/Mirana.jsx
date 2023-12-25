const React = require("react");
const Layout = require("../Layout");

function Mirana({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MIRANA</h1>
        <p>
          Всегда готовая влететь в битву Mirana издалека подыскивает жертву для
          своей смертоносной стрелы. Она способна скрыть команду от глаз врагов
          и возглавить охоту на них.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Mirana;
