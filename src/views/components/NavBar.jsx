const React = require("react");

function NavBar({ user }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/img/logo.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Домашняя страница
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/heroes">
                  Герои
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  Новости
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/players">
                  Показать профили 5 рандомных проф игроков
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/rang-heroes">
                  Винрейт героев по рангам
                </a>
              </li>
            </ul>
            {user ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <span className="nav-link">{user?.userName}</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="chat" href="">
                    Обратная связь
                  </a>
                </li>
                <li className="nav-item">
                  <span
                    id="logout"
                    className="nav-link"
                    style={{ userSelect: "none" }}
                  >
                    Выйти
                  </span>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Войти
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Регистрация
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <script src="/js/logout.js" />
    </>
  );
}

module.exports = NavBar;
