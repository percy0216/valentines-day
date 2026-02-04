import { motion } from 'framer-motion';

interface NewspaperProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Newspaper({ onNext, onBack }: NewspaperProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#ffebf0] text-[#590d22] p-4 flex flex-col font-serif w-full max-w-md mx-auto shadow-2xl overflow-hidden relative"
    >
      
      {/* --- HEADER --- */}
      {/* Barra superior con bordes limpios */}
      <div className="border-b-2 border-[#590d22] pb-1 mb-2 flex justify-between text-[8px] sm:text-[10px] tracking-widest uppercase font-bold">
        <span>Edición Especial</span>
        <span>Febrero 2026</span>
      </div>

      {/* TÍTULO PRINCIPAL (Gótico) */}
      <h1 className="font-newspaper text-5xl sm:text-6xl text-center text-[#d00000] leading-tight mb-2 tracking-tight">
        Valentine Edition
      </h1>

      {/* Barra inferior del título */}
      <div className="border-y border-[#590d22] py-1 mb-6 flex justify-between text-[7px] sm:text-[9px] uppercase font-bold tracking-wide">
          <span>14 de Febrero del 2026</span>
          <span>Me gustas mucho</span>
          <span>Juntos por Siempre</span>
      </div>

      {/* --- HERO SECTION (Cupidos y Título Romántico) --- */}
      <div className="relative mb-6 text-center h-32 flex items-center justify-center">
        
        {/* Cupido Izquierda (Decoración) */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" // Angelito esquemático
          alt="Cupid" 
          className="absolute left-0 top-0 w-12 h-12 opacity-50 -scale-x-100" // Espejo
        />
        
        {/* Cupido Derecha (Decoración) */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" 
          alt="Cupid" 
          className="absolute right-0 top-0 w-12 h-12 opacity-50" 
        />

        {/* Texto Hero */}
        <div className="z-10 mt-4">
           {/* 'Will you be my' en arco suave (simulado con transform) */}
           <p className="font-serif italic text-xl text-[#a4161a] mb-[-15px] relative z-20">
              Seras mi ... ?
           </p>
           
        </div>
      </div>

      {/* Subtítulo Distribución */}
      <div className="text-center mb-6">
         <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-bold text-[#590d22]">
           Distribución: Exclusiva para la persona más especial
         </p>
         <p className="font-handwriting text-2xl text-[#d00000] mt-1">Ariana </p>
      </div>

      {/* --- ARTÍCULO PRINCIPAL (Grid) --- */}
      <div className="grid grid-cols-2 gap-4 mb-4 items-start">
        
        {/* Columna Izquierda: Texto */}
        {/* Cabecera del artículo */}
        <div className="text-justify text-[10px] sm:text-[11px] leading-relaxed font-serif text-[#590d22]">
           {/* Línea decorativa del artículo */}
           <div className="border-b border-black/20 pb-1 mb-2 flex justify-between italic text-[9px] opacity-70">
              <span>Diario de amor</span>
              <span>San Valentin</span>
           </div>
           
           <p className="mb-2">
            <span className="float-left text-4xl text-[#d00000] font-newspaper mr-1 mt-[-6px] leading-none">D</span>
            espués de que el mundo hiciera su magia y los caminos se cruzaran,
            quedó claro algo: quiero vivir este 14 de febrero contigo. 
          </p>
          <p>
            Mi corazón —la única fuente confiable en estos temas— lo tiene claro desde hace tiempo.
            Quiero un San Valentín a tu lado, lleno de amor, risas sinceras y momentos que se queden
            para siempre.
          </p>
        </div>

        {/* Columna Derecha: Foto */}
        <div className="flex flex-col h-full">
          {/* Marco de foto */}
          <div className="border-2 border-[#d00000] p-1 bg-white shadow-sm mb-2 rotate-1">
             <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
               <img 
                 src="WhatsApp Image 2026-02-03 at 19.45.35.jpeg" 
                 alt="Pareja" 
                 className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" 
               />
               {/* Decoración dentro de la foto */}
               <div className="absolute top-2 right-2 text-white text-[8px]">♡</div>
             </div>
          </div>
          {/* Banner Negro Inferior */}
          <div className="bg-black text-white p-2 text-center text-[7px] sm:text-[8px] font-bold uppercase leading-tight tracking-wider shadow-md transform -rotate-1 mt-auto">
            ¿Aceptas la misión de<br/>ser mi San Valentín?
          </div>
        </div>
      </div>

      {/* --- LÍNEA DE CORTE --- */}
      <div className="flex items-center gap-2 mt-auto mb-4 opacity-50 text-[#d00000]">
        <span className="text-xl rotate-180">✂</span>
        <div className="h-px bg-[#d00000] border-t border-dashed border-[#d00000] w-full"></div>
        <span className="text-xl">✂</span>
      </div>

      {/* --- CUPONES (Footer) --- */}
      <div className="flex gap-3 justify-center mb-6">
          {/* Cupón 1 */}
          <div className="bg-[#d00000] text-white h-16 w-1/2 relative flex items-center shadow-md mask-coupon">
             <div className="border-r border-dashed border-white/40 h-full w-8 flex flex-col justify-center items-center text-[6px] tracking-widest uppercase">
                <span className="-rotate-90">00001</span>
             </div>
             <div className="flex-1 text-center">
                <p className="text-[6px] uppercase tracking-wider opacity-80 mb-0.5">Cupón Para:</p>
                <p className="font-handwriting text-sm sm:text-lg leading-none">Una cita sorpresa</p>
             </div>
             {/* Círculos efecto ticket */}
             <div className="absolute -left-1.5 top-1/2 w-3 h-3 bg-[#ffebf0] rounded-full -mt-1.5"></div>
             <div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-[#ffebf0] rounded-full -mt-1.5"></div>
          </div>

           {/* Cupón 2 */}
           <div className="bg-[#d00000] text-white h-16 w-1/2 relative flex items-center shadow-md">
             <div className="border-r border-dashed border-white/40 h-full w-8 flex flex-col justify-center items-center text-[6px] tracking-widest uppercase">
                <span className="-rotate-90">00002</span>
             </div>
             <div className="flex-1 text-center">
                <p className="text-[6px] uppercase tracking-wider opacity-80 mb-0.5">Cupón Para:</p>
                <p className="font-handwriting text-sm sm:text-lg leading-none">Una ida al cine</p>
             </div>
             <div className="absolute -left-1.5 top-1/2 w-3 h-3 bg-[#ffebf0] rounded-full -mt-1.5"></div>
             <div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-[#ffebf0] rounded-full -mt-1.5"></div>
          </div>
      </div>

      {/* --- BOTONES NAVEGACIÓN --- */}
      <div className="flex gap-4 pt-2">
        <button 
            onClick={onBack}
            className="flex-1 bg-white border border-[#d00000] text-[#d00000] py-2 rounded-full font-bold shadow-sm text-xs uppercase hover:bg-rose-50"
        >
            ← Anterior
        </button>
        <button 
            onClick={onNext}
            className="flex-1 bg-[#d00000] text-white py-2 rounded-full font-bold shadow-md text-xs uppercase hover:bg-[#a00000]"
        >
            Siguiente Página →
        </button>
      </div>

    </motion.div>
  );
}