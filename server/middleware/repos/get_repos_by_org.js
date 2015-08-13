module.exports = (projectRepo) => (req, res) => {
    return Promise.resolve(true)
        .then(() => projectRepo.getProjectsByOrg(req.user, req.params.org))
        .then((projects) => res.send(projects));
};
