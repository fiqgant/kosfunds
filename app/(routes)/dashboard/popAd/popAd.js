// import React, { useEffect } from 'react';

// const PopAd = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = '//pl25520742.effectiveratecpm.com/1d/37/a4/1d37a47df5c490cd61796933d85a11f7.js';
//     script.async = true;

//     script.onload = () => console.log("Script iklan berhasil dimuat.");
//     script.onerror = () => console.error("Gagal memuat skrip iklan.");

//     document.body.appendChild(script);

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   return null;
// };

// export default PopAd;
