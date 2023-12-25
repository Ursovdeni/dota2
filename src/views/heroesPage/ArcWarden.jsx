const React = require("react");
const Layout = require("../Layout");

function ArcWarden({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>Arc Warden</h1>
        <p>
          Зет, Arc Warden — разбитый осколок той древней мощи, что породила
          самих Древних, и он намерен прекратить схватку Света и Тьмы.
          Сковывайте одиноких врагов потоками энергии или искажайте
          пространство, создавая защитное поле для союзников. Призывайте
          призрачные искры, нападающие на приблизившихся противников, или же
          полную копию самого себя со всеми предметами и способностями,
          способную сокрушить неприятеля.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = ArcWarden;
