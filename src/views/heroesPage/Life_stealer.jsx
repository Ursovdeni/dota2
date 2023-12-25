const React = require("react");
const Layout = require("../Layout");

function Life_stealer({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LIFESTEALER</h1>
        <p>
          Если Lifestealer смог подобраться близко к своей жертве, то её уже
          ничего не спасёт. Он может забраться внутрь крипа или союзника, чтобы,
          оказавшись возле врага, неожиданно вырваться из носителя и разорвать
          жертву своими когтями.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Life_stealer;
