const React = require('react');
const Layout = require('./Layout');

function MovieInfo({ movie, user }) {
  return (
    <Layout user={user}>
      <div className="editContainer">
        <h5>{movie.title}</h5>
        <p>{movie.text}</p>
        {user.userName === 'admin' && (
          <>
            <button
              className="btn btn-dark"
              type="button"
              data-movieid={movie.id}
              id="deleteBtn"
            >
              Удалить
            </button>
            <a href={`/news/${movie.id}/edit`} style={{ margin: '15px' }}>
              <button className="btn btn-dark" type="button">
                Редактировать
              </button>
            </a>
          </>
        )}
        <a href="/news" className="btn btn-secondary detailButton">Назад к новостям</a>
      </div>
      <script src="/js/movie-delete.js" />
    </Layout>
  );
}

module.exports = MovieInfo;
