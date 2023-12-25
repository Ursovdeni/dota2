const React = require("react");
const Layout = require("../Layout");

function Rattletrap({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>CLOCKWERK</h1>
        <p>
          Притягиваясь ко врагам своим захватным крюком, Clockwerk изолирует
          жертву и разрывает её на части дезориентирующей шрапнелью. Разведывая
          поле битвы своими ракетами, он всегда находит цель, на которую можно
          налететь.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Rattletrap;
