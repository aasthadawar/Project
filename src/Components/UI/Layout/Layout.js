import React from 'react';
import Header from '../Header/Header';
import Cases from '../../../Containers/Cases/Cases';
import Countries from '../../../Containers/Countries/Countries';


const Layout=()=>{
    return(
        <div >
            <Header/>
            <Cases/>
            <Countries/>
        </div>
    );
}

export default Layout;