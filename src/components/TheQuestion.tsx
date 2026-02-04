import { motion } from 'framer-motion';

interface TheQuestionProps {
  onYes: () => void;
}

export default function TheQuestion({ onYes }: TheQuestionProps) {

  const handleYes = () => {
    // 1. Redirigir a WhatsApp (CAMBIA EL NÚMERO AQUÍ)
    // El número debe incluir el código de país (ej: 51 para Perú) sin el '+'
    const numeroTelefono = "51924005824"; 
    const mensaje = encodeURIComponent("¡Siiii! Obvio que acepto la cita. ¿A dónde vamos? ");
    
    window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
    
    // 2. Avanzar a la siguiente pantalla (Closing) para la animación
    onYes();
  };

  return (
    <div className="min-h-screen bg-[#ffebf0] text-[#590d22] p-4 flex flex-col font-serif w-full max-w-md mx-auto shadow-2xl overflow-hidden relative border-x-4 border-white/50">
      
      {/* --- HEADER --- */}
      <div className="border-b-2 border-[#590d22] pb-1 mb-4 flex justify-between text-[8px] sm:text-[10px] tracking-widest uppercase font-bold opacity-80 mt-2">
        <span>Edición Especial</span>
        <span>Airek_Design</span>
        <span>Febrero 2026</span>
      </div>

      {/* --- DECORACIÓN --- */}
      <img src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" alt="Cupid" className="absolute left-2 top-10 w-12 h-12 opacity-30 -scale-x-100 animate-bounce duration-[3000ms]" />
      <img src="https://cdn-icons-png.flaticon.com/512/7343/7343160.png" alt="Cupid" className="absolute right-2 top-10 w-12 h-12 opacity-30 animate-bounce duration-[3000ms]" />

      {/* --- CONTENIDO CENTRAL --- */}
      <div className="flex flex-col items-center justify-center flex-1 z-10 text-center space-y-4">
        
        {/* Título Superior */}
        <h1 className="font-newspaper text-4xl sm:text-5xl text-[#d00000] mb-2 drop-shadow-sm">
          La gran pregunta
        </h1>

        {/* Texto Intro */}
        <div className="text-[10px] sm:text-xs font-serif leading-relaxed opacity-90 px-6">
          <p>Después de analizar los hechos, recopilar datos</p>
          <p>y comprobar la química innegable entre nosotros...</p>
        </div>

        {/* --- STICKER / GIF --- */}
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", stiffness: 260, damping: 20 }}
           className="my-2 bg-white/50 rounded-full p-2"
        >
          <img
            // He puesto el sticker de corazón rojo con brazos que usaste en la imagen
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHIwdzYwYmpqN285b2QxYXFsczZtcHgxdnYwczFhc21jNnV4d2MweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pGwSXMEguWSCmDNaxn/giphy.gif"
            alt="Heart character"
            className="w-28 h-28 object-contain drop-shadow-sm"
          />
        </motion.div>

        {/* Conectores */}
        <div className="space-y-1 text-[10px] sm:text-xs font-serif italic text-[#d00000]">
            <p>Así que ahora sí...</p>
            <p>con el corazón en la mano</p>
            <p>y una sonrisa nerviosa:</p>
        </div>

        {/* --- PREGUNTA PRINCIPAL (Actualizada a tu imagen) --- */}
        <div className="my-4 relative">
             <h2 className="font-newspaper text-3xl sm:text-4xl text-[#590d22] relative z-10 leading-tight">
               ¿Estas lista
             </h2>
             <h2 className="font-newspaper text-5xl sm:text-6xl text-[#d00000] relative z-20 mt-[-5px] drop-shadow-sm">
               para esta cita?
             </h2>
        </div>

        <p className="text-[9px] uppercase tracking-widest mb-4 opacity-70">Elige tu respuesta:</p>

        {/* --- BOTONES CON WHATSAPP --- */}
        <div className="flex flex-col gap-4 w-full max-w-xs px-6 pb-8">
          
          {/* Botón 1 */}
          <motion.button
            onClick={handleYes} // <--- Llama a la función del WhatsApp
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#ffe5ec] border-2 border-[#d00000] text-[#d00000] font-bold py-3 px-6 rounded-full shadow-md text-xs sm:text-sm uppercase tracking-wider hover:bg-[#ffd1dc] transition-colors"
          >
            ¡SÍ! POR SUPUESTOOOO
          </motion.button>

          {/* Botón 2 (Rojo Sólido) */}
          <motion.button
            onClick={handleYes} // <--- También llama al WhatsApp
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#d00000] text-white border-2 border-[#d00000] font-bold py-3 px-6 rounded-full shadow-lg text-xs sm:text-sm uppercase tracking-wider hover:bg-[#b00000] transition-colors flex justify-center items-center gap-2"
          >
            <span>¡SÍ! LO ESTABA ESPERANDO</span>
            <span className="text-lg">😍</span>
          </motion.button>

        </div>

      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-4 text-2xl opacity-40 animate-pulse text-[#ff8fab]">✦</div>
      <div className="absolute bottom-20 right-4 text-xl opacity-40 animate-pulse delay-700 text-[#ff8fab]">✦</div>

    </div>
  );
}