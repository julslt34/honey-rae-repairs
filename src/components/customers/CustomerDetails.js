import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = ({ customerObject}) => {  
    const [customerDetails, setCustomerDetails ] = useState({})

    const {customerId} = useParams()



    useEffect (
        () => {
            
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)           
            .then(response => response.json())
            .then((data) => {
                console.log("this is data", data)
                const singleCustomer = data[0]
                console.log(singleCustomer)
                console.log(customerId)
                setCustomerDetails(singleCustomer)
            })
        },
        []
    )

    return <section className="customer">
               <header className="customer__header"> {customerDetails?.user?.fullName}</header>
               <div>Phone: {customerDetails?.phoneNumber}</div>
                <div>Address: {customerDetails?.address}</div>
                <div>Email: {customerDetails?.user?.email}</div>
              
           
    </section>
    
    
}

//     useEffect(() => {
//         fetch("http://localhost:8088/customers?_expand=user")
//             .then(response => response.json())
//             .then(customerArray => setCustomerDetails(customerArray))
//     },
//    [])  

// return CustomerDetails.map((customerDetail => {
//     if (customerObject.id === customerDetail.userId) {
//         return (
//            <React.Fragment key={`customer--details${customerObject.id}`}>
       
//             <div>Address: {customerDetail.address}</div>
//             <div>Phone: {customerDetail.phoneNumber}</div>
//            </React.Fragment> 
//         )
//     }
//    }))

// }


