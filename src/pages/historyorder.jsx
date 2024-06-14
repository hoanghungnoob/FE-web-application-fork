import React, { useEffect, useState } from "react";
import "../assets/css/historyorder.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Historyorder() {
  const [userOrder, setUserOrder] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const accountData = JSON.parse(sessionStorage.getItem("account"));
        const token = accountData ? accountData.token : null;
        if (token) {
          const decodedToken = jwtDecode(token);
          const userID = decodedToken.id;
          const response = await axios.get(
            `http://127.0.0.1:8000/api/user/orders/users/${userID}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const sortedOrders = response.data.sort(
            (a, b) => new Date(b.order_date) - new Date(a.order_date)
          );
          setUserOrder(sortedOrders);
        }
      } catch (err) {
        console.error("Error fetching cart data:", err);
        setError("Failed to fetch cart data.");
      }
    };

    fetchCart();
  }, []);

  const cancelOrder = async (orderId) => {
    try {
        await axios.put(
            `http://127.0.0.1:8000/api/user/orders/cancel/${orderId}`,
            { status: "cancelled" }
        );

        const updatedOrders = userOrder.map((order) =>
            order.id === orderId ? { ...order, status: "cancelled" } : order
        );
        setUserOrder(updatedOrders);
    } catch (err) {
        console.error("Error cancelling order:", err.response); // Log axios response for debugging
        setError("Failed to cancel order.");
    }
};


  
  console.log(userOrder);
  return (
    <>
      <h1 style={{margin:20}}>Order history</h1>
      {error && <div className="error">{error}</div>}
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th className="fw-bold">Order Number</th>
            <th className="fw-bold">Order date</th>
            <th className="fw-bold">Status</th>
            <th className="fw-bold">View</th>
            <th className="fw-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userOrder.map((order, index) => (
            <tr key={order.id}>
              <td>
                <div className="d-flex align-items-center">
                  <p>NO. #{index + 1}</p>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Buyer: {order.name}</p>
                    <p className="text-muted mb-0">Total price: $<span style={{color:"red"}}>{order.total_price}</span></p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">
                  Date: {`${new Date(order.order_date).toLocaleDateString()} ${new Date(order.order_date).toLocaleTimeString()}`}

                </p>
                <p className="text-muted mb-0">
                  Payment: {order.payment_method}
                </p>
              </td>
              <td><button className="btn btn-info btn-block">{order.status}</button></td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle btn-sm"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    View Detail
                  </button>
                  <ul
                    className="dropdown-menu history-detail bg-success"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                          <tr>
                            <th className="bg-warning fw-bold">Products Name</th>
                            <th className="bg-warning fw-bold">Quantity</th>
                            <th className="bg-warning fw-bold">Total price</th>
                            <th className="bg-warning fw-bold">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.orderItems.map((item) => (
                            <tr key={item.id}>
                              <td className="bg-warning">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={item.image_url}
                                    alt=""
                                    style={{ width: 60, height: 65 }}
                                    className="rounded-circle"
                                  />
                                  <div className="ms-3">
                                    <p className="fw-bold mb-1">{item.name}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="bg-warning">{item.quantity}</td>
                              <td className="bg-warning" style={{ color: 'red',fontWeight: 'bold' }}>$ {(item.sell_price * item.quantity).toFixed(2)}</td>
                              <td className="bg-warning">
                                <button
                                  type="button"
                                  className="btn btn-success btn-sm btn-rounded"
                                  onClick={() => navigate("/menu")}
                                >
                                  KEEP BUYING
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <button
                  type="button"
                  disabled={order.status === 'Pending' ? false : true}
                  className="btn btn-danger"
                  onClick={()=>cancelOrder(order.id)}
                >
                  Cancel order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Historyorder;
