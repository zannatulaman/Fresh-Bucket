/* eslint-disable react/prop-types */
import React from "react";
import { FaEdit } from "react-icons/fa";

const MyOrder = ({ uniqueOrders }) => {
  return (
    <>
      <div className="profile-information d-flex align-center justify-between mt-30">
        <h1>My Order</h1>
        <button className="secondary-btn">
          <FaEdit />
          Edit
        </button>
      </div>
      {/* <div className="orders-container">
        {uniqueOrders?.map((item) => (
          <div key={item.productId} className="order-card">
            <img
              src={item.productId.image}
              alt={item.productId.name}
              className="order-image"
            />

            <h1 className="order-title">{item.productId.name}</h1>

            <h2 className="order-email">{item.userId.email}</h2>

            <div className="order-details">
              <h3>
                Price: <span className="price">${item.price}</span>
              </h3>
              <h4>
                Qty: <span className="quantity">{item.quantity}</span>
              </h4>
            </div>
          </div>
        ))}
      </div> */}

      <section className="orders-section">
        {/* <h2>Your Orders</h2> */}
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              {/* <th>Attachment</th> */}
              {/* <th>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {uniqueOrders.map((item, index) => (
              <tr key={index}>
                <td>{item.productId.name}</td>
                <td>{item.userId.email}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>
                  <a href="#"></a>
                </td>
                <td className=""></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default MyOrder;
