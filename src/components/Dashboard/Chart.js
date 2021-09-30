import React from "react";
import PropTypes from "prop-types";
import View from "../../views/Dashboard/Chart";
import { useGet } from "seed/api";
import { Loading } from "seed/helpers";

function Chart() {

    const reqTimeline = useGet('/tasks/timeline')

    if(reqTimeline.isLoading) return <Loading />
    else if(reqTimeline.error) return "Error"

    const timeline = reqTimeline.data

    return <View timeline={timeline}/>;
}

Chart.propTypes = {};

export default Chart;