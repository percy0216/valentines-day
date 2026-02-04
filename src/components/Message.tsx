import { motion } from 'framer-motion';

interface MessageProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Message({ onNext, onBack }: MessageProps) {
  return (
    <div className="min-h-screen bg-[#ffebf0] text-[#590d22] p-4 flex flex-col font-serif w-full max-w-md mx-auto shadow-2xl overflow-hidden relative border-x-4 border-white/50">
      
      {/* HEADER */}
      <div className="border-b-2 border-[#590d22] pb-1 mb-6 flex justify-between text-[8px] sm:text-[10px] tracking-widest uppercase font-bold opacity-80 mt-2">
        <span>Edición Especial</span>
        <span>Febrero 2026</span>
      </div>

      {/* CUPIDOS */}
      <img src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" alt="Cupid" className="absolute left-2 top-10 w-12 h-12 opacity-30 -scale-x-100 animate-pulse" />
      <img src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" alt="Cupid" className="absolute right-2 top-10 w-12 h-12 opacity-30 animate-pulse" />

      {/* CONTENIDO */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 px-4 z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <h1 className="font-handwriting text-5xl sm:text-6xl text-[#d00000] -rotate-2 drop-shadow-sm mb-2">
            Una cosa más...
            </h1>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-sm shadow-md border border-rose-200 relative max-w-xs rotate-1"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
            <div className="absolute -top-3 left-1/2 -ml-3 w-6 h-6 bg-[#d00000] rounded-full border-4 border-[#ffebf0] shadow-sm z-20"></div>

            <p className="font-newspaper text-xl text-[#590d22] mb-4 leading-snug">
              Hay algo importante que quiero decirte:
            </p>
            
            <div className="w-full h-px bg-rose-100 mb-4"></div>

            <p className="font-serif text-lg text-[#d00000] italic leading-relaxed">
              "Hay un lugar y una fecha separada exclusivamente para nosotros dos."
            </p>

            <div className="mt-4 flex justify-center opacity-60">
                 <svg className="w-8 h-8 text-[#590d22]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
        </motion.div>
      </div>

      {/* --- BOTONES NAVEGACIÓN --- */}
      <motion.div 
        className="pb-4 w-full px-4 flex gap-4 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <button 
            onClick={onBack}
            className="flex-1 bg-white border border-[#d00000] text-[#d00000] py-3 rounded-full font-bold shadow-sm text-xs uppercase hover:bg-rose-50 transition-colors tracking-wider"
        >
            ← Anterior
        </button>
        
        <button 
            onClick={onNext}
            // CAMBIO AQUÍ: Texto más emocionante
            className="flex-1 bg-[#d00000] text-white py-3 rounded-full font-bold shadow-lg hover:bg-[#b00000] transition-transform hover:scale-105 uppercase tracking-wider text-xs sm:text-sm animate-bounce leading-tight"
        >
            Ahora sí... La pregunta más importante →
        </button>
      </motion.div>

    </div>
  );
}