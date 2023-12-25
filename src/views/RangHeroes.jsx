const React = require("react");
const Layout = require("./Layout");

function RangHeroes({ user }) {
  return (
    <Layout user={user}>
      <div className="button-container">
        {user ? (
          <>
            <div className="button">
              <a href="/rang-heroes/1">
                <img src="/img/ranks1.jpg" alt="Button 1" />
              </a>
            </div>
            <div className="button">
              <a href="/rang-heroes/2">
                <img src="/img/ranks2.jpg" alt="Button 2" />
              </a>
            </div>
            <div className="button">
              <a href="/rang-heroes/3">
                <img src="/img/ranks3.jpg" alt="Button 3" />
              </a>
            </div>
            <div className="button">
              <a href="/rang-heroes/4">
                <img src="/img/ranks4.jpg" alt="Button 4" />
              </a>
            </div>
            <div className="button">
              <a href="/rang-heroes/5">
                <img src="/img/ranks5.jpg" alt="Button 5" />
              </a>
            </div>
            <div className="button">
              <a href="rang-heroes/6">
                <img src="/img/ranks6.jpg" alt="Button 6" />
              </a>
            </div>
            <div className="button">
              <a href="/rang-heroes/7">
                <img src="/img/ranks7.jpg" alt="Button 7" />
              </a>
            </div>
            <div className="button">
              <a href="/rang-heroes/8">
                <img src="/img/ranks8.jpg" alt="Button 8" />
              </a>
            </div>
          </>
        ) : (
          <label htmlFor="accountID" className="textPls"> 
            Пожалуйста, войдите или зарегистрируйтесь
          </label>
        )}
      </div>
    </Layout>
  );
}

module.exports = RangHeroes;
