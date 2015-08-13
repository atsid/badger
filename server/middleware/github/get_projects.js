module.exports = function getProjects(projectRepository) {
    return function getProjectsHandler(req, res) {
        return Promise.resolve(true)
            .then(() => projectRepository.getProjects())
            .then((projects) => res.send(projects));
    };
};

