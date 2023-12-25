const React = require("react");
const Layout = require("../Layout");

function Mars({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MARS</h1>
        <p>
          Mars рождён для сражений: он пронзает врагов своим легендарным копьём,
          а от нападений его защищает смертоносный щит. Окружив противника
          солдатами своего верного легиона, покровитель воинов не позволяет ему
          сбежать, и даже самая безнадёжная схватка окажется во власти бога
          войны — ведь численное преимущество всегда на его стороне.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Mars;
