import page_background from "@/assets/primitive_bg.webp";
import hc_flag from "@/assets/hc-flag-white.svg";
import { useState } from "react";
const PageHome = () => {
  const [email,setEmail] = useState("");

  function rsvp_handler(email: string) {
    if (!email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }
    if (!email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }
    alert(`RSVP for email ${email}`)
  }
  return (
    <div
      className="flex min-h-full w-full justify-center bg-cover bg-center p-3 sm:p-4"
      style={{ backgroundImage: `url(${page_background})` }}
    >
      <div className="items-center text-center absolute w-20 flex gap-4">
        <img src={hc_flag} alt="Hack Club flag transparent white" />
      </div>
      <div className="flex flex-col pt-20 sm:pt-28 md:pt-36 lg:pt-40 text-center text-[#ffffff] text-shadow-md">
        <span className="pb-4 text-base opacity-80 sm:pb-5 sm:text-lg md:text-xl">RSVP form available</span>
        <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Learn from a friend and get rewards!
        </h1>
        <div className="mt-4 flex rounded bg-accent/50 p-2 text-black sm:mt-5">
          <input
            placeholder="name@email.com"
            className="flex-1 text-base outline-none placeholder:text-black placeholder:text-base sm:text-lg sm:placeholder:text-lg md:text-xl md:placeholder:text-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className="border-2 border-black p-2 text-base font-bold hover:cursor-pointer sm:text-lg md:text-xl"
            onClick={() => rsvp_handler(email)}
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
