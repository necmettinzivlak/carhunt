// src/components/Result.tsx
import React, { useState } from "react";

interface ResultsProps {
  totalPoints: number;
}

const Results: React.FC<ResultsProps> = ({ totalPoints }) => {
  const [playerName, setPlayerName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);

  const getLevelAndMessage = (points: number) => {
    if (points >= 800) return { level: "Efsanevi", message: "🏆 Efsane! Sen bir Araba Gurmesisin!" };
    if (points >= 600) return { level: "Muhteşem", message: "🌟 Muhteşem! Gerçek bir Otomobil Uzmanı!" };
    if (points >= 400) return { level: "Harika", message: "🎯 Harika! İyi bir Araba Bilgini!" };
    if (points >= 200) return { level: "Güzel", message: "👏 Güzel! Gelecek Vadeden Otomobil Meraklısı!" };
    return { level: "Başlangıç", message: "🎮 Tebrikler! Oyunu Tamamladın!" };
  };

  const { level, message } = getLevelAndMessage(totalPoints);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="game-card text-center max-w-md w-full animate-slideIn">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Tebrikler! 🎉
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Sertifikanı indirmek için adını gir
        </p>
        <div className="space-y-4">
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Adını gir..."
            className="input w-full text-center text-lg"
            onKeyPress={(e) => e.key === 'Enter' && playerName.trim() && setIsNameEntered(true)}
          />
          <button
            onClick={() => playerName.trim() && setIsNameEntered(true)}
            className="btn btn-primary w-full"
            disabled={!playerName.trim()}
          >
            Devam Et
          </button>
        </div>
        {isNameEntered && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold">{level}</h3>
            <p className="text-lg">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;