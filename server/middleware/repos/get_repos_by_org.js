module.exports = (projectRepo) => (req, res) => {
    return Promise.resolve(true)
        .then(() => projectRepo.getProjectsByOrg(req.user, req.params.org, req.query.page))
        .then((projects) => res.send(projects));
};
