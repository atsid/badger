module.exports = (projectRepo) => (req, res) => {
    return Promise.resolve(true)
        .then(() => projectRepo.getProjectsByUser(req.user, req.params.owner, req.query.page))
        .then((projects) => res.send(projects));
};
