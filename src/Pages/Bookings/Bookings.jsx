import { useContext, useEffect, useState } from "react";

import BookingRow from "./BookingRow";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import 'animate.css';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
       
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);

    const handleDeletd = id =>{
        const proceed  =confirm('are you sure ??')
        if(proceed){
    
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
     .then(data =>{
        
        console.log(data)
        if(data.deletedCount > 0) {
           
            Swal.fire({
                title: 'Successfully deleted',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }

              })
              const remaining  =bookings.filter(booking => bookings._id !==id );
              setBookings(remaining)
        }
      

     }) 
 }
      
     }
   const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
            "content-type" : "application/json"

        },
        body: JSON.stringify({status : "confirm"})
    })
    .then(res => res.json())
    .then(data  => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
 


            const remaining = bookings.filter(booking => bookings._id !== id);
            const updated =bookings.find(booking => bookings._id === id);
            updated.status = 'confirm'
            const newBooking = [updated , ...remaining];
            setBookings(newBooking)
        }
    })
   }
   

    return (
                <div>
                    <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
                    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <th >Image</th>
                <th>Service </th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
       
        {
            
            bookings.map(booking => <BookingRow key={booking._id} booking={booking}
                  handleDeletd={handleDeletd}
                  handleBookingConfirm={handleBookingConfirm}
                  >
                  </BookingRow>)

        }  
          
            </tbody>
        </table>
        </div>
                
                </div>
    );
};

export default Bookings;