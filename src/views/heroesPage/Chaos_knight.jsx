const React = require("react");
const Layout = require("../Layout");

function Chaos_knight({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>CHAOS KNIGHT</h1>
        <p>
          Chaos Knight — сам по себе армия. Он способен призывать кавалерию
          своих двойников и разрушать постройки врага, а когда покажутся
          защитники, он расколет реальность и перенесёт себя и свои копии на
          расстояние, достаточное для рокового взмаха булавы.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Chaos_knight;
