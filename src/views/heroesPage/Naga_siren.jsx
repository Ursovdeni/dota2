const React = require("react");
const Layout = require("../Layout");

function Naga_siren({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>NAGA SIREN</h1>
        <p>
          Naga Siren отправляет в наступление свои копии, а затем связывает и
          убивает врагов. Своей песней она выводит противников из строя,
          позволяя подготовиться к нападению или немедленно отступить.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Naga_siren;
