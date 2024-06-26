import React from 'react'
import './TapState.css'
export default  function TapState  ()  {
    const OSArrowFlight=[{
        img:'./src/assets/images/cvk.png',
        paragraf:'Check-In',
        number1:'Thur, Dec 8',
        linel:'./src/assets/images/LineL.svg',
        number2:'Fri, Dec 9',
       dateText:'Check-In time',
        Date:'12:00pm',
        HourIcon:'./src/assets/images/timmer.svg',
        time:'Check-In out',
        TimeText:'11:30am',
        GateIcon:'./src/assets/images/doorclosed.svg',
        gate:'Room no.',
        GateText:'On arrival',
        btnContent1:'Download Ticket',
        btnContent2:'./src/assets/images/chevron_forward.svg'
    },
    {
        img:'./src/assets/images/cvk.png',
        paragraf:'Check-In',
        number1:'Thur, Dec 8',
        linel:'./src/assets/images/LineL.svg',
        number2:'Fri, Dec 9',
       dateText:'Check-In time',
        Date:'12:00pm',
        HourIcon:'./src/assets/images/timmer.svg',
        time:'Check-In out',
        TimeText:'11:30am',
        GateIcon:'./src/assets/images/doorclosed.svg',
        gate:'Room no.',
        GateText:'On arrival',
        btnContent1:'Download Ticket',
        btnContent2:'./src/assets/images/chevron_forward.svg'
    },
    {
    img:'./src/assets/images/cvk.png',
    paragraf:'Check-In',
    number1:'Thur, Dec 8',
        linel:'./src/assets/images/LineL.svg',
        number2:'Fri, Dec 9',
       dateText:'Check-In time',
        Date:'12:00pm',
        HourIcon:'./src/assets/images/timmer.svg',
        time:'Check-In out',
        TimeText:'11:30am',
        GateIcon:'./src/assets/images/doorclosed.svg',
        gate:'Room no.',
        GateText:'On arrival',
        btnContent1:'Download Ticket',
        btnContent2:'./src/assets/images/chevron_forward.svg'
    },
]
  return (
    <>
         <div className='OS-big-Style'>
           {OSArrowFlight.map((item)=>{
             return<div className='OS-Fl-Style'>
                <div className=' OS-Emirates-line'> <img src={item.img} alt="Emirates-line" /></div>
                <div className=' OS-Text-Style'>
                    <div className='OS-Text'>
                        <p className='OS-Text-par'>{item.paragraf}</p>
                        <h4 className='OS-Text-number'>{item.number1}</h4>
                    </div>
                    <div className='OS-Line-img'><img src={item.linel}alt="Line" /></div>
                    <div>
                    <p className='OS-Text-par'>{item.paragraf}</p>
                    <h4 className='OS-Text-number'>{item.number2}</h4>
                    </div>
                </div>
                <div className='OS-Date-All'>
                    <div className='OS-Date-padding'>
                    <div className='OS-Date-flex'>
                       <div  className='OS-HourIcon'> <img src={item.HourIcon} alt="dateIcon" /></div>
                        <div className='OS-Text-padding'>
                        <span className='OS-Text-para'>{item.dateText} </span>
                        <span className='OS-Text-date'>{item.Date}</span>
                      </div>
                    </div>
                    <div className='OS-Date-flex'>
                       <div className='OS-HourIcon'><img src={item.HourIcon} alt="dateIcon" /></div>
                        <div className='OS-Text-padding'>
                        <span className='OS-Text-para'>{item.time}</span>
                        <span className='OS-Text-date'>{item. TimeText}</span>
                        </div>
                    </div>
                </div>
                <div className='OS-Date-padding'>
                    <div className='OS-Date-flex'>
                       <div  className='OS-HourIcon'> <img src={item.GateIcon} alt="dateIcon" /></div>
                        <div className='OS-Text-padding'>
                        <span className='OS-Text-para'>{item.gate} </span>
                        <span className='OS-Text-date'>{item.GateText}</span>
                      </div>
                    </div>
                   
                </div>
                </div>
                <div className='OS-Flight-btn'>
                    <button className='OS-btn1'>{item.btnContent1}</button>
                    <button  className='OS-btn2'><img src={item.btnContent2}alt="" /></button>
                </div>
             </div>})}
       </div>
    </>
  )
}

 
