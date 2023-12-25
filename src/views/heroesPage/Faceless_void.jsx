const React = require("react");
const Layout = require("../Layout");

function Faceless_void({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>FACELESS VOID</h1>
        <p>
          Для Faceless Void важна каждая секунда. Он стремительно перемещается,
          ускорив ход времени, а затем, манипулируя им, уклоняется от ударов,
          останавливает его на большой территории и уничтожает замерших врагов.
          Имея в своём распоряжении достаточно времени, он становится невероятно
          могучим.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Faceless_void;
