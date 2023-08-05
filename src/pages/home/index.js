import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/header/footer/tabOptions'
import Footer from '../../components/common/header/footer'
import Delivery from '../../components/Delivery';
import DiningOut from '../../components/DiningOut';
import NightLife from '../../components/NightLife';

const HomePage = () => {

const [ activeTab, setActiveTab ] = useState("Delivery")

  return (
    <>
    <div> 
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
       
        </div>
        <div>
        <Footer />
        </div>
        </>
  );
};


const getCorrectScreen = (tab) => {
    switch(tab){
        case "Delivery":
            return <Delivery  />;
            case "DiningOut":
                return <DiningOut />;
                case "NightLife":
                    return <NightLife />;
                    default:
                        return <Delivery  />;
    }
};


export default HomePage