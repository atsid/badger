module.exports = (req, res) => {
    res.json({
        options: ['GET'],
        links: {
            'current': '/auth/current',
            'local': '/auth/local',
            'google': '/auth/google',
            'github': '/auth/github',
        },
    });
    res.end();
};
