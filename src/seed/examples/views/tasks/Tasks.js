/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import TaskDetails from "seed/examples/components/tasks/Details";
import TaskList from "seed/examples/components/tasks/List";
import TaskFormSave from "seed/examples/components/tasks/FormSave";
import TaskFormSet from "seed/examples/components/tasks/FormSet";
import { ModalRoute } from "seed/helpers";

const Tasks = () =>
  <BrowserRouter basename="/examples/tasks">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Tasks</h1>
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
    <TaskList />

    {/* Modals */}
    <ModalRoute
        path="/:taskId(\d+)"
        component={TaskDetails} />
    <ModalRoute
      path="/create"
      component={TaskFormSave} />
    <ModalRoute
      path="/:taskId(\d+)/edit"
      component={TaskFormSet} />

    </div>
  </BrowserRouter>;

Tasks.propTypes = {};

export default Tasks;