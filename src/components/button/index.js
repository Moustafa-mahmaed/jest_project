import React, { Component } from 'react'
import ProtoTypes from "prop-types";
 class SharedButton extends Component {
     submitEvent(){
         if(this.props.emitEvent){

             this.props.emitEvent()
         }
     }
    render() {
        const {buttonText}=this.props
        return (
            <button 
            onClick={()=>{this.submitEvent()}}
             data-test='buttonComponent' >
              {buttonText}

            </button>
        )
    }
}


SharedButton.ProtoTypes={
    buttonText:ProtoTypes.string ,
    emitEvent:ProtoTypes.func

}

export default SharedButton;