import React from "react";
import PropTypes from "prop-types";
import { useSave, useQuery } from "seed/gql";
import { SAVE_TASK } from "seed/gql/queries";
import View from "../../views/Dashboard/FormTask";

function FormTask({ onCompleted = () => null, onError = () => null }) {
  
    const qUsersProjects = useQuery(`{
      users{
        email
        id
      },
      projects{
        name
        id
      }
    }`)

    const [callSave, qSave] = useSave(SAVE_TASK, {
      onCompleted: () => onCompleted()
    })

    const { users = [], projects = [] } = qUsersProjects.data
    const error = qSave.error ? "Ha habido un error" : null
  
    const onSubmit = (values) => {
      values["deadline"] = new Date(values["deadline"])
      return callSave(values)
    }
  
    return <View
      users={users}
      projects={projects}
      error={error}
      onSubmit={onSubmit}
    />

}
  
FormTask.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
}

export default FormTask