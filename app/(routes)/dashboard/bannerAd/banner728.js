import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'be4371a1c39bbf49d28822fc12ef0e32',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'margin-bottom' : '20px',
        'params' : {}
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/be4371a1c39bbf49d28822fc12ef0e32/invoke.js";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div
      id="ad-container"
      style={{
        width: "728px",
        height: "90px",
        marginLeft: "auto",   // Menempatkan banner di kanan
        marginRight: "0",     // Memastikan margin kanan tidak ada
      }}
    ></div>
  );
};

export default Banner;
