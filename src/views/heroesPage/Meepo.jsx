const React = require("react");
const Layout = require("../Layout");

function Meepo({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>MEEPO</h1>
        <p>
          Призвав до пяти своих полноценных копий, Meepo способен сражаться на
          всех фронтах одновременно. Он распределяет своих клонов по полю боя и,
          заметив врага, приковывает его к земле, со взрывом телепортирует к
          себе остальные копии и добивает истощённую жертву.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Meepo;
