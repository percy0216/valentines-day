import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface ClosingProps {
  onRestart: () => void;
}

export default function Closing({ onRestart }: ClosingProps) {
  // 0: Carta afuera -> 1: Carta entra -> 2: Sobre cierra -> 3: Final
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStep(1), 1000), // 1s: Entra carta
      setTimeout(() => setAnimationStep(2), 2500), // 2.5s: Cierra sobre
      setTimeout(() => {
        setAnimationStep(3); // 3.2s: Texto final y confeti
        triggerConfetti();
      }, 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#d00000', '#ff4d6d', '#ffffff'] });
      confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#d00000', '#ff4d6d', '#ffffff'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <div className="min-h-screen bg-[#ffebf0] text-[#590d22] p-4 flex flex-col font-serif w-full max-w-md mx-auto shadow-2xl overflow-hidden relative border-x-4 border-white/50">
      
      {/* --- HEADER --- */}
      <div className="border-b-2 border-[#590d22] pb-1 mb-4 flex justify-between text-[8px] sm:text-[10px] tracking-widest uppercase font-bold opacity-80 mt-2">
        <span>Edición Especial</span>
        <span>Febrero 2026</span>
      </div>

      {/* --- DECORACIÓN --- */}
      <img src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" alt="Cupid" className="absolute left-2 top-10 w-12 h-12 opacity-30 -scale-x-100 animate-bounce duration-[3000ms]" />
      <img src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" alt="Cupid" className="absolute right-2 top-10 w-12 h-12 opacity-30 animate-bounce duration-[3000ms]" />

      {/* --- CONTENIDO CENTRAL --- */}
      <div className="flex-1 flex flex-col items-center justify-center pb-4">
          
          {/* TÍTULO FINAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationStep >= 3 ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-50 text-center mb-2"
          >
            <h1 className="font-newspaper text-4xl sm:text-5xl text-[#d00000] mb-2 drop-shadow-sm leading-tight">
              ¡Confirmado!
            </h1>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#d00000] mt-1">
              Eres mi San Valentín.
            </p>
          </motion.div>

          {/* GIF OSITOS */}
          <motion.img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1leTgzNTgwNXB1Y2x4MHR4dGJrcjEyZG40dmxwZGNxYm8zcDAxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4Ki4biBSwhjyrS48/giphy.gif"
              alt="Cute bears hugging"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-lg rounded-full border-4 border-white/50 z-50 my-4"
              initial={{ scale: 0, opacity: 0 }}
              animate={animationStep >= 3 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", delay: 0.1 }}
          />

          {/* --- SOBRE ANIMADO --- */}
          <div className="relative w-72 h-56 sm:w-80 sm:h-64 mb-6 flex-shrink-0">
            
            {/* 1. Fondo del sobre (Interior) - Z-0 */}
            <div className="absolute inset-0 bg-[#ffb7c5] rounded-lg shadow-lg z-0" />
            
            {/* 2. CARTA (Ahora Z-20 para estar delante de la tapa abierta pero detrás del bolsillo) */}
            <motion.div
              className="absolute left-2 right-2 top-2 bottom-2 bg-[#fffdf9] p-4 rounded-sm shadow-sm flex flex-col items-center justify-center text-center border border-[#ffc5d3] z-20"
              initial={{ y: -250 }}
              animate={animationStep >= 1 ? { y: 0 } : { y: -250 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              <p className="font-handwriting text-3xl text-[#d00000] mb-2">¡Siiii!</p>
              <p className="font-serif text-[#590d22] text-[10px] uppercase tracking-widest">Reserva Confirmada</p>
              <div className="mt-2 w-full h-px bg-[#ffc5d3]"></div>
              <p className="text-[9px] text-[#590d22] opacity-60 mt-2">Ticket #140226</p>
            </motion.div>

            {/* 3. BOLSILLO (Solapas laterales y abajo) - Z-30 (Tapan la carta al entrar) */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[115px] sm:border-t-[130px] border-t-transparent border-l-[150px] sm:border-l-[165px] border-l-[#ffc5d3] border-b-[115px] sm:border-b-[130px] border-b-[#ffc5d3] rounded-bl-lg z-30" />
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[115px] sm:border-t-[130px] border-t-transparent border-r-[150px] sm:border-r-[165px] border-r-[#ffced9] border-b-[115px] sm:border-b-[130px] border-b-[#ffced9] rounded-br-lg z-30" />

            {/* 4. TAPA SUPERIOR (Móvil) */}
            {/* Z-Index cambia: 10 cuando está abierta (detrás de la carta), 40 cuando cierra (tapa todo) */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-0 border-l-[144px] sm:border-l-[160px] border-l-transparent border-r-[144px] sm:border-r-[160px] border-r-transparent border-t-[120px] sm:border-t-[140px] border-t-[#ff9eb5] origin-top" 
                initial={{ rotateX: 180, zIndex: 10 }} 
                animate={animationStep >= 2 ? { rotateX: 0, zIndex: 40 } : { rotateX: 180, zIndex: 10 }} 
                transition={{ duration: 0.6 }} 
            />
            
            {/* 5. CORAZÓN DE CIERRE - Z-50 */}
            <motion.div className="absolute top-[110px] sm:top-[130px] left-1/2 z-50" style={{ x: "-50%", y: "-50%" }} initial={{ scale: 0 }} animate={animationStep >= 2 ? { scale: [0, 1.2, 1] } : { scale: 0 }} transition={{ delay: 0.6 }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="#d00000" className="drop-shadow-md filter saturate-150"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </motion.div>
          </div>

          {/* TEXTO INFERIOR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationStep >= 3 ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="z-50 text-center mb-6 max-w-xs px-4 font-serif text-[#590d22] text-sm leading-relaxed"
          >
            <p>Gracias por decir que sí.<br/>Prepárate para un día bonito,<br/>sonrisas inevitables y recuerdos.</p>
          </motion.div>
      </div>

      {/* --- BOTÓN REINICIAR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={animationStep >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-auto pt-4 border-t border-[#f5c0c0] w-full"
      >
          <button
            onClick={onRestart}
            className="w-full bg-white border border-[#d00000] text-[#d00000] py-3 rounded-full font-bold shadow-sm text-xs sm:text-sm uppercase tracking-wider hover:bg-rose-50 transition-colors mb-2"
          >
            ↻ Ver otra vez
          </button>
      </motion.div>

    </div>
  );
}