import React from "react";
import PropTypes from "prop-types";
import Chart from '../components/Dashboard/Chart'
import TaskList from '../components/Dashboard/TaskList'
import Form from '../components/Dashboard/FormTask'
import { ModalRoute } from "seed/helpers";
import { Link, BrowserRouter} from "react-router-dom";

const Dashboard = () => <BrowserRouter basename="/dashboard">

  <div className="row h-100">
    <div className="col-md-10 h-75 mx-auto my-auto">
      <span className="h-75">

        <div className="row">
          <div className="col my-auto text-left">
            <h3>DASHBOARD</h3>
          </div>
          <div className="col my-auto text-right">
            <Link to="/new" className="btn btn-primary">
              <i class="tio-add mr-1"></i>NUEVA TAREA
            </Link>
          </div>
        </div>

        <hr/>

        <div className="row h-50">
          <Chart />
        </div>

        <hr/>

        <div className="row h-25">
          <TaskList />
        </div>

      </span>  
    </div>
  </div>

    <ModalRoute
        path="/new"
        component={Form} />

  </BrowserRouter>;

Dashboard.propTypes = {
};

export default Dashboard;