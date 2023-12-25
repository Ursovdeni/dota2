const React = require("react");
const Layout = require("../Layout");

function Enchantress({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>ENCHANTRESS</h1>
        <p>
          Опасная вблизи и смертоносная на расстоянии, Enchantress пронзает
          врагов атаками, которые становятся тем сильнее, чем больше расстояние
          до цели. Благодаря способности замедлять своих врагов и зачаровать
          лесных существ она всегда найдёт способ одержать победу в схватке.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Enchantress;
