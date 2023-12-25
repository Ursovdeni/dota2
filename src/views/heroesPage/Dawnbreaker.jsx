const React = require("react");
const Layout = require("../Layout");

function Dawnbreaker({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DAWNBREAKER</h1>
        <p>
          Dawnbreaker проявляет себя в гуще боя, с радостью круша врагов своим
          небесным молотом и излечивая союзников вокруг. Она охотно швырнёт свой
          молот в противников, чтобы воссоединиться с ним в пламенном полёте, и
          всегда готова обратиться к своей истинной космической мощи, чтобы
          прилететь на помощь союзникам, где бы они ни были, и разгромить
          неприятеля.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Dawnbreaker;
