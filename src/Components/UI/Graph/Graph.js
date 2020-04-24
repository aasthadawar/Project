import React from 'react';
import activeGraph from '../../../assests/images/agraph.png';
import totalGraph from '../../../assests/images/tgraph.png';
import deathGraph from '../../../assests/images/dgraph.png';
import recoveredGraph from '../../../assests/images/rgraph.png';
import styles from '../Graph/Graph.module.css';

const Graph = (props) => {
    let caseGraph = '';

    switch (props.label) {
        case 'total':
            caseGraph = (
                <img className={styles.Graph} src={totalGraph} alt="totalGraph"></img>
            )
            break;

        case 'active':
            caseGraph = (
                <img className={styles.Graph} src={activeGraph} alt="activeGraph"></img>
            )
            break;

        case 'recovered':
            caseGraph = (
                <img className={styles.Graph} src={recoveredGraph} alt="recoveredGraph"></img>
            )
            break;

        case 'deaths':
            caseGraph = (
                <img className={styles.Graph} src={deathGraph} alt="deathsGraph"></img>
            )
            break;
    }

    return (
        <div>
            {caseGraph}
        </div>
    );
}

export default Graph;