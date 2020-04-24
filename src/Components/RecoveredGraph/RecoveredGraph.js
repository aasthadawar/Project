import React from 'react'
import { LineChart } from 'react-chartkick';
import { connect } from 'react-redux';
import 'chart.js';
import Aux from '../../hoc/Aux/Aux';
import Spinner from '../UI/Spinner/Spinner';
import styles from '../RecoveredGraph/RecoveredGraph.module.css';

const DeathGraph = (props) => {
    var result =
    {
        recovered: {},
    }
    var newObj = {};
    var date = new Date();
    var formatDate = date.toDateString();
    var finalDate = formatDate.split(' ');
    var dateString = `${finalDate[2]} ${finalDate[1]}`;

    if (props.graphDetails) {
        if (props.graphDetails.length === 0) {
            var spinner = <Spinner />;
        }

        else if (props.graphDetails.length !== 0) {
            props.graphDetails.forEach((countryObj) => {
                Object.keys(countryObj.timeline.cases).forEach((date) => {
                    result.recovered[date] = (result.recovered[date] || 0) + countryObj.timeline.recovered[date];
                });
            });

            var obj = result.recovered;
            var arr = [];

            for (let key in obj) {
                arr.push(obj[key]);
            }

            var final = 0;

            for (let i = 0; i < arr.length; i++) {
                if (i === arr.length - 2) {
                    var initial = arr[i];
                }

                else if (i === arr.length - 1) {
                    final = arr[i] - initial;
                }
            }

            var newKey = "";

            for (var key in obj) {
                newKey = `"${key}"`;
                newObj[newKey] = obj[key];
            }

            var chart = <LineChart width="340px" height="200px" colors={["#FF0000"]} data={newObj} />
            var dateNow = <p>{dateString}</p>;
            var heading = <p>RECOVERED</p>;
        }

    }

    if (props.recover) {
        var str = `${props.recover}`;
        if (str.split('').length > 3) {
            var tot = (props.recover / 1000).toFixed(2);
            var showAffect = <p className={styles.heading} >{tot}k</p>;
        }

        else {
            showAffect = <p className={styles.heading}>{props.total}</p>;
        }
    }

    var strFinal = `${final}`;

    if (strFinal.split('').length > 3) {
        var newFinal = (final / 1000).toFixed(2);
        var newConfirm = <p className={styles.new}>{newFinal}k </p>;
    }

    else {
        newConfirm = <p className={styles.new}>{final}</p>;
    }

    return (
        <Aux>
            {spinner}
            <div className={styles.description}>
                {heading}
                {dateNow}
                <div className={styles.flex}>
                    {showAffect}
                    {newConfirm}
                </div>
            </div>
            <div className={styles.chart}>
                {chart}
            </div>
        </Aux>
    );
}

const mapStateToProps = (state) => {
    return {
        graphDetails: state.graph.graphCases,
        recover: state.cas.cases.recovered
    }
}

export default connect(mapStateToProps)(DeathGraph);