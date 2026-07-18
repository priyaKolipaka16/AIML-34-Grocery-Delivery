import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

function DeliveryBanner() {
  return (
    <div className="delivery-banner">

      <div className="delivery-left">
        <FaMapMarkerAlt className="delivery-icon"/>

        <div>
          <h3>Delivering to</h3>
          <p>Hyderabad, Telangana</p>
        </div>

      </div>

      <div className="delivery-right">
        <FaClock className="delivery-icon"/>
        <h2>Delivery in 11 Minutes ⚡</h2>
      </div>

    </div>
  );
}

export default DeliveryBanner;