const React = require("react");
const Layout = require("../Layout");

function Bloodseeker({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BLOODSEEKER</h1>
        <p>
          Bloodseeker постоянно ставит противников перед непростым выбором.
          Окропив кровью обширную территорию, он вынуждает врагов отступать, а
          под его чудовищным ультом жертва либо стоит на месте, либо погибает.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Bloodseeker;
