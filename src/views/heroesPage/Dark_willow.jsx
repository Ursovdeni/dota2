const React = require("react");
const Layout = require("../Layout");

function Dark_willow({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DARK WILLOW</h1>
        <p>
          Неуловимый трепет в тенях — вот всё, что увидит враг Мирески, ведь эта
          фея избегает врагов и сковывает их движения коварными уловками. Взывая
          к силам куда более древним, чем знания учёных магов, она держит
          противников на месте, а затем обрушивает на них весь гнев и ужас мира
          фей.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Dark_willow;
