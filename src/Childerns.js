import React from 'react';
import Childernicon from './icon/Childern.png';



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

class Childern extends React.Component{
    render(){
        return(
            <div className="categorybox">
                <div className='childern-container' style={{ display: 'flex', width: '100%' }}>
                    <div style={{ width: '80%' }}>
                        <span style={{ marginLeft: '5px' }}><img className="Childern" src={Childernicon} /></span>
                        <span style={imgStyle}>Childern</span>
                    </div>
                    <div style={buttonStyle}><span className="round round-blue" onClick={this.props.ChildDecrease}>-</span></div>
                    <div style={buttonStyle}><span className="round bg-none"> {this.props.children} </span></div>
                    <div style={buttonStyle}><span className="round" onClick={this.props.ChildIncrease}>+</span></div>
                </div>
            </div>
        )
    }
}

export default Childern;