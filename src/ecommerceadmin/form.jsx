import React, { useEffect } from 'react';
import { useState } from 'react';
import Formnavbar from './formnavbar';
import Formpage from './formpage';
import Productdisplay from './Productdisplay';
import axios from 'axios';
//import Employeedetails from './formdetails';
const Form = () => {
    const [chage, setchange] = useState(0)
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [address,setaddress] = useState("")
    const [department, setdepartment] = useState("")
    const [salary, setsalary] = useState("")
    const [marital, setmarital] = useState("")
    const [all, setall] = useState([])
    console.log(all)
    useEffect(() => {
        axios.get(`http://localhost:3000/array`).then(res => {
           
            console.log(res.data)
            setall(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[setall])
    const namechange = (t) => {
        setname(t)
    }
        const agechange = (t) => {
        setage(t)
    }
        const addresschange = (t) => {
        setaddress(t)
    }
        const departmentchange = (t) => {
        setdepartment(t)
    }
        const salarychange = (t) => {
        setsalary(t)
    }
        const maritalchange = (t) => {
        setmarital(t)
    }
        const allchange = (t) => {
        setall([...all,t])
    }
          const refresh = (t) => {
        setall(t)
    }
    const chages = (t) => {
         setchange(t) 
    }
    console.log(chage)
    return (<div className='form'>
        <Formnavbar changes={chages} ></Formnavbar>
        {
            (chage == 0) ? <Formpage
                name={name}
                setname={namechange}
                age={age}
                setage={agechange}
                address={address}
                setaddress={addresschange}
                department={department}
                setdepartment={departmentchange}
                salary={salary}
                setsalary={salarychange}
                marital={marital}
                setmarital={maritalchange}
                all={all}
                setall={allchange}

                ></Formpage> : <Productdisplay  setall={refresh} all={all}></Productdisplay>
        }
        
    </div>);
}
 
export default Form;