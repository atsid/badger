module.exports = (projectRepo) => (req, res) => {
    return Promise.resolve(true)
        .then(() => projectRepo.getProject(req.user, req.params.owner, req.params.repo))
        .then((projects) => res.send(projects));
};
