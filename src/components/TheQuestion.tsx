import { motion } from 'framer-motion';

interface TheQuestionProps {
  onYes: () => void;
}

export default function TheQuestion({ onYes }: TheQuestionProps) {
  return (
    <div className="min-h-screen bg-[#ffebf0] text-[#590d22] p-4 flex flex-col font-serif w-full max-w-md mx-auto shadow-2xl overflow-hidden relative border-x-4 border-white/50">
      
      {/* --- HEADER --- */}
      <div className="border-b-2 border-[#590d22] pb-1 mb-4 flex justify-between text-[8px] sm:text-[10px] tracking-widest uppercase font-bold opacity-80 mt-2">
        <span>Edición Especial</span>
        <span>Febrero 2026</span>
      </div>

      {/* --- CUPIDOS DECORATIVOS --- */}
      <img 
        src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" 
        alt="Cupid" 
        className="absolute left-2 top-10 w-12 h-12 opacity-30 -scale-x-100 animate-bounce duration-[3000ms]" 
      />
      <img 
        src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" 
        alt="Cupid" 
        className="absolute right-2 top-10 w-12 h-12 opacity-30 animate-bounce duration-[3000ms]" 
      />

      {/* --- CONTENIDO CENTRAL --- */}
      <div className="flex flex-col items-center justify-center flex-1 z-10 text-center space-y-4">
        
        {/* Título */}
        <h1 className="font-newspaper text-4xl sm:text-5xl text-[#d00000] mb-2 drop-shadow-sm">
          La gran pregunta
        </h1>

        {/* Texto romántico */}
        <div className="text-[10px] sm:text-xs font-serif leading-relaxed opacity-90 px-6">
          <p>Después de analizar los hechos, recopilar datos</p>
          <p>y comprobar la química innegable entre nosotros...</p>
        </div>

        {/* --- GIF --- */}
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", stiffness: 260, damping: 20 }}
           className="my-2"
        >
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHIwdzYwYmpqN285b2QxYXFsczZtcHgxdnYwczFhc21jNnV4d2MweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pGwSXMEguWSCmDNaxn/giphy.gif"
            alt="Cute bears hugging"
            className="w-32 h-32 object-contain drop-shadow-lg rounded-full border-4 border-white/50"
          />
        </motion.div>

        {/* Conectores */}
        <div className="space-y-1 text-[10px] sm:text-xs font-serif italic text-[#d00000]">
            <p>Así que ahora sí...</p>
            <p>con el corazón en la mano</p>
            <p>y una sonrisa nerviosa:</p>
        </div>

        {/* --- LA PREGUNTA --- */}
        <div className="my-6 relative">
             <h2 className="font-newspaper text-4xl text-[#590d22] relative z-10">
               ¿Quieres ser mi
             </h2>
             <h2 className="font-handwriting text-6xl sm:text-7xl text-[#d00000] relative z-20 -rotate-3 mt-[-10px] drop-shadow-sm">
               San Valentín?
             </h2>
        </div>

        <p className="text-[9px] uppercase tracking-widest mb-4">Elige tu respuesta:</p>

        {/* --- BOTONES (Ambos positivos) --- */}
        <div className="flex flex-col gap-3 w-full max-w-xs px-4 pb-8">
          
          {/* Botón 1 */}
          <motion.button
            onClick={onYes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#ffe5ec] border-2 border-[#d00000] text-[#d00000] font-bold py-3 px-6 rounded-full shadow-md text-xs sm:text-sm uppercase tracking-wider hover:bg-[#d00000] hover:text-white transition-colors"
          >
            ¡Sí! Por supuestoooo
          </motion.button>

          {/* Botón 2 (Antes era No, ahora es Sí) */}
          <motion.button
            onClick={onYes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // Le damos un estilo sólido para variar un poco, o igual al de arriba
            className="w-full bg-[#d00000] text-white border-2 border-[#d00000] font-bold py-3 px-6 rounded-full shadow-md text-xs sm:text-sm uppercase tracking-wider hover:bg-[#b00000] transition-colors"
          >
            ¡Sí! Lo estaba esperando 😍
          </motion.button>

        </div>

      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-10 text-2xl opacity-20 animate-pulse text-[#d00000]">✦</div>
      <div className="absolute bottom-20 right-10 text-xl opacity-20 animate-pulse delay-700 text-[#d00000]">✦</div>

    </div>
  );
}