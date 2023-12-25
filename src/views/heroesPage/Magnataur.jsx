const React = require("react");
const Layout = require("../Layout");

function Magnataur({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MAGNUS</h1>
        <p>
          Magnus готов преподать урок врагам, по глупости вставшим рядом друг с
          другом. Он способен стянуть противников в одну точку и разгромить их
          своими мощными ударами или, пронзив жертв рогом, притащить их к своим
          беспощадным союзникам.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Magnataur;
