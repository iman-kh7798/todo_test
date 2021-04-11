import React from 'react';
import ContentCalender from "./ContentCalender";
import icon from '../assets/SVG/icon.svg'
import search from '../assets/search.png'
const Calendar = () => {
    return (
        <div id="calendar">
            <div className="shadow_box"/>
            <div className="profile_data" style={{
                border: "none", borderRadius: "50px 50px", flexDirection: 'column',
                alignItems: "center", justifyContent: 'space-between'
            }}>
                <div style={{
                    border: "none",
                    borderRadius: "0 50px 0 0",
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    display: "flex",
                    width: "100%",
                    marginTop: "45px"
                }}>
                    <p style={{marginLeft: "25px", fontSize: "30px"}}>November 19</p>
                    <div style={{
                        width: "6%",
                        height: "inherit",
                        textAlign: "center"
                    }}>
                        <h2>Today</h2>
                        <p>18, Mon</p>
                    </div>
                    <div style={{position:'relative',marginRight:"20px"}}>
                        <img style={{position:'absolute',width:'17px',top:"33%",paddingLeft:"14px"}} src={search} alt="search"/>
                        <input id="search_box" style={{marginRight: "40px",width:"100%"}} placeholder="     Search"/>
                    </div>
                </div>
                <div className="history">
                    <div style={{
                        width: '60px', height: '30px'
                        , display: 'flex', justifyContent: 'center', alignItems: "center"
                    }}><img src={icon} alt="icon" style={{width: "10px"}}/></div>
                    <div style={{
                        width: '60px', height: '30px'
                        , display: 'flex', justifyContent: 'center', alignItems: "center"
                    }}><p>Day</p></div>
                    <div style={{
                        width: '60px', height: '30px'
                        , display: 'flex', justifyContent: 'center', alignItems: "center"
                    }}><p>Week</p></div>
                    <div style={{
                        width: '60px',
                        height: '25px'
                        ,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: "#ee8f60",
                        borderRadius: "50px"
                        ,
                        border: "2px solid #fac8af"
                    }}><p style={{color: "white"}}>Month</p></div>
                    <div style={{
                        width: '60px', height: '30px'
                        , display: 'flex', justifyContent: 'center', alignItems: "center"
                    }}><img src={icon} alt="icon" style={{width: "10px", transform: "rotate(180deg)"}}/></div>
                </div>
                <div className="history" style={{
                    height: "50px", width: '98%', fontWeight: "bold", margin: "20px 0"
                    , backgroundImage: "background-image: linear-gradient(180deg, #f2f3f5, transparent)}"
                }}>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
            </div>
            <ContentCalender/>
        </div>
    );
};

export default Calendar;
