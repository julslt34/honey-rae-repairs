import { useEffect, useState } from "react"
import "./Customers.css"
import { Customer } from "./Customer"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers?_expand=user")
            // fetch('http://localhost:8088/users?isStaff=false')   
            .then(response => response.json())
                // .then(setCustomers)
             .then((customerArray) =>{
                setCustomers(customerArray)
             })  
            },
        [])
    
    

        return (
            <>
            <div className = "customers">
                <h1>Customers</h1>
            {
             customers.map(customer =>{
                return (<Customer key= {customer.id} customerObject={customer}/>)
            })
        }
            </div>
            </>
        )
           
        }        


 



