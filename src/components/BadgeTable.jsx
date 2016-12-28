import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableRowColumn,
  TableHeaderColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

function privacy(project) {
  return project.private ?
    (<span className="projectPrivacy"> PRIVATE</span>) :
    null;
}

function githubUrl(project) {
  return `http://github.com/${project.name}`;
}

const BadgeTable = React.createClass({
  propTypes: {
    projects: React.PropTypes.arrayOf(
      React.PropTypes.shape({
      }),
    ).isRequired,
  },

  render() {
    const projects = this.props.projects || [];
    return (
      <Paper>
        <Table selectable={false} fixedHeader>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn colSpan="7" tooltip="Project Badges" style={{ textAlign: 'center' }}>
                Project Badges
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Repo">Repo</TableHeaderColumn>
              <TableHeaderColumn tooltip="Build">Build</TableHeaderColumn>
              <TableHeaderColumn tooltip="Quality">Quality</TableHeaderColumn>
              <TableHeaderColumn tooltip="Coverage">Coverage</TableHeaderColumn>
              <TableHeaderColumn tooltip="Dependencies">Dependencies</TableHeaderColumn>
              <TableHeaderColumn tooltip="Dev Dependencies">Dev Dependencies</TableHeaderColumn>
              <TableHeaderColumn tooltip="Language">Language</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              projects.map((p, i) => (
                <TableRow key={i}>
                  <TableRowColumn className="badgeTableCell"><a href={githubUrl(p)}>{p.name}</a>{privacy(p)}</TableRowColumn>
                  <TableRowColumn className="badgeTableCell" dangerouslySetInnerHTML={{__html: p.badges.build}}/>
                  <TableRowColumn className="badgeTableCell" dangerouslySetInnerHTML={{__html: p.badges.quality}}/>
                  <TableRowColumn className="badgeTableCell" dangerouslySetInnerHTML={{__html: p.badges.coverage}}/>
                  <TableRowColumn className="badgeTableCell" dangerouslySetInnerHTML={{__html: p.badges.dependencies}}/>
                  <TableRowColumn className="badgeTableCell" dangerouslySetInnerHTML={{__html: p.badges.devDependencies}}/>
                  <TableRowColumn><span className="languageCell">{p.language}</span></TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  },
});
module.exports = BadgeTable;

