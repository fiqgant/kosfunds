// app/routes/dashboard/googleAd/GoogleAd.js
"use client";
import React, { useEffect } from "react";

const GoogleAd = () => {
  useEffect(() => {
    // Memuat script Google AdSense
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5118934379581151";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Membersihkan script ketika komponen dilepas
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Tempatkan iklan di sini */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5118934379581151"
        data-ad-slot="1234567890" // Ganti dengan slot iklan Anda
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};

export default GoogleAd;