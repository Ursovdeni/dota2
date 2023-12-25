const React = require("react");
const Layout = require("../Layout");

function Witch_doctor({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>WITCH DOCTOR</h1>
        <p>
          Witch Doctor идеально дополняет любую команду. Мало кто сравнится с
          ним по универсальности: он может постепенно излечивать товарищей,
          оглушать и насмерть проклинать врагов, а также уничтожать их своим
          мощным ультом.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Witch_doctor;
