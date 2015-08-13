module.exports = (req, res) => {
    res.json({
        options: ['GET'],
        links: {
            'current': '/auth/current',
            'local': '/auth/local',
            'github': '/auth/github',
        },
    });
    res.end();
};
