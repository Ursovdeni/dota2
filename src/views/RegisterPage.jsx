const React = require("react");
const Layout = require("./Layout");

function Register({ user }) {
  return (
    <Layout user={user}>
      <div className="loginContainer">
        <div
          className="card"
          style={{ width: "18rem", background: "none", boxShadow: "none" }}
        >
          <h4 className="card-header">Регистрация</h4>
          <div className="card-body">
            <form action="/api/users/" method="POST">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Имя пользователя
                  <input
                    name="userName"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Пароль
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-dark"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Register;
