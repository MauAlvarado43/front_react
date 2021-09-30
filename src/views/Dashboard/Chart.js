import React from "react"
import PropTypes from "prop-types"
import { Bar } from "react-chartjs-2"
import { MDBContainer } from "mdbreact"

const Chart = ({ timeline = {} }) => {

    const data = {
        labels: Object.keys(timeline).map(e => e.toUpperCase()),
        datasets: [{
            data: Object.values(timeline),
            backgroundColor: 'rgba(98,  182, 239,0.4)',
            borderWidth: 1,
            borderColor: 'rgba(98,  182, 239, 1)'
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false
            }
        },
        scales: {
            yAxes: {
                display: true,
            },
            xAxes: {
                display: true
            }
        }
    }

    return  <MDBContainer>
                <Bar data={data} options={options}></Bar>
            </MDBContainer>

}

Chart.propTypes = {
    timeline: PropTypes.object
}

export default Chart