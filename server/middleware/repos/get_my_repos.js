module.exports = (projectRepo) => (req, res) => {
    return Promise.resolve(true)
        .then(() => projectRepo.getMyRepos(req.user))
        .then((projects) => res.send(projects));
};
