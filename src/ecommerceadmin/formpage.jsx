import React from 'react';
import "./form.css"
import axios from 'axios';
const Formpage = (props) => {
    const tem = {
        id: props.all.length,
        title: props.name,
        price: props.age,
        description: props.address,
        image: props.department,
        gender: props.salary,
        category:props.marital
    }
    return (<>
        <div className="formdiv">
            <h1>Fill  Details</h1>
            <input style={{marginTop:"7vh"}} placeholder="Fill Product Title" type="text" name="" id="name" value={props.name} onChange={(e) => {
                props.setname(e.target.value) 
            }} />
            <input type="text" placeholder="Fill Product Price" name="" id="age" value={props.age} onChange={(e) => {
                props.setage(e.target.value)
            }} />
            <textarea type="text" placeholder="Fill Product Description" name="" id="address" value={props.address} onChange={(e) => {
                props.setaddress(e.target.value)
            }} />
                      <input type="text" placeholder="Fill Image Url" name="" id="department" value={props.department} onChange={(e) => {
                props.setdepartment(e.target.value)
            }} />
              <input type="text" placeholder="Fill product Category" name="" id="department" value={props.marital} onChange={(e) => {
                props.setmarital(e.target.value)
            }} />
               
            <select name="" id="select" value={props.salary} onChange={(e) => {
                props.setsalary(e.target.value)
            }}>
                <option value="">Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
                   
            <button className='buttom' onClick={() => {
                props.setall(tem)
                



                props.setname("")
                props.setage("")
                props.setaddress("")
                props.setdepartment("")
                props.setsalary("")
                props.setmarital("")
                axios.post(`http://localhost:3000/array`, { 
                    id: props.all.length,
        title: props.name,
        price: props.age,
        description: props.address,
        image: props.department,
        gender: props.salary,
        category:props.marital
                 }).then(res => {
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })

            }}>Submit</button>
        </div>
    </>);
}
 
export default Formpage;