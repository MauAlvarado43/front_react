/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import ProjectDetails from "seed/examples/components/projects/Details";
import ProjectList from "seed/examples/components/projects/List";
import ProjectFormSave from "seed/examples/components/projects/FormSave";
import ProjectFormSet from "seed/examples/components/projects/FormSet";
import { ModalRoute } from "seed/helpers";

const Projects = () =>
  <BrowserRouter basename="/examples/projects">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Projects</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <ProjectList />

    {/* Modals */}
    <ModalRoute
        path="/:projectId(\d+)"
        component={ProjectDetails} />
    <ModalRoute
      path="/create"
      component={ProjectFormSave} />
    <ModalRoute
      path="/:projectId(\d+)/edit"
      component={ProjectFormSet} />

    </div>
  </BrowserRouter>;

Projects.propTypes = {};

export default Projects;