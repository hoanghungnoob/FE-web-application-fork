import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMoMoPaymentSuccess = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const partnerCode = urlParams.get('partnerCode');
        const message = urlParams.get('message')
        const orderData = JSON.parse(sessionStorage.getItem('orderData'));
        if (!partnerCode && message!=='Successful.') {
          console.error('Partner and status code not found in URL');
          return;
        }
        if(message === 'Successful.'){
            const response = await axios.post(`http://localhost:8000/api/user/orders/momo`, 
                orderData
             );
             if(response){
                 sessionStorage.removeItem('orderData');
             }else{
                console.log("Error");
             }
        }
      } catch (error) {
        console.error('Error saving order:', error);
      }
    };

    handleMoMoPaymentSuccess();
  }, [navigate]);

  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
          <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
          <p> Have a great day!  </p>
          <div className="py-10 text-center">
            <button onClick={() => navigate('/menu')} className="rounded w-25 px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
              Continue Order
            </button><br /><br />
            <button onClick={() => navigate('/home')} className="rounded w-25 px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
