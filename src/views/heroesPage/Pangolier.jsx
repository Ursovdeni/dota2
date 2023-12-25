const React = require("react");
const Layout = require("../Layout");

function Pangolier({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PANGOLIER</h1>
        <p>
          Pangolier жаждет немедля встать на пути у любой опасности, мастерски
          сдерживая врагов и стремясь в самую гущу сражения. Его клинок
          виртуозно находит щели в любой броне, а сам Донтé надёжно защищён
          чешуёй, и потому этот грациозный фехтовальщик всегда готов вкатиться в
          битву.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Pangolier;
