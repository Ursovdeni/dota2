const React = require("react");
const Layout = require("../Layout");

function Phantom_lancer({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>PHANTOM LANCER</h1>
        <p>
          Phantom Lancer уничтожает противников бесконечным запасом своих
          клонов. Его армия иллюзий сметает вражеские силы и укрепления шквалом
          молниеносных ударов, а заодно запутывает противника, позволяя избежать
          опасности.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Phantom_lancer;
