import React from 'react'
import "./TabsAccount.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import change from "./../../assets/images/change.svg"
import plus from "./../../assets/images/plus.svg"

export default function TabsAccount() {
    const dataAccount = [
        {
            id: 1,
            accountSpan: "Name",
            accountParg: "John Doe",
            showButton: false,
        },
        {
            id: 2,
            accountSpan: "Email",
            accountParg: "john.doe@gmail.com",
            showButton: true,
        },
        {
            id: 3,
            accountSpan: "Password",
            accountParg: "************",
            showButton: false,
        },
        {
            id: 4,
            accountSpan: "Phone number",
            accountParg: "+1 000-000-0000",
            showButton: false,
        },
        {
            id: 5,
            accountSpan: "Address",
            accountParg: "St 32 main downtown, Los Angeles, California, USA",
            showButton: false,
        },
        {
            id: 6,
            accountSpan: "Date of birth",
            accountParg: "01-01-1992",
            showButton: false,
        },
    ];
    return (
        <>
            <div className='MS-TabContainer'>
                <Tabs
                    defaultActiveKey="Account"
                    id="uncontrolled-tab-example"
                    className="mb-3 MS-tabs MS-TabAccount"
                >
                    <Tab eventKey="Account" title={<spsn className="MS-span MS-border2">Account</spsn>} className="Ms-tabhome">
                        <h6 className='MS-HeaderAccount'>Account</h6>
                        <div className='MS-infoAcount'>
                            
                                {dataAccount.map((accountCard) => (
                                    <>
                                        <div className='MS-accountCard'>
                                            <div className='MS-infoDescription'>
                                                <span>{accountCard.accountSpan}</span>
                                                <p>{accountCard.accountParg}</p>
                                            </div>
                                            <div>
                                                {accountCard.showButton && <button className='MS-accountbtn  MS-accountbtn1'><img src={plus} alt="plus" />Add another email</button>}
                                                <button className='MS-accountbtn'><img src={change} alt="change" />Change</button>
                                            </div>
                                        </div>
                                    </>
                                )
                                )}
                            </div>
                    </Tab>
                    <Tab eventKey="History" title={<spsn className="MS-span MS-border2">History</spsn>}>

                    </Tab>
                    <Tab eventKey="Payment methods" title={<spsn className="MS-span">Payment methods</spsn>}>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
