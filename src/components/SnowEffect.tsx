import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Criar flocos de neve iniciais
    const createSnowflakes = () => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 10 + 5,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();

    // Animação dos flocos
    const animateSnow = () => {
      setSnowflakes(prev => 
        prev.map(flake => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + (Math.sin(flake.y * 0.01) * 0.5),
        }))
      );
    };

    const interval = setInterval(animateSnow, 50);

    // Resetar flocos quando saem da tela
    const resetFlakes = () => {
      setSnowflakes(prev => 
        prev.map(flake => 
          flake.y > window.innerHeight 
            ? { ...flake, y: -10, x: Math.random() * window.innerWidth }
            : flake
        )
      );
    };

    const resetInterval = setInterval(resetFlakes, 1000);

    // Limpeza
    return () => {
      clearInterval(interval);
      clearInterval(resetInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute text-white opacity-80 animate-pulse"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            transform: `rotate(${flake.x * 0.1}deg)`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;
