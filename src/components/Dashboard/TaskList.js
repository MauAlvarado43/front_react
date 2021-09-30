import React from "react";
import { Loading } from "seed/helpers";
import { useQuery } from "seed/gql";
import View from "../../views/Dashboard/TaskList";

function Task() {

    const qTasks = useQuery(
    `{
        completed: tasks(query: "status=COMPLETED"){
            name
            deadline
            status
            project {
                name
                id
            }
        },
        incompleted: tasks(query: "status = TODO OR status = IN_PROCESS"){
            name
            deadline
            status
            project {
                name
                id
            }
        }
    }`)

    if (qTasks.loading) return <Loading />
    if (qTasks.error) return "Error"

    const { completed = [], incompleted = [] } = qTasks.data

    console.log(completed)
    console.log(incompleted)

    return <View 
        completed={completed}
        incompleted={incompleted}
    />

}

Task.propTypes = {};

export default Task;