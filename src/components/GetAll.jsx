import React from "react";
import axios from "axios";




 export default class List extends React.Component{

     state = {
         fruit: [],
     }

     componentDidMount(){
         axios.get(`/fruit`)
         .then(response => {
             console.log(response);
             if(response.status )
             this.setState({ fruit: response.data});
         });
     }

     render(){
         return (
            <div>
                
            {
                this.state.fruit.map(particularFruit =>
                    //the condition will here to show only  the enable works 

                    <div className="particular">
                        <h3>{particularFruit.nameFruit}</h3>
                        <p>{particularFruit.colorFruit}</p>
                        <p>{particularFruit.priceFuit}</p>
                    </div>
                )
            }
        </div>
         )
     }


 }