const React = require("react");
const Layout = require("../Layout");

function Ursa({ user }) {
  return (
    <Layout user={user}>
      <div className="heroContainer">
        <h1>URSA</h1>
        <p>
          Ursa раздирает плоть своей жертвы, с каждым ударом нанося ей всё
          больше урона. Он ненадолго увеличивает скорость своих ударов,
          замедляет противников неподалёку и быстро разрывает их на кусочки.
        </p>
        <video
          className="heropage_HeroPortrait_22nJ5"
          poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.png"
          autoPlay
          preload="auto"
          loop
          playsInline
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.png" />
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.webm"
          />
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.png" />
        </video>
      </div>
    </Layout>
  );
}

module.exports = Ursa;
