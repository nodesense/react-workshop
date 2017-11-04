import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{id: 1, price: 10, name:'p1', qty: 1}],
            amount: 0,
            count: 0
        }
    }

    addItem() {
        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: 'Product ' + id,
            price: 100 + Math.ceil(Math.random() * 1000),
            qty: 1
        }

        let items = [...this.state.items, item];

        this.setState( {
            items: items
        });

        this.reCalculate(items);
    }

    reCalculate(items) {
        let amount = 0;
        let count = 0;

        for (let item of items) {
            amount += item.qty * item.price
            count += item.qty;
        }

        this.setState({
            amount: amount,
            count: count
        })
    }

    removeItem(id) {
        let items = this.state.items
                           .filter (item => item.id != id);

        this.setState({
            items: items
        });

        this.reCalculate(items);
    }

    updateItem(id, qty) {
        qty = parseInt(qty) || 0;

        let items = this.state.items.map( item => {
            if (item.id != id) 
                return item;
            return Object.assign({}, item, {qty: qty});
        })

        this.setState({
            items: items
        })

        this.reCalculate(items);
    }

    emptyCart() {
        
        this.setState({
            items: []
        })

        this.reCalculate([]);
    }
   
    refresh() {
        this.setState({
            flag: true
        })
    }

    componentDidMount() {
        //reinitialize if state has any items
        this.reCalculate(this.state.items);
    }
    
    render() {
        console.log("Cart render");

        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={()=> this.addItem()}>
                Add Item
            </button>
 
            <button     onClick={()=> this.emptyCart()}   >
                Empty
            </button>


            <button onClick={()=> this.refresh()}>
                Refresh
            </button>
  

            <CartList items = {this.state.items} 
                      onRemove = {(id) => this.removeItem(id)}
                      onUpdate = {(id, qty) => this.updateItem(id, qty)}
            >
            </CartList>

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}            
            >
            </CartSummary>

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}