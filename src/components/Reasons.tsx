import { motion } from 'framer-motion';

interface ReasonsProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Reasons({ onNext, onBack }: ReasonsProps) {
  
  // Animación para que los cuadros aparezcan uno por uno
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#ffebf0] text-[#590d22] p-4 flex flex-col font-serif w-full max-w-md mx-auto shadow-2xl overflow-hidden relative border-x-4 border-white/50">
      
      {/* --- HEADER (Agregado) --- */}
      <div className="border-b-2 border-[#590d22] pb-1 mb-4 flex justify-between text-[8px] sm:text-[10px] tracking-widest uppercase font-bold opacity-80 mt-2">
        <span>Edición Especial</span>
        <span>Febrero 2026</span>
      </div>

      {/* --- TÍTULO CON CUPIDOS --- */}
      <div className="relative text-center mb-6">
         {/* Cupidos decorativos */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" 
          alt="Cupid" 
          className="absolute left-0 top-0 w-10 h-10 opacity-30 -scale-x-100 animate-pulse" 
        />
        <img 
          src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" 
          alt="Cupid" 
          className="absolute right-0 top-0 w-10 h-10 opacity-30 animate-pulse" 
        />

        {/* Texto del título */}
        <h2 className="text-4xl sm:text-5xl font-newspaper text-[#d00000] leading-none mb-1 drop-shadow-sm">
          05 Razones
        </h2>
        <p className="text-sm font-serif uppercase tracking-widest mb-0 opacity-80">por las que eres</p>
        <p className="font-handwriting text-4xl sm:text-5xl text-[#d00000] -rotate-2 mt-[-5px]">
          Mi elección Perfecta
        </p>
      </div>

      {/* --- GRID 3x3 (Checkerboard) --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-2 auto-rows-auto mb-6 flex-1"
      >
        
        {/* FILA 1 */}
        {/* [1] Texto */}
        <motion.div variants={itemVariants} className="bg-white p-2 flex flex-col justify-center items-center text-center border border-rose-100 shadow-sm aspect-square relative rounded-sm">
          <span className="font-newspaper text-3xl text-[#d00000] absolute top-1 left-2">1</span>
          <p className="text-[9px] sm:text-[10px] leading-tight mt-4">Tienes la sonrisa más linda del universo.</p>
        </motion.div>

        {/* Corazón */}
        <motion.div variants={itemVariants} className="flex justify-center items-center aspect-square">
          <span className="text-4xl text-[#ff4d6d] drop-shadow-sm animate-pulse">❤</span>
        </motion.div>

        {/* [3] Texto */}
        <motion.div variants={itemVariants} className="bg-white p-2 flex flex-col justify-center items-center text-center border border-rose-100 shadow-sm aspect-square relative rounded-sm">
          <span className="font-newspaper text-3xl text-[#d00000] absolute top-1 left-2">3</span>
          <p className="text-[9px] sm:text-[10px] leading-tight mt-4">Contigo, cualquier día se siente especial.</p>
        </motion.div>


        {/* FILA 2 */}
        {/* Corazón */}
        <motion.div variants={itemVariants} className="flex justify-center items-center aspect-square">
          <span className="text-4xl text-[#ff4d6d] drop-shadow-sm animate-pulse">❤</span>
        </motion.div>

        {/* [2] Texto Centro (Destacado) */}
        <motion.div variants={itemVariants} className="bg-white p-2 flex flex-col justify-center items-center text-center border-2 border-[#d00000] shadow-md aspect-square relative z-10 transform scale-105 rounded-sm">
          <span className="font-newspaper text-3xl text-[#d00000] absolute top-1 left-2">2</span>
          <p className="text-[9px] sm:text-[10px] leading-tight mt-4 font-bold">Haces que mi corazón lata más rápido.</p>
        </motion.div>

        {/* Corazón */}
        <motion.div variants={itemVariants} className="flex justify-center items-center aspect-square">
           <span className="text-4xl text-[#ff4d6d] drop-shadow-sm animate-pulse">❤</span>
        </motion.div>


        {/* FILA 3 */}
        {/* [4] Texto */}
        <motion.div variants={itemVariants} className="bg-white p-2 flex flex-col justify-center items-center text-center border border-rose-100 shadow-sm aspect-square relative rounded-sm">
          <span className="font-newspaper text-3xl text-[#d00000] absolute top-1 left-2">4</span>
          <p className="text-[9px] sm:text-[10px] leading-tight mt-4">Eres mi persona favorita para todo.</p>
        </motion.div>

        {/* Corazón */}
        <motion.div variants={itemVariants} className="flex justify-center items-center aspect-square">
          <span className="text-4xl text-[#ff4d6d] drop-shadow-sm animate-pulse">❤</span>
        </motion.div>

         {/* [5] Texto */}
         <motion.div variants={itemVariants} className="bg-white p-2 flex flex-col justify-center items-center text-center border border-rose-100 shadow-sm aspect-square relative rounded-sm">
          <span className="font-newspaper text-3xl text-[#d00000] absolute top-1 left-2">5</span>
          <p className="text-[9px] sm:text-[10px] leading-tight mt-4">No imagino a nadie más a mi lado este 14F.</p>
        </motion.div>
      </motion.div>

      {/* --- FOOTER: SEÑALES --- */}
      <div className="mt-2 mb-6">
        <div className="text-center mb-2">
            <p className="text-[8px] uppercase tracking-widest text-[#590d22] opacity-80">Señales de que</p>
            <h3 className="font-newspaper text-2xl text-[#d00000]">Debes decir "Sí"</h3>
        </div>
        
        <div className="flex gap-2 justify-center text-white">
          <div className="bg-[#d00000] p-2 w-1/3 text-[8px] text-center shadow-sm flex items-center justify-center rounded-sm">
            Si estás leyendo esto, significa que el destino nos ha unido.
          </div>
          <div className="bg-[#d00000] p-2 w-1/3 text-[8px] text-center shadow-sm flex items-center justify-center border-x border-white/20 rounded-sm">
            Si has sonreído al menos una vez, es una señal obvia.
          </div>
          <div className="bg-[#d00000] p-2 w-1/3 text-[8px] text-center shadow-sm flex items-center justify-center rounded-sm">
            Si te gusta el romance, somos un match perfecto.
          </div>
        </div>
      </div>

      {/* --- BOTONES NAVEGACIÓN --- */}
      <div className="flex gap-4 pt-2 border-t border-[#f5c0c0]">
        <button 
            onClick={onBack}
            className="flex-1 bg-white border border-[#d00000] text-[#d00000] py-2 rounded-full font-bold shadow-sm text-xs uppercase hover:bg-rose-50 transition-colors"
        >
            ← Anterior
        </button>
        <button 
            onClick={onNext}
            className="flex-1 bg-[#d00000] text-white py-2 rounded-full font-bold shadow-md text-xs uppercase hover:bg-[#a00000] transition-colors"
        >
            Siguiente página→
        </button>
      </div>

    </div>
  );
}