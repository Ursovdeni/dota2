const React = require("react");
const Layout = require("../Layout");

function Earthshaker({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>EARTHSHAKER</h1>
        <p>
          Внезапные атаки Earthshaker не дают врагам отступить, разделяют их
          силы и разрывают под ними землю. Всех, кому удалось выжить, он
          добивает взмахами своего могучего тотема.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Earthshaker;
