const React = require("react");
const Layout = require("../Layout");

function Invoker({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>INVOKER</h1>
        <p>
          Благодаря обширному арсеналу заклинаний Invoker может приспособиться к
          ходу любой битвы. Комбинируя три магичесих компонента, он может
          сотворить одно из десяти заклинаний, позволяющих уничтожить врага или
          спастись от него.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Invoker;
