module.exports = (projectRepo) => (req, res) => {
    return Promise.resolve(true)
        .then(() => projectRepo.getProjectsByUser(req.user, req.params.owner))
        .then((projects) => res.send(projects));
};
