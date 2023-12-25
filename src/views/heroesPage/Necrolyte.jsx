const React = require("react");
const Layout = require("../Layout");

function Necrolyte({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>NECROPHOS</h1>
        <p>
          Necrophos всюду несёт благополучие друзьям и смерть — врагам.
          Излечивая союзников и нанося противникам урон каждым пульсом смерти,
          он изничтожает врагов одним лишь своим присутствием. Также Necrophos
          может воззвать к помощи самого жнеца, который надолго задержит жертву
          в мире ином.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Necrolyte;
