/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const TaskForm = ({ task= {}, users= [], projects= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Task</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={task}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Name */}
            <div class="form-group">
            <label class="input-label">Name</label>
            <Field type="text" name="name"
              class="form-control" />
            </div>
            {/* Deadline */}
            <div class="form-group">
            <label class="input-label">Deadline</label>
            <Field type="date" name="deadline"
              class="form-control" />
            </div>
            {/* Status */}
            <div class="form-group">
            <label class="input-label">Status</label>
            <Field component="select" name="status.id"
              class="form-control"  >
              <option value="">Select an option</option>
              <option value="TODO">TODO</option>
              <option value="IN_PROCESS">IN_PROCESS</option>
              <option value="COMPLETED">COMPLETED</option>
            </Field>
            </div>
            {/* Assigned */}
            <div class="form-group">
            <div>
            <label class="input-label">Assigned</label>
            <Field component="select" name="assigned.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {users.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Project */}
            <div class="form-group">
            <div>
            <label class="input-label">Project</label>
            <Field component="select" name="project.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {projects.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

TaskForm.propTypes = {
  task: PropTypes.object,
  users: PropTypes.array,
  projects: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TaskForm;