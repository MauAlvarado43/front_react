/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PROJECT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/projects/Details";

function ProjectDetails({ projectId, onCompleted = () => null, onError = () => null }) {

  const reqProject = useDetail(`
  {
    project {
      name
      createdAt
      members { }
    }
  }`, projectId);
  
  const [callDelete] = useDelete(DELETE_PROJECT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqProject.loading) return <Loading />;
  if (reqProject.error) return "Error";
  const { project = {} } = reqProject.data;

  const onClickDelete = () =>
    callDelete({ id: projectId });

  return <View
    project={project}
    onClickDelete={onClickDelete}
   />;
}

ProjectDetails.propTypes = {
  projectId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProjectDetails;