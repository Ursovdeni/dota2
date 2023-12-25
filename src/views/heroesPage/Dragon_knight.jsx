const React = require("react");
const Layout = require("../Layout");

function Dragon_knight({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DRAGON KNIGHT</h1>
        <p>
          Страх сковывает любого, кто видит Dragon Knight в его
          ужасающем драконьем облике. Выносливый и готовый к чему угодно, он
          ведёт своих союзников к победе, оглушая и сжигая всех врагов на пути.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Dragon_knight;
