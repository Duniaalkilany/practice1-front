import axios from 'axios'
import React, { Component } from 'react'
import { CardGroup } from 'react-bootstrap'
import FavouriteCard from './FavouriteCard'
import UpdateForm from './UpdateForm'
export class Favourite extends Component {

    constructor(props){
        super(props)
        this.state={
            favData:[],
            choosenToUpdate:{},
            showForm:false
        }
    }


    componentDidMount=()=>{
      axios.get(`${process.env.REACT_APP_SERVER_URL}/favourite`).then(response=>{
          this.setState({
            favData:response.data
          })
      }).catch(error=>alert(error.message)) 
    }



    deletefavs=async(item)=>{
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/favourite/${item.id}`).then(response=>{

        }).catch(error=>alert(error.message))
        axios.get(`${process.env.REACT_APP_SERVER_URL}/favourite`).then(response=>{
            this.setState({
              favData:response.data
            })
        }).catch(error=>alert(error.message)) 
      }
  
  showUpdateForm=(item)=>{
      this.setState({
          choosenToUpdate:item,
          showForm:!this.state.showForm
      })

  }


updateData= async (e)=>{
    e.preventDefault()
const id=this.state.choosenToUpdate.id
const reqBody={
    name:e.target.name.value,
    img:e.target.img.value
}
await axios.put(`${process.env.REACT_APP_SERVER_URL}/favourite/${id}`,reqBody).then(response=>{
    this.setState({
        showForm:false
    })
        }).catch(error=>alert(error.message))
        axios.get(`${process.env.REACT_APP_SERVER_URL}/favourite`).then(response=>{
            this.setState({
                favData:response.data  
    })
}).catch(error=>alert(error.message))
  }

    render() {
        return (
            <div>
{
    this.state.showForm&&
    <UpdateForm
    item={this.state.choosenToUpdate}
    updateData={this.updateData}
 
    
    
    />
}


        {
            this.state.favData&&
            <CardGroup>
{
    this.state.favData.map((value,idx)=>{
        return(
            <FavouriteCard
            key={idx}
            name={value.name}
            id={value.id}
            img={value.img}
            deletefavs={this.deletefavs} 
            showUpdateForm={this.showUpdateForm}
            
            />
        )
    }
    )
}


            </CardGroup>
        }
            </div>
        )
    }
}

export default Favourite
