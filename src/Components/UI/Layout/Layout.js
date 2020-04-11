import React from 'react';
import Header from '../Header/Header';
import Cases from '../../../Containers/Cases/Cases';
import Countries from '../../../Containers/Countries/Countries';
import Recovery from '../../Recovery/Recovery';


const Layout=()=>{
    return(
        <div >
            <Header/>
            <Cases/>
            <Recovery/>
            <Countries/>
        </div>
    );
}

export default Layout;