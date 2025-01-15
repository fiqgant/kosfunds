import React, { useEffect } from 'react';

const Ntvbn = () => {
  useEffect(() => {
    // Membuat elemen script untuk pop-up ad
    const script = document.createElement('script');
    script.async = 'async';
    script.src = '//pl25522851.profitablecpmrate.com/b9e5f084ecb5ba69e83ebb8671aec839/invoke.js';
    script.dataset.cfasync = 'false';

    // Menambahkan script ke dalam body
    document.body.appendChild(script);

    // Membersihkan script ketika komponen dilepas
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array berarti useEffect hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <div>
      <div id="container-b9e5f084ecb5ba69e83ebb8671aec839"></div>
    </div>
  );
};

export default Ntvbn;