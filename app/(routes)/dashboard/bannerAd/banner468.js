// app/routes/dashboard/bannerAd/banner468.js
"use client";
import React, { useEffect } from "react";

const Banner468 = () => {
  useEffect(() => {
    // Membuat elemen script untuk banner ad
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/c5e6946452099416adc2cb52f1ceb5f3/invoke.js";

    // Menambahkan script ke dalam body
    document.body.appendChild(script);

    // Membersihkan script ketika komponen dilepas
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array berarti useEffect hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <div>
      <script type="text/javascript">
        {`
          atOptions = {
            'key' : 'c5e6946452099416adc2cb52f1ceb5f3',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
          };
        `}
      </script>
      <div id="container-c5e6946452099416adc2cb52f1ceb5f3"></div>
    </div>
  );
};

export default Banner468;