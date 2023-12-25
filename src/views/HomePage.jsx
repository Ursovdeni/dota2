const React = require("react");
const Layout = require("./Layout");
function HomePage({ user }) {
  return (
    <Layout user={user}>
      <div>
        <div className="video-container">
          <video className="background-video" autoPlay loop muted>
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
            />
            <source
              type="video/mp4"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
            />
          </video>
          <div className="video-overlay">
            <h1 className="video-overlay-title">Портал игры Dota 2</h1>
            <a
              href="https://store.steampowered.com/app/570/Dota_2/"
              className="video-overlay-button"
              target="_blank"
            >
              Скачать бесплатно
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = HomePage;
