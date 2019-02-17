import React, {Component} from 'react';

class Product extends Component {
 
    render(){
        const {nombre, precio} = this.props.product
        return (
            <div>
                <h3>{ nombre }</h3>
                <p>Precio $ { precio } CLP</p>
            </div>
        )
    }
}

export default Product; 