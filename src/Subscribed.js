import React from "react";
import "./Subscribed.css";
const Subscribed = () => {
  return (
  <div className="bg">
    <div className="content">
      <h1>Subscription Details</h1>
      <table >
        <tr>
          <th>Years</th>
          <th>Issues</th>
          <th>Prices (INR)</th>
          <th>Discount</th>
          <th>Offer Price (INR)</th>
        </tr>
        <tr>
          <td>1</td>
          <td>4</td>
          <td>800</td>
          <td>100</td>
          <td>700</td>
        </tr>
        <tr>
          <td>2</td>
          <td>8</td>
          <td>1600</td>
          <td>300</td>
          <td>1300</td>
        </tr>
      </table><br/>
      <span>These prices include postage/courier charges. Discount not applicable.</span>
    </div>
    <div className="form animated flipInX">
      <h2>Subscription Form</h2>
      <form>
        <input placeholder="Name" type="text"></input>
        <input placeholder="Designation" type="text"></input>
        <input placeholder="Company Name" type="text"></input>
        <input placeholder="Address" type="text"></input>
        <input placeholder="Pin Code" type="text"></input>
        <input placeholder="Mobile No" type="text"></input>
        <input placeholder="Email-Id" type="text"></input>
        <input placeholder="Message" type="text"></input>
        <input type="radio" id="700" value="700"></input><label for="700">700/- INR Subscription for ONE YEAR</label>
        <input type="radio" id="1300"  value="1300"></input><label for="1300">1300/- INR Subscription for TWO YEAR</label>
        <button>Payment</button>
      </form>
    </div>
  </div>
  );
};
export default Subscribed ;