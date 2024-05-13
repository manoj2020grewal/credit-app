import { useCallback } from "react";
import useRazorpay from "react-razorpay";

export default function Payment() {
  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(async () => {

    const RazorpayOptions = {
      key: "rzp_test_Uz15uwC9Vt8izX",
      amount: "3000",
      currency: "INR",
      name: "Insta Pay Cash",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: 'order_OA2NQmfX7lRaBf',
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(RazorpayOptions);
    rzpay.open();
    
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Click to pay</button>
    </div>
  );
}