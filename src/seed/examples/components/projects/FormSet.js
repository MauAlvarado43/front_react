/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { PROJECT, SET_PROJECT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/projects/Form";

function ProjectFormSet({ projectId, onCompleted = () => null, onError = () => null  }) {

  const qProject = useDetail(PROJECT, projectId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_PROJECT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qProject.loading) return <Loading />;

  const { project = {} } = qProject.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = projectId;
    callSet(values);
  };

  return <View
    project={project}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

ProjectFormSet.propTypes = {
  projectId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProjectFormSet;