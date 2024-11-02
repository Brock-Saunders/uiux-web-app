import phone from "../assets/phone.png";
import clock from "../assets/clock.png";
import pin from "../assets/pin.png";
import mail from "../assets/mail.png";

export default function ContactInformationRow() {
  return (
    <div className="grid grid-cols-5 w-full max-w-8xl pb-32 px-16 bg-beige text-gray-700 font-serif">
      <div className="flex items-center space-x-5 ">
        <img src={phone} className="w-5 h-5" />
        <div>+1 407 111 1111</div>
      </div>
      <div className="flex items-center space-x-5 col-span-2">
        <img src={pin} className="w-4 h-5" />
        <div>1650 Sand Lake Road, Suite 114-A Orlando Florida, 32809</div>
      </div>
      <div className="flex items-center space-x-5 ">
        <img src={mail} className="w-5 h-5" />
        <div>amal@laasellaw.com</div>
      </div>
      <div className="flex items-center space-x-5 ">
        <img src={clock} className="w-5 h-5" />
        <div>9AM - 5PM</div>
      </div>
    </div>
  );
}
