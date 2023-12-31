import Carousel from '../carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./filterSection.css"
import { useState } from "react";
import { css } from "@emotion/react";

    const FilterSection = ({ title, data, filters, executeFilter}) => {

    const[selectedTab, setSelectedTab] = useState(0)

    return(<div className='section'>
    <div>
        <h1 className='title'>{title}</h1>
    </div>
    <Tabs
     value={selectedTab}
     onChange={(e, value)=>{
        executeFilter(filters[value].key)
        setSelectedTab(value)
     }}
     TabIndicatorProps={{
            style:{
                backgroundColor: 'var(--css-primary)'
            }
         }}
    >
    {filters.map(f => <Tab  key={f.key} label={f.label} className="tab"/>)}
    </Tabs>
        <Carousel data={data} navId="filter"/>
    </div>)
}

export default FilterSection;