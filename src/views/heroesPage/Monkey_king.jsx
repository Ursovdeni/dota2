const React = require("react");
const Layout = require("../Layout");

function Monkey_king({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MONKEY KING</h1>
        <p>
          В поисках славной битвы Monkey King скачет по кронам деревьев и
          застаёт врагов врасплох, стремительно нападая с высоты. Готовый
          переломить ход сражения верной армией солдат-обезьян, этот неуловимый
          трюкач торжествует в хаосе битвы и останавливает своим легендарным
          посохом любого беглеца.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Monkey_king;
