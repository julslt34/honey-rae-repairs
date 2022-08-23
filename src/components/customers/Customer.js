import { useState } from "react"
import { Link } from "react-router-dom"

export const Customer = ({customerObject}) => {

    const [customerInfo, setCustomerInfo] = useState(false)

    const linkInfo = (customerInfo) => {
        if (customerInfo) {
            setCustomerInfo(false)
          } 
        else {
            setCustomerInfo(true)
        }
    }

return(
    <section className="customer" key={`customer--${customerObject.id}`}>
        <div onClick={() => linkInfo(customerInfo)}>
        {/* <div> Name: {customerObject.fullName}</div>  */}
        <Link className="navbar__link" to={`/customers/${customerObject.userId}`}>Name: {customerObject.user.fullName}</Link>
        {/* <div> Address: {customerObject.address}</div>
        <div> Phone: {customerObject.phoneNumber}</div> */}
        {/* {customerInfo ? <CustomerDetails customerObject={customerObject} /> : null} */}
        
        </div>
    </section>
    )
}
    