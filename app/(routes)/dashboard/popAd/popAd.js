import React, { useEffect } from 'react';

const PopAd = () => {
  useEffect(() => {
    // Membuat elemen script untuk pop-up ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl25520742.profitablecpmrate.com/1d/37/a4/1d37a47df5c490cd61796933d85a11f7.js';

    // Menambahkan script ke dalam body
    document.body.appendChild(script);

    // Membersihkan script ketika komponen dilepas
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array berarti useEffect hanya dijalankan sekali saat komponen pertama kali dimuat

  return null; // Tidak perlu ada elemen tambahan karena iklan pop-up akan ditangani oleh script eksternal
};

export default PopAd;
