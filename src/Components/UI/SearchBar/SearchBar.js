import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import {connect} from 'react-redux'; 

const SearchBar=(props)=>{
    const onSearchHandler=(event)=>{
        var value=event.target.value;
        console.log('value',value);
    }

    return(
        <div className={styles.Search}>
          <div className={styles.Icon}><input type="text" onChange={()=>onSearchHandler(window.event)} placeholder="Search Location"></input></div>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        countryData:state.cou.countries
    }
}

export default connect(mapStateToProps)(SearchBar);