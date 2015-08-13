module.exports = function getProjects(projectRepository) {
    return function getProjectsHandler(req, res) {
        return Promise.resolve(true)
            .then(() => projectRepository.getProjects(req.user))
            .then((projects) => res.send(projects));
    };
};

