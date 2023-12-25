import React,{useState} from 'react'

function Paiment() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
  
    const handlePayment = () => {
      console.log('Payment processed!');
    };
  
    return (
      <div>
        <h2>Payment Information</h2>
        <form>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </label>
          <br />
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handlePayment}>
            Process Payment
          </button>
        </form>
      </div>
    );
}

export default Paiment