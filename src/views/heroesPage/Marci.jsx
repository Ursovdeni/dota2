const React = require("react");
const Layout = require("../Layout");

function Marci({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MARCI</h1>
        <p>
          Доказывая, что неиссякаемая верность даёт несравненную силу, Марси
          всегда готова вступить в битву и не жалеет кулаков, чтобы защитить
          своих компаньонов. Легко перебрасывая друзей и врагов по полю боя, она
          с радостью врывается в любой поединок, предоставляет союзникам столь
          нужное преимущество и применяет скрытую силу, при виде которой даже
          боги предпочитают не вступать в конфликт с героиней.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Marci;
