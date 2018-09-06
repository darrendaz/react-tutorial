import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './handling-events-example';
import {Game} from './tictactoe'
import {LoginControl} from "./login-button";
import {Page} from "./warning-banner";
import {NumberList} from './list';
import {Blog} from "./blog";
import NameForm from "./form";
import LongForm from "./long-form";
import FlavorForm from "./select-form";
import Calculator from "./temp-calculator";
import {Dialog, SignUpDialog, WelcomeDialog} from "./composition-inheritance";
import FilterableProductTable from "./filterable-product-table";
import './index.css';




class Clock extends React.Component {
    constructor(props) {
       super(props) ;
       this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function App() {
    const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

    return (
        <div>
            <FilterableProductTable products={PRODUCTS} />
            <SignUpDialog/>
            <WelcomeDialog />
            <Dialog>
                <Calculator />
            </Dialog>
            <NumberList numbers={numbers}/>
            <NameForm />
            <LongForm />
            <FlavorForm />
            <div>
                <LoginControl/>
            </div>
            <Blog posts={posts} />
            <div>
                <Game />
            </div>
            <Clock />
            <Toggle />
            <Page />

        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

