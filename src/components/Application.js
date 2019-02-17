//PARTES DE UN COMPONENETE
// 1. importar react
import React, {Component} from 'react';

import Header from './Header';
import Products from  './Products';
import Footer from './Footer';

// 2. crear la clase
class Application extends Component {

    // 3.asegurar que exista render
    render(){
        const products = [
            {nombre: 'libro', precio: 200},
            {nombre: 'Disco de muscia', precio: 100},
            {nombre: 'Guitarra', precio: 800},
            {nombre: 'Reproductor', precio: 1200},
            {nombre: 'Album', precio: 500}
        ]
        return (
            <div>
                <Header 
                    title = "Nuestra Tienda Virtual"
                />
                <h1>Tienda Virtual (APP)</h1>
                <Products
                    products = {products}
                />
                <Footer />
            </div>
        )
    }
}
// 4. Exportar componente e importarlo en el archivo principal 
export default Application; 