/**
 * GET /
 * Home page.
 */

exports.index = (req, res) => {
  res.render('main', {
    title: 'main'
  });
};
