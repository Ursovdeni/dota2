const React = require("react");
const Layout = require("../Layout");

function Elder_titan({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>ELDER TITAN</h1>
        <p>
          Разведав территорию своим астральным духом, Elder Titan готов
          атаковать с любого направления. Он останавливает противников ударом
          копыта, разъедает их защиту одним лишь своим присутствием и повергает
          неприятелей, расколов почву под ними.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Elder_titan;
