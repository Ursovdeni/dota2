const React = require("react");
const Layout = require("../Layout");

function Leshrac({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>LESHRAC</h1>
        <p>
          Своими мощными заклинаниями Leshrac одинаково хорошо справляется и с
          врагами, и с их постройками. Расчищая путь своими разрушительными
          способностями, он продвигается вглубь вражеской территории,
          раскалывает землю под ногами противников, оглушает их и оставляет на
          растерзание союзникам.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Leshrac;
