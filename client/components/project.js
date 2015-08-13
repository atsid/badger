const React = require('react/addons');

const Project = React.createClass({
    propTypes: {
        project: React.PropTypes.object.isRequired,
    },

    getInitialState() {
        return {
            project: {},
        };
    },

    componentWillReceiveProps(nextProps) {
        this.setState({project: nextProps.project});
    },

    render() {
        const privateIndicator = (this.state.project.private && 'Private') || 'Public';
        const badges = [];
        if (this.state.project.badges) {
            this.state.project.badges.forEach((b) => badges.push(
                <span className="projectBadge" dangerouslySetInnerHTML={{__html: b}}></span>
            ));
        }

        return (
            <div>
                <div className="projectTitleLine">
                    <h2 className="projectName">
                        { this.state.project.name }
                    </h2>
                    <h4 className="projectPrivacy">
                        { privateIndicator }
                    </h4>
                </div>
                <div className="projectBadges">
                    { badges }
                </div>
            </div>
        );
    },
});

module.exports = Project;
