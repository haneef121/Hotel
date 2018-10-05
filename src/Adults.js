import React from 'react';
import Adult from './icon/Adult.jpg';



import Childerns from './Childerns';


const buttonStyle={
    marginTop: 8
}

const imgStyle ={
    verticalAlign: 'middle',
    display: 'inline-block',
    marginBottom: 15,
    marginLeft:10,
    color: 'blue'
}

class Adults extends React.Component{

    render(){
        console.log("haneef  : inside the adults",this)
        return(
            <div className="categorybox">
                <div className = 'Adult-container' style={{display:'flex', width:'100%'}}>
                        <div style={{width:'80%'}}>
                        <span style={{marginLeft: '5px'}}><img className="Adult" src={Adult} /></span>    
                         <span style={imgStyle}>Adults</span> 
                         </div>
                    <div style={buttonStyle}><span className="round round-blue" onClick={this.props.AdultDecrease}>-</span></div>
                    <div style={buttonStyle}><span className="round bg-none"> {this.props.adults}</span></div>
                    <div style={buttonStyle}><span className="round" onClick={this.props.AdultIncrease}>+</span></div>

                </div>
            </div>
        )
    }
}

export default Adults;
