const React = require("react");
const Layout = require("../Layout");

function Keeper_of_the_light({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>KEEPER OF THE LIGHT</h1>
        <p>
          Keeper of the Light полезен любой команде. Он манипулирует маной
          врагов и союзников, повергает слабых противников волнами света и,
          преисполнившись сиянием, ведёт соратников в наступление.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Keeper_of_the_light;
