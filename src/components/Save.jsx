import React from "react";
import axios from "axios";




export default class AddFruit extends React.Component {

    state = {
        fruit: []
    }

    

    onChangeNameFruit = (e) => {
        this.setState({
            nameFruit: e.target.value
        });
    };

    onChangeColorFruit = (e) => {
        this.setState({
            colorFruit: e.target.value
        });
    };

    onChangePriceFruit = (e) => {
        this.setState({
            priceFruit: e.target.value
        });
    };

    onSubmitFruit = async (e) => {
        const response = await axios.post(`/fruit`, {
            nameFruit: this.state.nameFruit,
            colorFruit: this.state.colorFruit,
            priceFruit: this.state.priceFruit,
        });
        this.setState({
            nameFruit: '',
            colorFruit: '',
            priceFruit: '',
            
        });
    }


    render() {
        return (
                <form onSubmit={this.onSubmitFruit}>
                    <input
                        type="text"
                        name="nameFruit"
                        placeholder="name"
                        onChange={this.onChangeNameFruit} />
                    <input
                        type="text"
                        name="colorFruit"
                        placeholder="color"
                        onChange={this.onChangeColorFruit} />
                        
                    <input
                        type="number"
                        name="priceFruit"
                        placeholder="price"
                        onChange={this.onChangePriceFruit} />
                    <button type="submit">SAVE FORM</button>    
                </form>
        )
    }
}

