import React from 'react';
import "./form.css"
import axios from 'axios';
const Productdisplay = (props) => {
    const deletes = (id) => {
        axios.delete(`http://localhost:3000/array/${id}`).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (<div className='product'>
        <div className="conatiner">
            {
                props.all.map((ele) => {
                    return (
                        <div className="div">
                        <div className="imgbox">
                            <img src={ele.image} alt="" />
                        </div>
                        <p style={{marginTop:"1.5vh"}}>Title : {ele.title}</p>
                        <p>Price : {ele.price} ₹</p>
                        <p>Category : {ele.category}</p>
                            <p>Gender: {ele.gender}</p>
                            <button className='delete' onClick={() => {
                                console.log(ele.id)
                               let a =  props.all.filter((el) => {
                                   return ele.id != el.id
                               })
                                console.log(a)
                                props.setall(a)
                               deletes(ele.id)
                            }}>Delete</button>
                    </div>
                  )
                })
          }
        </div>
        <button className='prev' onClick={() => {
            props.setpage(-1)
        }} disabled={props.page == 1}>preview</button>
        <button className='nxt' onClick={() => {
            props.setpage(1)
        }} disabled={props.page == 2}>Next</button>
    </div>);
}
 
export default Productdisplay;