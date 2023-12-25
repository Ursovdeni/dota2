const React = require("react");
const Layout = require("../Layout");

function Snapfire({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SNAPFIRE</h1>
        <p>
          Snapfire будет рада как отстрелить кому-нибудь ноги из своего верного
          дробовика, так и накормить всех до отвала своим вкусным, но немного
          взрывным печеньем. Беатрикс с удовольствием рассекает по полю битвы на
          своей драконьей жабе Мортимере, готовая выкосить врагов своей
          самодельной крупнокалиберной пушкой и добить их залпом лавовых шаров
          Мортимера.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Snapfire;
