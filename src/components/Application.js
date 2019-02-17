//PARTES DE UN COMPONENETE
// 1. importar react
import React, {Component} from 'react';

import Header from './Header';
import Products from  './Products';
import Footer from './Footer';

// 2. crear la clase
class Application extends Component {
    state = {
        products : []
    };

    componentDidMount() {

        const products = [
            {nombre: 'libro', precio: 200},
            {nombre: 'Disco de muscia', precio: 100},
            {nombre: 'Guitarra', precio: 800},
            {nombre: 'Reproductor', precio: 1200},
            {nombre: 'Album', precio: 500}        
        ]
        
        setTimeout(() => {
            
        this.setState({
                products : products
            });
        }, 3000);
    }

    // 3.asegurar que exista render
    render(){
        
        return (
            <div>
                <Header 
                    title = "Nuestra Tienda Virtual"
                />
                <h1>Tienda Virtual (APP)</h1>
                <Products
                    products = {this.state.products}
                />
                <Footer />
            </div>
        )
    }
}
// 4. Exportar componente e importarlo en el archivo principal 
export default Application; 