import { Card } from "@/components/ui/card";
import { useTimeLock } from "@/hooks/useTimeLock";

interface TimeLockOverlayProps {
  isActive: boolean;
}

const TimeLockOverlay = ({ isActive }: TimeLockOverlayProps) => {
  const { isUnlocked, formatTime, timeRemaining, isActive: timerActive } = useTimeLock(10);

  if (!isActive || isUnlocked) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="p-8 max-w-md w-full text-center bg-gradient-primary text-white border-none">
        <div className="text-6xl mb-6 animate-bounce-slow">⏰</div>
        
        <h3 className="text-2xl font-bold mb-4">
          Conteúdo Sendo Liberado...
        </h3>
        
        <p className="text-lg mb-6 opacity-90">
          Para garantir que você absorva todo o conteúdo do vídeo, 
          o restante da página será liberado em:
        </p>
        
        <div className="bg-black/20 rounded-xl p-6 mb-6">
          <div className="text-5xl font-mono font-bold mb-2 text-yellow-300">
            {formatTime}
          </div>
          <p className="text-sm opacity-75">minutos restantes</p>
        </div>
        
        <div className="space-y-3 text-sm opacity-90">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
            <span>Aproveite para assistir o vídeo completo</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
            <span>Faça anotações dos pontos importantes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
            <span>Prepare-se para transformar sua carreira</span>
          </div>
        </div>
        
        {timerActive && (
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <p className="text-xs opacity-75">
              💡 <strong>Dica:</strong> Quanto mais atenção você der ao vídeo, 
              melhores serão seus resultados no programa!
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default TimeLockOverlay;