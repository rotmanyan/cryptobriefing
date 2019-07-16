import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import { connect } from "react-redux";

import { dataProjects } from "data/news/selectors";
import { newsActions } from "data/news/actions";
import { fetchNews } from "middleware/News";

// import "./Project.scss";

class Project extends Component {
  handleClickOutside = evt => {
    const { handleOpenProject, fetchNews } = this.props;
    if (evt.isTrusted) {
      handleOpenProject();
      fetchNews();
    }
  };

  selectProject = (e, id) => {
    const { selectProject } = this.props;

    selectProject({ checked: e.target.checked, id });
  };

  selectProjectAll = e => {
    const { selectProjectAll } = this.props;

    selectProjectAll({ checked: e.target.checked });
  };

  render() {
    const { handleOpenProject, projects, selectedAll } = this.props;
    return (
      <div className="wrapper-project-modal">
        <div className="title-project" onClick={handleOpenProject}>
          Project
        </div>

        <div className="wrapper-project-item first">
          <input
            type="checkbox"
            checked={selectedAll}
            className="checkbox-source"
            onChange={this.selectProjectAll}
            id='projectSelectAll'
          />
          <label htmlFor='projectSelectAll' className="name-project">Select All</label>
        </div>

        <div className="wrapper-items">
          {projects.map(item => (
            <div className="wrapper-project-item" key={item.id}>
              <input
                checked={item.checked || false}
                type="checkbox"
                className="checkbox-source"
                onChange={e => this.selectProject(e, item.id)}
                id={`projectSelect${item.id}`}
              />
              <label htmlFor={`projectSelect${item.id}`} className="name-project">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: dataProjects(state),
  selectedAll: state.news.checkedAllProject
});

const mapDispatchToProps = {
  fetchNews,
  selectProject: newsActions.selectProject,
  selectProjectAll: newsActions.selectProjectAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Project));
