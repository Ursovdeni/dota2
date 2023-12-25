const React = require("react");
const Layout = require("../Layout");

function Batrider({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>BATRIDER</h1>
        <p>
          Взмыв в небеса, Batrider может нанести удар с любой стороны. Захватив
          противника своим лассо, он поднимается над верхушками деревьев и тащит
          жертву по тропе огня прямо к своим беспощадным союзникам.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Batrider;
