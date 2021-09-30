import React from "react"
import PropTypes from "prop-types"
import '../../resources/css/Task.css'

function Task({ info }) {

    return <div className="container task">
        <div className="row">
            <div className="col my-auto text-center">
                <div class="avatar avatar-sm avatar-circle">
                  <img class="avatar-img" src="/theme/img/160x160/img1.jpg" alt="Profile" />
                </div>
            </div>
            <div className="col my-auto">
                <div className="row">
                    {info["name"]}
                </div>
                <div className="row">
                    {(new Date(info["deadline"])).toLocaleDateString()}
                </div>
            </div>
            <div className="col my-auto text-center">
                    <button className="btn btn-secondary" disabled={true}>#{info["project"]["name"]}</button>
            </div>
        </div>
    </div>
}

Task.propTypes = {
    info: PropTypes.object
}

export default Task