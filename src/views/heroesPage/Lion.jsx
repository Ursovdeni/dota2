const React = require("react");
const Layout = require("../Layout");

function Lion({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LION</h1>
        <p>
          Lion не даёт врагам выбраться из своей цепкой хватки. Он оглушает
          жертву каменными шипами и на время превращает её в безобидную
          зверушку. Если одних его заклинаний не хватит, чтобы расправиться с
          врагом, он обязательно даст команде достаточно времени.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Lion;
