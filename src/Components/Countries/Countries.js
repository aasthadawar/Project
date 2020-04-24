import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initCountriesDetails } from '../../store/Actions/CountriesActions';
import Country from '../Country/Country';
import styles from '../Countries/Countries.module.css';
import Spinner from '../UI/Spinner/Spinner';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const Countries = React.memo((props) => {
    var myInterval
    var country = [];
    var [filterArray, setArray] = useState([]);

    useEffect(() => {
        props.onShowCountriesDetails();
        myInterval = setInterval(() => {
            props.onShowCountriesDetails();
        }, 600000)

        return () => {
            clearInterval(myInterval);
        }
    }, [props.onShowCountriesDetails])


    const onSearchHandler = (event) => {
        var value = event.target.value;
        var formattedValue = value.toLowerCase();
        var arr = country.filter(items => items.country.toLowerCase().includes(formattedValue))
        setArray(arr)
    }


    if (props.countriesData) {
        country = [];
        if (props.countriesData.length === 0 && props.countriesError === false) {
            var spinner = <Spinner />
        }

        else if (props.countriesData.length !== 0) {
            country = props.countriesData;
            var counter = 0;

            if (filterArray.length === 0) {
                var countryData = (
                    country.map(items => {

                        counter++;
                        return (
                            <Country key={counter} name={items.country} url={items.countryInfo.flag} recovered={items.recovered} total={items.cases} />
                        );
                    })
                )
            }
            else {
                var countryData = (
                    filterArray.map(items => {
                        return (
                            <Country key={items.country} name={items.country} url={items.countryInfo.flag} recovered={items.recovered} total={items.cases} />
                        );
                    })
                )
            }

            var search = (
                <div className={styles.Search}>
                    <div className={styles.Icon}>
                        <input onChange={() => onSearchHandler(window.event)} type="text" placeholder="search location "></input>
                    </div>
                </div>
            )
        }
    }

    if (props.countriesError === true) {
        var error = <ErrorHandling />;
    }

    return (
        <div className={styles.Countries}>
            {spinner}
            {error}
            {search}
            <div className={styles.overflow}>
                {countryData}
            </div>
        </div>
    );

})

const mapStateToProps = (state) => {
    return {
        countriesData: state.cou.countries,
        countriesError: state.cou.countryError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowCountriesDetails: () => dispatch(initCountriesDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);