const React = require("react");
const Layout = require("../Layout");

function Nevermore({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>SHADOW FIEND</h1>
        <p>
          Shadow Fiend становится сильнее с каждой полученной душой убитого им
          существа. Каждое убийство, каждое точное попадание опустошающими
          чарами приближает смертоносный удар энергии выпущенных на волю душ.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Nevermore;
