/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_TASK } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/tasks/Form";

function TaskFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qUsers = useQuery(`{ users { } }`);
  const qProjects = useQuery(`{ projects { } }`);
  const [callSave, qSave] = useSave(SAVE_TASK, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { users = [] } = qUsers.data;
  const { projects = [] } = qProjects.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    users={users}
    projects={projects}
    error={error}
    onSubmit={onSubmit}
  />;
}

TaskFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default TaskFormSave;