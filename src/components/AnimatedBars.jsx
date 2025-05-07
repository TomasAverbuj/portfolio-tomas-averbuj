import React, { useEffect, useRef } from 'react';

const AnimatedBars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Configurar dimensiones del lienzo
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuración inicial del lienzo
    const canvasOptions = {
      autoClear: true,
      autoPushPop: true,
    };

    // Variables de la animación
    const count = 40;
    const c = 1 / count;
    let width = canvas.width;
    let height = canvas.height;

    // Funciones de utilidad
    const lerp = (a, b, t) => a + (b - a) * t;

    // Funciones de easing (quintic in y out)
    const ease = {
      quint: {
        in: (t, b, c, d) => {
          t /= d;
          return c * t * t * t * t * t + b;
        },
        out: (t, b, c, d) => {
          t /= d;
          t--;
          return c * (t * t * t * t * t + 1) + b;
        },
      },
    };

    // Función para dibujar una línea
    const line = (x1, y1, x2, y2, autoPushPop = true) => {
      if (canvasOptions.autoPushPop && autoPushPop) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
    };

    // Función de dibujo principal
    const draw = () => {
      // Limpiar el lienzo si autoClear está activado
      if (canvasOptions.autoClear) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Actualizar dimensiones
      width = canvas.width;
      height = canvas.height;

      ctx.strokeStyle = '#ffffff'; // Color blanco para las barras

      ctx.beginPath();

      let time_ = Date.now() * 0.00005; // Reducimos el factor para hacer la animación más lenta

      for (let i = 0; i < count; i++) {
        let t_ = i * c;

        let time = (time_ + t_) % 1;
        let t = ease.quint.in(time, 0, 1, 1);
        let ty = ease.quint.out(t, 0, 1, 1);

        let x = lerp(width, 0, t);
        let y = ty * height * 0.4;
        line(x, y, x, height - y, false);
      }

      ctx.stroke();

      // Continuar la animación
      requestAnimationFrame(draw);
    };

    // Iniciar la animación
    draw();

    // Limpiar el evento de resize al desmontar el componente
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    />
  );
};

export default AnimatedBars;