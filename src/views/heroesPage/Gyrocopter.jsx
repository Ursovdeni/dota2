const React = require("react");
const Layout = require("../Layout");

function Gyrocopter({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>GYROCOPTER</h1>
        <p>
          Gyrocopter летает по полю боя,
          держа свой арсенал наготове. Расстреливая всех ближайших врагов из
          пушки и сокрушая их залпами ракет, он с лёгкостью расправляется с
          противниками, если наберёт достаточную мощь.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Gyrocopter;
