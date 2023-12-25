const express = require('express');
const renderTemplate = require('../utils/renderTemplate');
const HomePage = require('../views/HomePage');
const AddMovie = require('../views/AddMovie');
const Movies = require('../views/Movies');
const MovieInfo = require('../views/MovieInfo');
const MovieEdit = require('../views/MovieEdit');
const Login = require('../views/Login');
const Register = require('../views/RegisterPage');
const RangHeroes = require('../views/RangHeroes');
const Heroes = require('../views/Heroes');
const { Movie, Hero } = require('../../db/models');
const isAuth = require('../middleweare/isAuth');
const Chat = require('../views/Chat');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('COOCKIE', req.session);
  const { user } = req.session;
  renderTemplate(HomePage, { user }, res);
});

router.get('/news/new', isAuth, (req, res) => {
  const { user } = req.session;
  renderTemplate(AddMovie, { user }, res);
});

router.get('/news', async (req, res) => {
  const { user } = req.session;
  const movies = (await Movie.findAll()).map((item) => item.get());
  renderTemplate(Movies, { movies, user }, res);
});

router.get('/heroes', async (req, res) => {
  const { user } = req.session;
  const heroess = (await Hero.findAll()).map((item) => item.get());
  renderTemplate(Heroes, { heroess, user }, res);
});

router.get('/news/:id', async (req, res) => {
  try {
    const movie = (await Movie.findByPk(req.params.id)).get();
    const { user } = req.session;
    renderTemplate(MovieInfo, { movie, user }, res);
  } catch (e) {
    console.error(e);
    res.redirect('/404');
  }
});

router.get('/news/:id/edit', async (req, res) => {
  try {
    const { user } = req.session;
    const movie = (await Movie.findByPk(req.params.id)).get();
    renderTemplate(MovieEdit, { movie, user }, res);
  } catch (e) {
    console.error(e);
    res.redirect('/404');
  }
});

router.get('/users/news', async (req, res) => {
  const { user } = req.session;
  const movies = await Movie.findAll({
    where: { userId: req.session?.user?.id },
    raw: true,
  });
  renderTemplate(Movies, { movies, user }, res);
});

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
});

router.get('/rang-heroes', async (req, res) => {
  const { user } = req.session;
  renderTemplate(RangHeroes, { user }, res);
});

router.get('/chat', async (req, res) => {
  const { user } = req.session;
  renderTemplate(Chat, { user }, res);
});

module.exports = router;
