import React, { Component } from 'react'
import propTypes from "prop-types"

export default class HeaderLine extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {header ,desc ,tempArr} =this.props
        if(!header){
            return null
        }
        return (
            <div data-test="headerlinecomponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                {desc}
                </p>
                <p>
                {JSON.stringify(this.props.tempArr)}
                </p>
            </div>
        )
    }
}

HeaderLine.propTypes={
    header:propTypes.string,
    desc:propTypes.string,
    tempArr:propTypes.arrayOf(propTypes.shape({
        fName:propTypes.string,
        lName:propTypes.string,
        age:propTypes.number ,
        email:propTypes.string,
        onlinestatus:propTypes.bool

    }))
}