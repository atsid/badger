module.exports = (projectRepo) => (req, res) => {
  return Promise.resolve(true)
    .then(() => projectRepo.getMyRepos(req.user, req.query.page))
    .then((projects) => res.send(projects));
};
