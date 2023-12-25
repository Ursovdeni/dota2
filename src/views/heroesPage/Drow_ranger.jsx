const React = require("react");
const Layout = require("../Layout");

function Drow_ranger({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DROW RANGER</h1>
        <p>
          Немногим удаётся спастись от Drow Ranger. Обезмолвив врагов морозной
          волной, она накрывает их градом замедляющих ледяных стрел, после
          которого мало кто способен выжить.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Drow_ranger;
