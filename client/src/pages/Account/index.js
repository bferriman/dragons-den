import React, { useState, useEffect } from "react";
import userAPI from "../../utils/userAPI";
import { isAuthenticated } from "../../utils/auth";
import "./style.css";

function Account() {
  const {
    user: { name, email },
  } = isAuthenticated();

  const { user, token } = isAuthenticated();

  const [orders, setOrders] = useState([]);

  const loadOrderHistory = () => {
    userAPI.getPurchaseHistory(user._id, token).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setOrders(res.data);
      }
    });
  };

  useEffect(() => {
    loadOrderHistory();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="theme-border">
              <h4 className="title is-4">User Information</h4>
              <ul>
                <li>
                  <span className="icon">
                    <i className="fas fa-user"></i>&nbsp;
                  </span>
                  {name}
                </li>
                <li>
                  <span className="icon">
                    <i className="fas fa-envelope"></i>&nbsp;
                  </span>
                  {email}
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="theme-border">
              <h4 className="title is-4">Order History</h4>
              {orders.map((order) => (
                <div key={order._id}>
                  <hr />
                  <p>Order #: {order._id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
