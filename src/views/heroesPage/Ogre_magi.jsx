const React = require("react");
const Layout = require("../Layout");

function Ogre_magi({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>OGRE MAGI</h1>
        <p>
          Благодаря возможности многократно приумножить эффект каждого своего
          заклинания и толике удачи Ogre Magi способен обратить врагов в пепел
          или усилить союзников. Но, разумеется, полагаться лишь на удачу — дело
          неблагодарное...
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Ogre_magi;
