import React, { Component } from 'react'
import { CardGroup ,NavItem,Spinner } from 'react-bootstrap'
import MainCard from './MainCard'
import axios from 'axios'

export class Main extends Component {
    constructor(props){
        super (props)
        this.state={
           drinksData:[]
        }
    }

    componentDidMount=()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/apiData`).then(response=>{

this.setState({
    drinksData:response.data 
  
})
console.log(this.drinksData); 
//you can use console log (error.message)
        }).catch(error=>alert(error.message))
    }
/*------------------------------------------add or create fav function [post]-----------------------*/

    handleAddToFav=(item)=>{
        const reqBody={
            id:item.id,
            name:item.name,
            img:item.img

        }
    axios.post(`${process.env.REACT_APP_SERVER_URL}/favourite`,reqBody).then(Response=>{

if(Response.data==='already exist'){alert('the drink is already in your favourite list')}else{
    alert('added successfully')
}

    }).catch(error=>alert(error.message))
    }
   
    render() {
        return (
            <div>
              {
                  this.state.drinksData.length>0?
                  <CardGroup>
                      {
                          this.state.drinksData.map((value,idx)=>{
                              return(
<MainCard
key={idx}
name={value.strDrink}
id={value.idDrink}
img={value.strDrinkThumb}
handleAddToFav={this.handleAddToFav}

/> 
                              )
                          }

                          )
                      }
                  </CardGroup>:
                  //i can put just ''
                  <Spinner animation="border" />
              }
            </div>
        )
    }
}

export default Main
