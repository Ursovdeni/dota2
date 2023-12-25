const React = require("react");
const Layout = require("../Layout");

function Disruptor({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>DISRUPTOR</h1>
        <p>
          Disruptor мастерски разрушает планы врагов. Он способен создать
          непроходимый барьер и спустить на попавшихся в ловушку врагов бурю
          безмолвия, а если противник предпримет что-то неожиданное, то
          Disruptor вернёт его туда, где тот находился раньше.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Disruptor;
