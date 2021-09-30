/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_TASK } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/tasks/Details";

function TaskDetails({ taskId, onCompleted = () => null, onError = () => null }) {

  const reqTask = useDetail(`
  {
    task {
      name
      deadline
      status
      createdAt
      assigned { }
      project { }
    }
  }`, taskId);
  
  const [callDelete] = useDelete(DELETE_TASK, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqTask.loading) return <Loading />;
  if (reqTask.error) return "Error";
  const { task = {} } = reqTask.data;

  const onClickDelete = () =>
    callDelete({ id: taskId });

  return <View
    task={task}
    onClickDelete={onClickDelete}
   />;
}

TaskDetails.propTypes = {
  taskId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default TaskDetails;