module.exports = (req, res) => {
    res.send({
        links: {
            'by-org': '/repos/orgs/{org}',
            'by-user': '/repos/users/{user}',
            'by-name': '/repos/all/{owner}/{repo}',
            'mine': '/repos/mine',
        },
    });
};
