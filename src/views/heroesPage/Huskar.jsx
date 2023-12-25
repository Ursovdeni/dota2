const React = require("react");
const Layout = require("../Layout");

function Huskar({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>HUSKAR</h1>
        <p>
          Чем меньше у Huskar здоровья, тем опаснее он становится. Своим ультом
          он мгновенно лишает себя и противника части здоровья, а на грани
          смерти может обрушить на своих врагов шквал горящих копий.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Huskar;
