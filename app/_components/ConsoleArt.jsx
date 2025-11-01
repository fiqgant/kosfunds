"use client";

import { useEffect } from "react";

export default function ConsoleArt() {
  useEffect(() => {
    const asciiArt = `
╔══════════════════════════════════════╗
║  ██╗    ██╗██████╗ ██╗██╗ ██████╗   ║
║  ██║    ██║██╔══██╗██║██║██╔════╝   ║
║  ██║ █╗ ██║██████╔╝██║██║██║        ║
║  ██║███╗██║██╔══██╗██║██║██║        ║
║  ╚███╔███╔╝██████╔╝██║██║╚██████╗   ║
║   ╚══╝╚══╝ ╚═════╝ ╚═╝╚═╝ ╚═════╝   ║
║                                      ║
║  Brought to you by the legends at    ║
║  Kosfunds and WBIIC.                 ║
╚══════════════════════════════════════╝
`;
    
    console.log(asciiArt);
    console.log("%cBrought to you by the legends at Kosfunds and WBIIC.", 
      "font-size: 14px; font-weight: bold; color: #3b82f6;"
    );
  }, []);

  return null;
}

