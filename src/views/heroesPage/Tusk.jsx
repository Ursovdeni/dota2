const React = require("react");
const Layout = require("../Layout");

function Tusk({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TUSK</h1>
        <p>
          Tusk никогда не против затеять драку. Он отрезает врагам путь к
          отступлению стеной ледяных осколков, собирает союзников в гигантский
          снежный ком и влетает в нём в противников, завершая комбинацию
          фирменным сногсшибательным ударом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Tusk;
