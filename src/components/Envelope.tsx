import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

// --- COMPONENTE AUXILIAR: CORAZÓN FLOTANTE ---
// Genera un corazón con parámetros aleatorios para que se vea natural
const FloatingHeart = ({  }: { index: number }) => {
  // Usamos useMemo para que los valores aleatorios se calculen una sola vez y no en cada render
  const randomValues = useMemo(() => {
    const random = (min: number, max: number) => Math.random() * (max - min) + min;
    return {
        // Posición horizontal aleatoria (0 a 100% del ancho)
        x: random(0, 100), 
        // Tamaño aleatorio (pequeño a mediano)
        scale: random(0.3, 0.8), 
        // Duración de la animación (lenta, entre 15 y 30 segundos)
        duration: random(15, 30), 
        // Retraso inicial negativo para que ya haya corazones en pantalla al cargar
        delay: random(-30, 0), 
        // Variación sutil de color rosado
        color: ['#ffc5d3', '#ffa3b5', '#ffcbd7'][Math.floor(random(0, 3))]
    };
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ color: randomValues.color }}
      initial={{ 
        x: `${randomValues.x}vw`, 
        y: "110vh", // Empieza debajo de la pantalla
        scale: randomValues.scale,
        opacity: 0
      }}
      animate={{ 
        y: "-10vh", // Termina arriba de la pantalla
        opacity: [0, 0.4, 0] // Aparece y desaparece suavemente
      }}
      transition={{ 
        duration: randomValues.duration, 
        repeat: Infinity, // Bucle infinito
        ease: "linear", // Velocidad constante
        delay: randomValues.delay 
      }}
    >
      {/* SVG de corazón simple */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </motion.div>
  );
};


// --- COMPONENTE PRINCIPAL: ENVELOPE ---
interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Creamos un array de 20 elementos para generar los corazones de fondo
  const heartsArray = [...Array(20)].map((_, i) => i);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff0f3] w-full overflow-hidden relative">
      
      {/* --- NUEVO: CAPA DE FONDO ANIMADO --- */}
      <div className="absolute inset-0 overflow-hidden z-0">
          {heartsArray.map(index => (
             <FloatingHeart key={index} index={index} />
          ))}
      </div>

      {/* Capa de textura sutil (puntos) - Encima del animado para dar textura */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffb3c1 2px, transparent 2px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      {/* Texto superior */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="z-50 text-rose-800 text-lg font-serif mb-10 tracking-widest"
      >
        TIENES UNA SORPRESA
      </motion.div>

      {/* --- CONTENEDOR DEL SOBRE --- */}
      <div className="relative w-72 h-56 sm:w-80 sm:h-64 cursor-pointer z-10" onClick={handleOpen}>
        
        {/* A. INTERIOR DEL SOBRE */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#ffb7c5] rounded-lg shadow-xl -z-10" />

        {/* PAPELES APILADOS DE FONDO */}
        <div className="absolute left-4 right-4 bottom-4 h-48 bg-[#fffdf9] border border-gray-100 shadow-sm rotate-2 z-0 rounded-sm opacity-80"></div>
        <div className="absolute left-3 right-3 bottom-3 h-48 bg-[#fffdf9] border border-gray-100 shadow-sm -rotate-1 z-0 rounded-sm opacity-90"></div>

        {/* B. CARTA PRINCIPAL (La que sale) */}
        <motion.div
          className="absolute left-2 right-2 bottom-2 h-52 bg-[#fffdf9] p-4 rounded-sm shadow-md flex flex-col items-center justify-start pt-8 text-center border border-gray-100"
          initial={{ y: 0, rotate: 0 }}
          animate={isOpen ? { y: -220, zIndex: 30, rotate: -2 } : { y: 0, zIndex: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <p className="font-newspaper text-xl text-gray-700 mb-2">Estas lista?</p>
          <p className="font-serif text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed">
            Preparate para descubrirla<br/> en tu día especial
          </p>
        </motion.div>

        {/* C. SOLAPAS LATERALES */}
        <div className="absolute top-0 left-0 w-0 h-0 
          border-t-[112px] sm:border-t-[128px] border-t-transparent 
          border-l-[144px] sm:border-l-[160px] border-l-[#ffc5d3] 
          border-b-[112px] sm:border-b-[128px] border-b-[#ffc5d3] 
          rounded-bl-lg z-20" />
        
        <div className="absolute top-0 right-0 w-0 h-0 
          border-t-[112px] sm:border-t-[128px] border-t-transparent 
          border-r-[144px] sm:border-r-[160px] border-r-[#ffced9] 
          border-b-[112px] sm:border-b-[128px] border-b-[#ffced9] 
          rounded-br-lg z-20" />

        {/* D. DECORACIONES */}
        <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.3 }} className="z-30 relative h-full w-full">
            <div className="absolute bottom-6 left-6 font-handwriting text-[#a34d65] text-xl -rotate-2">
                <span className="text-[10px] font-serif block opacity-70">De:</span> Samir
                <div className="h-[1px] w-full bg-[#a34d65] opacity-50 mt-[-2px]"></div>
            </div>
            <div className="absolute bottom-6 right-16 font-handwriting text-[#a34d65] text-xl rotate-1">
                <span className="text-[10px] font-serif block opacity-70">Para:</span> Ariana 
                <div className="h-[1px] w-full bg-[#a34d65] opacity-50 mt-[-2px]"></div>
            </div>
             <div className="absolute bottom-16 right-4 opacity-40 border-2 border-[#a34d65] rounded-full w-16 h-16 flex items-center justify-center rotate-12 pointer-events-none">
                <div className="text-[8px] text-[#a34d65] text-center font-bold uppercase leading-tight">Postal<br/>Service<br/>14.02</div>
            </div>
             <div className="absolute bottom-16 left-4 opacity-30 pointer-events-none">
                 <svg width="40" height="20" viewBox="0 0 40 20">
                    <path d="M0,10 Q5,0 10,10 T20,10 T30,10 T40,10" fill="none" stroke="#a34d65" strokeWidth="2" />
                    <path d="M0,15 Q5,5 10,15 T20,15 T30,15 T40,15" fill="none" stroke="#a34d65" strokeWidth="2" />
                 </svg>
            </div>
        </motion.div>

        {/* E. SOLAPA SUPERIOR */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0 
            border-l-[144px] sm:border-l-[160px] border-l-transparent 
            border-r-[144px] sm:border-r-[160px] border-r-transparent 
            border-t-[120px] sm:border-t-[140px] border-t-[#ff9eb5] origin-top drop-shadow-sm"
          initial={{ rotateX: 0, zIndex: 40 }}
          animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* F. CORAZÓN (Botón) */}
        <motion.div
          className="absolute top-[110px] sm:top-[130px] left-1/2 z-50 cursor-pointer"
          style={{ x: "-50%", y: "-50%" }}
          animate={isOpen ? { scale: 0, opacity: 0 } : { scale: [1, 1.1, 1] }}
          transition={isOpen ? { duration: 0.2 } : { repeat: Infinity, duration: 1.5 }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="#ff4d6d" className="drop-shadow-md filter saturate-150">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      </div>
      
      {/* Texto ayuda */}
      <motion.p className="mt-24 text-[#ff8fab] text-xs uppercase tracking-widest" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }}>(Toca el corazón para abrir)</motion.p>
    </div>
  );
}