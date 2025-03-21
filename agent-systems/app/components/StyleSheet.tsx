export default function StyleSheet() {
  return (
    <style jsx global>{`
      .neural-network {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(0,255,255,0.1) 1%, transparent 1%), radial-gradient(circle, rgba(0,255,255,0.1) 1%, transparent 1%);
        background-size: 3% 3%, 3% 3%;
        background-position: 0 0, 1.5% 1.5%;
        transform: translateZ(0) scale(1);
        pointer-events: none;
        z-index: 0;
      }
      .neural-network::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
        transform: translateZ(-1px) scale(2);
        z-index: 1;
      }
      h1, h2, h3, h4, p, a {
        font-family: 'Geistmono', monospace;
        color: white;
      }
      .text-gray-300 {
        color: white;
      }
      .text-gray-600 {
        color: white;
      }
      .bg-gradient-to-r {
        background: linear-gradient(to right, #00FFFF, #81E6D9);
      }
      .hover\\:from-blue-500:hover {
        background: #00B5D8;
      }
      .hover\\:to-teal-600:hover {
        background: #319795;
      }
      .glow-effect:hover {
        color: #00FFFF;
        text-shadow: 0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF;
      }
      .hexagon {
        clip-path: none;
        border-radius: 20px;
        background: black;
        border: 2px solid #00FFFF;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .hexagon:hover {
        transform: scale(1.05);
        box-shadow: 0 0 5px rgba(0,255,255,0.7), 0 0 15px rgba(0,255,255,0.6), 0 0 25px rgba(0,255,255,0.4);
        border-width: 2px;
      }
      .typewriter {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        border-right: 3px solid;
        animation: typing 6s steps(40, end), blink-caret 0.75s step-end infinite;
      }

      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }

      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white }
      }
      
      /* Animation für den Pfeil an der Spitze */
      @keyframes arrowGlow {
        0% { opacity: 0.7; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
      }

      .team-image-container {
        position: relative;
        width: 320px;
        height: 320px;
        margin-bottom: 1rem;
        overflow: hidden;
        background: black;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cpath d='M128 16L222 72V184L128 240L34 184V72L128 16Z' fill='black'/%3E%3C/svg%3E") center/contain;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cpath d='M128 16L222 72V184L128 240L34 184V72L128 16Z' fill='black'/%3E%3C/svg%3E") center/contain;
        transition: all 0.3s ease;
      }
      .team-image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: grayscale(100%) contrast(120%);
      }
      .team-image-container:hover {
        transform: scale(1.05);
      }
      .team-image-container:hover img {
        filter: grayscale(100%) contrast(120%);
      }
    `}</style>
  );
} 