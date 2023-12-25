const React = require("react");
const Layout = require("../Layout");

function Grimstroke({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>GRIMSTROKE</h1>
        <p>
          Мастерски манипулируя битвой со стороны, Grimstroke изучает каждого
          неприятеля до самых мелочей, чтобы появиться из чернильной тьмы и
          мановением кисти оглушить врагов и связать их вместе. Он с
          наслаждением досаждает противникам, натравливая на них своих фантомных
          рабов, и аккуратно выбирает момент, когда сможет отправить нескольких
          врагов на тот свет судьбоносным взмахом кисти.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Grimstroke;
