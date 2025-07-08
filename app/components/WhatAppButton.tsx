import { useState } from "react";

export default function WhatsAppButton() {
  const [clicked, setClicked] = useState(false);

  const phoneNumber = "2058084137";
  const message = "Hello Phouthasin, I would like to connect with you. ";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200); 
  };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button
        onClick={handleClick}
        className={`bg-green-400 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-transform duration-200 ease-in-out ${
          clicked ? "scale-110" : "scale-100"
        }`}
      >
        📱 WhatsApp
      </button>
    </a>
  );
}
