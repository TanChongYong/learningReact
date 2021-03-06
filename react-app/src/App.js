import React, {Component} from 'react';
import './App.css';
import ProductItem from './product-item';


const products = [


    {
        name: 'ipad',
        price: 200
    },
    {
        name: 'iphone',
        price: 650
    }
];
localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:  JSON.parse(localStorage.getItem('products'))
        };
        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount() {
        const products = this.getProducts()
        this.setState({products});
    }

    getProducts() {
        return this.state.products;
    }
    onAdd(){

    }
    onDelete(name) {
        const products = this.getProducts();
        const filteredProducts = products.filter(product => {
            return product.name !== name;
        });
        console.log(filteredProducts)
        this.setState({products : filteredProducts});
    }

    render() {
        return (
            <div className="App">
                <h1>Products Manager</h1>
                {
                    this.state.products.map(product => {
                        return (
                            <ProductItem
                                key={product.name}
                                {...product}
                                onDelete={this.onDelete}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default App;
