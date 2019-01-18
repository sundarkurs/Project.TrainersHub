import React, { Component } from "react";
import WorkoutItem from "../components/WorkoutItem"

class Workouts extends React.Component {

    constructor() {
        super();
    
        this.state = {
          projects: []
        };
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);

        this.setState({
        projects: projects
        });
    }

    getProjects() {
        this.setState({
          projects: [
            {
              id: 1,
              title: "Contact Portal",
              category: "B2C"
            },
            {
              id: 2,
              title: "Agent Portal",
              category: "B2B"
            }
          ]
        });
    }

    componentWillMount() {
        this.getProjects();
    }

    render(){


        let projectItems;
        if (this.state.projects) {
          projectItems = this.state.projects.map(project => {
            return (
              <WorkoutItem
                onDelete={this.handleDeleteProject.bind(this)}
                key={project.id}
                project={project}
              />
            );
          });
        }

        return (
            <div>
              <h3>Projects </h3>
              <div className="Projects">{projectItems}</div>
            </div>
          );
    }
};

export default Workouts;