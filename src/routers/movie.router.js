const router = require('express').Router();
const { Movie } = require('../../db/models');
const isAuth = require('../middleweare/isAuth');

router.post('/', async (req, res) => {
  try {
    await Movie.create({ ...req.body, userId: req.session?.user?.id });
    res.redirect('/news');
  } catch (e) {
    console.error(e);
  }
});

router.delete('/:id', isAuth, async (req, res) => {
  const { user } = req.session;
  console.log(req.params);
  try {
    const targetMovie = await Movie.findByPk(req.params.id);

    if (targetMovie.userId === user.id) {
      await targetMovie.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.put('/:id', async (req, res) => {
  const {
    title,
    text,
    img
  } = req.body;
  const { user } = req.session;
  try {
    const targetMovie = await Movie.findByPk(req.params.id);

    if (user.id === targetMovie.userId) {
      targetMovie.update({
        title,
        text,
        img
      });
      targetMovie.save();
      res.end();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
