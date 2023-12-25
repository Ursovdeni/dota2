const React = require("react");
const Layout = require("../Layout");

function Death_prophet({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DEATH PROPHET</h1>
        <p>
          Своей армией призраков Death Prophet уничтожает как противников, так и
          их постройки. Возглавив наступление и выпуская одну смертоносную волну
          за другой, она может повергнуть врагов в отчаяние.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/death_prophet.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/death_prophet.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/Death_prophet.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/death_prophet.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/death_prophet.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Death_prophet;
