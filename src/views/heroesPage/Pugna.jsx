const React = require("react");
const Layout = require("../Layout");

function Pugna({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PUGNA</h1>
        <p>
          Умелый колдун Pugna обращает силы противника против него же, подрывая
          его оборону и укрепления. Пока его тотем бьёт ближайших врагов,
          осмелившихся использовать магию, сам Pugna вытягивает из них жизнь,
          чтобы быть готовым к следующему наступлению.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Pugna;
