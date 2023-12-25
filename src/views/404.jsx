const React = require('react');
const Layout = require('./Layout');

function MovieInfo({ user }) {
  return (
    <Layout user={user}>
      <div className="editContainer">
        <h1>Данной страницы не существует</h1>
        <h2>Ошибка 404, вернитесь на<a href="/" className="btn btn-secondary detailButton">главную</a></h2>
      </div>
    </Layout>
  );
}

module.exports = MovieInfo;