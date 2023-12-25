const React = require("react");
const Layout = require("../Layout");

function Queenofpain({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>QUEEN OF PAIN</h1>
        <p>
          Queen of Pain нападает без предупреждения, уничтожая собравшихся
          вместе противников своим оглушающим криком. Если враг смог сдержать её
          натиск, она не позволяет ему отступить, замедляя броском кинжала.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Queenofpain;
