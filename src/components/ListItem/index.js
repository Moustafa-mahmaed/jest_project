import React, { Component } from 'react'
import propTypes from  "prop-types"
 class ListItem extends Component {
    render() {
         const { title ,desc  } =this.props;
        // const { title ,desc} = this.prop
        if(!title ){
            return null;
        }

        return (
            <div data-test="ListItemComponent">
            <h2 data-test="ListItemTitle">
           {title}
            </h2>
<div>
             <p data-test="ListItemDesc" >
           {desc}
            </p>
</div>
                
            </div>
        )
    }
}

ListItem.propTypes={
    title:propTypes.string,
    desc:propTypes.string
}

export default ListItem;