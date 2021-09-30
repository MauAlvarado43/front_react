import React from "react"
import PropTypes from "prop-types"
import Task from "./Task"

function TaskList({completed = [], incompleted = []}) {

    return <>
        <div className="col-md-6">
            <div className="container mx-auto text-center">
                <h3>TAREAS NO COMPLETADAS</h3>
            </div>
            {incompleted.map(e => <Task key={e["id"]} info={e}></Task>)}
        </div>
        <div className="col-md-6">
            <div className="container mx-auto text-center">
                <h3>TAREAS  COMPLETADAS</h3>
            </div>
            {completed.map(e => <Task key={e["id"]} info={e}></Task>)}
        </div>
    </>

}

TaskList.propTypes = {
    completed: PropTypes.array,
    incompleted: PropTypes.array
}

export default TaskList