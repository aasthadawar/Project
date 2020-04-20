import React from 'react';
import { VectorMap } from "react-jvectormap";
import styles from './Map.module.css';
import Spinner from '../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import CountryMap from '../CountryMap/CountryMap';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const Map=(props)=>{
    var newObj={};
    var map='';
    if(props.countriesData)
    {
        if(props.countriesData.length==0 && props.countryError==false)
            {
                var spinner = <Spinner/>;
            }
        else if(props.countriesData.length!=0)
            {
                props.countriesData.map(items=>{
                    if(items.country_abbreviation!=""){
                        newObj[items.country_abbreviation]= parseInt(items.total_cases.split(',').join(''))
                    }
                })
                map = (<VectorMap  map={"world_mill"}backgroundColor="#FBF6F6 " zoomOnScroll={false} containerStyle={{ width: "100%",height:'360px' }}
                    containerClassName="map"
                    regionStyle={{
                    initial: {
                    fill: "#e4e4e4",
                    "fill-opacity": 0.9,
                    stroke: "none",
                    "stroke-width": 0,
                    "stroke-opacity": 0
                    },
                    hover: {
                    "fill-opacity": 0.8,
                    cursor: "pointer"
                    },
                    selectedHover: {}
                    }}
                    series={{
                    regions: [
                    {
                    values: newObj, 
                    scale: ["#FFC4C6","#FF0019"], 
                    normalizeFunction: "polynomial"
                    }
                    ]
                    }}
                />)
                var countryDetails = <CountryMap/>
            }
    }
    if(props.countryError==true){
        var error = <ErrorHandling/>
    }
    return (
        <div className={styles.main}>
            <div className={styles.sub}>
                {spinner}
                {error}
                {countryDetails}
                <div className={styles.vector}>{map}</div>
            </div>
        </div>
    );
        
}

const mapStateToProps=(state)=>{
    return{
        countriesData:state.cou.countries,
        countryError:state.cou.countryError
    }
}

export default connect(mapStateToProps)(Map);
    