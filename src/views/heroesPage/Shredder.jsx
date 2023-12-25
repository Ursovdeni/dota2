const React = require("react");
const Layout = require("../Layout");

function Shredder({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>TIMBERSAW</h1>
        <p>
          Увёртливый и непредсказуемый Timbersaw рубит лес так, что валятся его
          враги. Он метает огромные пилы и может притянуться к дереву цепью,
          сокрушая неприятелей по пути.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Shredder;
