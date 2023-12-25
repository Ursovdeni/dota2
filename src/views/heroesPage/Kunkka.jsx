const React = require("react");
const Layout = require("../Layout");

function Kunkka({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>KUNKKA</h1>
        <p>
          Kunkka всегда на шаг впереди своих врагов. Если ему удаётся попасть по
          противнику водяным гейзером или призрачным кораблём, то его команда
          без труда справится с тем, что осталось от неприятеля.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Kunkka;
