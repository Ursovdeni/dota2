const React = require("react");
const Layout = require("../Layout");

function Skeleton_king({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>WRAITH KING</h1>
        <p>
          Wraith King бесстрашно рвётся в бой, оглушая и разрубая врагов, пока
          те не покорятся его воле. Если противники справятся с ним один раз,
          возрождающий ульт даст Остариону ещё один шанс сразить своих
          неприятелей.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Skeleton_king;
