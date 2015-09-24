const React = require('react/addons');

// Components
const mui = require('material-ui');
const Paper = mui.Paper;
const Table = mui.Table;
const TableBody = mui.TableBody;
const TableHeader = mui.TableHeader;
const TableRow = mui.TableRow;
const TableRowColumn = mui.TableRowColumn;
const TableHeaderColumn = mui.TableHeaderColumn;

function privacy(project) {
  return project.private && (<b> (Private)</b>) || '';
}

function githubUrl(project) {
  return 'http://github.com/' + project.name;
}

const BadgeTable = React.createClass({
  propTypes: {
    projects: React.PropTypes.array.isRequired,
  },

  render() {
    const projects = this.props.projects || [];
    return (
      <Paper>
        <Table selectable={false} fixedHeader={true}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn colSpan="6" tooltip="Project Badges" style={{textAlign: 'center'}}>
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
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              projects.map((p, i) => (
                <TableRow key={i}>
                  <TableRowColumn><a href={githubUrl(p)}>{p.name}</a>{privacy(p)}</TableRowColumn>
                  <TableRowColumn dangerouslySetInnerHTML={{__html: p.badges.build}}/>
                  <TableRowColumn dangerouslySetInnerHTML={{__html: p.badges.quality}}/>
                  <TableRowColumn dangerouslySetInnerHTML={{__html: p.badges.coverage}}/>
                  <TableRowColumn dangerouslySetInnerHTML={{__html: p.badges.dependencies}}/>
                  <TableRowColumn dangerouslySetInnerHTML={{__html: p.badges.devDependencies}}/>
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

