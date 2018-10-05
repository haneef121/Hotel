import React from 'react';
import Adults from './Adults';
import bed from './icon/bed.png';
import group from './icon/Group.png';
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

class Rooms extends React.Component{
    constructor(props){
        super()
        this.state = {
            rooms: 1,
            maxrooms : 5,
            adults: 1,
            maxadults : 20,
            children: 0,
            maxchildren : 15
        }

        this.fnDecrease = this.fnDecrease.bind(this);
        this.fnIncrease = this.fnIncrease.bind(this);
    }
    fnDecrease(){

        if(this.state.rooms == 1){
            return 
        }
        let roomNumber = this.state.rooms
        let removeCount = (this.state.adults + this.state.children) - (--roomNumber*4)
        let remainingCount =0;
        let adults;
        let children;
        if(this.state.children >0){
            if(this.state.children > removeCount){
                children = this.state.children - removeCount
                adults = this.state.adults
            }else{
                children = 0
                remainingCount = removeCount - this.state.children;
                adults = this.state.adults - remainingCount
            }

        }else{
            adults = this.state.adults - removeCount
            children = 0

        }

        
            this.setState({
                rooms : --this.state.rooms,
                adults: adults,
                children:children
            })
        
    }


    fnIncrease(){

            if(this.state.rooms != this.state.maxrooms){
            this.setState({
                rooms : ++ this.state.rooms,
                adults: ++ this.state.adults
            })
        }
    }
    AdultDecrease(){
            let rooms;
        if(this.state.rooms ===1){
                return null;
            }
            if(this.state.adults === this.state.rooms){
                alert('Adlut count cannot be less than rooms count')
                return;
            }
        if(this.state.adults == 1 ){
            return
        }   
        

        console.log("Hannef : decrease the adults",this.state.adults.children)
        if((this.state.adults + this.state.children) % 4 ===0){
        
             rooms = --this.state.rooms
            
        }else{
            rooms = this.state.rooms
        }

        
            this.setState({
                adults : --this.state.adults,
                rooms:rooms
            })
 
        
    }
    AdultIncrease(){

        if(this.state.adults == this.state.maxadults || (this.state.adults+this.state.children) == this.state.maxadults){
            return;
        }
       
        if(this.state.adults != 0 ){
            this.setState({
                adults : ++this.state.adults
            })
        }
        if((this.state.adults + this.state.children) / 4 >this.state.rooms){
          
           this.setState({
            rooms : ++this.state.rooms
            })
        }   
        
    }

    ChildIncrease(){
      
        if(this.state.children == this.state.maxchildren || (this.state.adults+this.state.children) == this.state.maxadults){
            return;
        }
        this.setState({
            children : ++this.state.children
        })

        if((this.state.adults + this.state.children) / 4 >this.state.rooms){
            this.setState({
                rooms : ++this.state.rooms
            })
           
        }

        
    }

    ChildDecrease(){        
        if(this.state.rooms ===1){
            return null;
        }
        if(this.state.children != 0){
            this.setState({
                children : --this.state.children
            })
        }
        if((this.state.adults + this.state.children) % 4 ===0){
            this.setState({
                rooms : --this.state.rooms
                })
            
        }
    }

    render(){
        return(
            <div>
                <div id ="groupofpeople">
                    <img className="group" src={group} /> Choose the number of peoples
                </div>
                <div className="categorybox">

                    <div className = 'room-container' style={{display:'flex', width:'100%'}}>
                        <div style={{width:'80%'}}>
                        <span style={{marginLeft: '5px'}}><img className="Rooms" src={bed} /></span>    
                         <span style={imgStyle}>Rooms</span> 
                         </div>
                        <div style={buttonStyle}><span className="round round-blue" onClick={this.fnDecrease}>-</span></div>
                        <div  style={buttonStyle}><span className="round bg-none"> {this.state.rooms} </span></div>
                        <div  style={buttonStyle}><span className="round" onClick={this.fnIncrease}>+</span></div>
                    </div>    
                        
                    <Adults adults={this.state.adults} 
                        rooms={this.state.rooms} 
                        AdultIncrease={this.AdultIncrease.bind(this)} 
                        AdultDecrease={this.AdultDecrease.bind(this)} />
                    <Childerns ChildIncrease={this.ChildIncrease.bind(this)} 
                        ChildDecrease={this.ChildDecrease.bind(this)}
                        rooms={this.state.Rooms}
                        adults={this.state.adults}
                        children={this.state.children} />
              
            </div>
            </div>
        )
    }
}

export default Rooms;
