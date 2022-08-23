import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../employees/EmployeeList"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"
// import { EmployeeDetails } from "../employees/EmployeeDetails"
import { Profile } from "../profile/Profile"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

               <Route path="profile" element={ <Profile/>}  />
               <Route path="tickets" element={ <TicketContainer />}  />
               <Route path="employees" element={ <EmployeeList />}  />
               <Route path="customers/:customerId" element={ <CustomerDetails />}  />
               <Route path="customers" element={ <CustomerList />}  />                  
            </Route>
        </Routes>
    )
}