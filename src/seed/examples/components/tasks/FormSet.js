/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { TASK, SET_TASK } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/tasks/Form";

function TaskFormSet({ taskId, onCompleted = () => null, onError = () => null  }) {

  const qTask = useDetail(TASK, taskId);
  const qUsers = useQuery(`{ users { } }`);
  const qProjects = useQuery(`{ projects { } }`);
  const [callSet, qSet] = useSet(SET_TASK, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qTask.loading) return <Loading />;

  const { task = {} } = qTask.data;
  const { users = [] } = qUsers.data;
  const { projects = [] } = qProjects.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = taskId;
    callSet(values);
  };

  return <View
    task={task}
    users={users}
    projects={projects}
    error={error}
    onSubmit={onSubmit}
  />;
}

TaskFormSet.propTypes = {
  taskId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default TaskFormSet;