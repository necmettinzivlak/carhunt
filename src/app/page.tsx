"use client";

import React, { useState, useEffect } from "react";
import GameCard from "@/components/GameCard";
import { carData } from "@/data/carData";
import { Car } from "@/types/car";

export default function Home() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [currentCar, setCurrentCar] = useState<Car | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [selectedCars] = useState(
    [...carData].sort(() => Math.random() - 0.5).slice(0, 10)
  );
  const [themeIcon, setThemeIcon] = useState("🌜");
  const [playerName, setPlayerName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);

  useEffect(() => {
    const car = selectedCars[currentLevel - 1];
    if (car) {
      setCurrentCar(car as Car);
      setCanProceed(false);
      setShowConfetti(false);
      setIsGameComplete(false);
    } else {
      setCurrentCar(null);
      setIsGameComplete(true);
    }
  }, [currentLevel, selectedCars]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.classList.contains("dark")
      ? "dark"
      : "light";
    setThemeIcon(currentTheme === "dark" ? "🌞" : "🌜");
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      setThemeIcon("🌜");
    } else {
      htmlElement.classList.add("dark");
      setThemeIcon("🌞");
    }
  };

  const handleCorrectGuess = (points: number, isModelGuessed: boolean) => {
    setScore((prev) => prev + points);
    if (isModelGuessed && !canProceed) {
      setShowConfetti(true);
      setCanProceed(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
    }
  };

  const handleWrongGuess = () => {
    setScore((prev) => Math.max(0, prev - 20));
  };

  const handleNextCar = () => {
    if (canProceed) {
      setCurrentLevel((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    window.location.reload(); // Sayfayı yeniden yükle
  };

  const handleDownloadCertificate = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 1200;
    canvas.height = 800;

    if (ctx) {
      // Arka plan
      ctx.fillStyle = "#f3f4f6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Kenarlık
      ctx.strokeStyle = "#4f46e5";
      ctx.lineWidth = 20;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      // Başlık
      ctx.font = 'bold 60px "Lexend Peta", sans-serif';
      ctx.fillStyle = "#4f46e5";
      ctx.textAlign = "center";
      ctx.fillText("Başarı Sertifikası", canvas.width / 2, 150);

      // İsim
      ctx.font = 'bold 40px "Lexend", sans-serif';
      ctx.fillStyle = "#1f2937";
      ctx.fillText(playerName, canvas.width / 2, 300);

      // Skor ve seviye mesajı
      ctx.font = '30px "Lexend", sans-serif';
      ctx.fillText(`Toplam Puan: ${score}`, canvas.width / 2, 400);
      ctx.fillText(getScoreMessage(score), canvas.width / 2, 450);

      // Tarih
      const date = new Date().toLocaleDateString("tr-TR");
      ctx.font = '25px "Lexend", sans-serif';
      ctx.fillText(date, canvas.width / 2, 600);

      // Sertifikayı indir
      const link = document.createElement("a");
      link.download = `${playerName}_sertifika.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const getScoreMessage = (score: number): string => {
    if (score >= 1000) return "🏆 Efsanevi! Doğan Kabak mısın be!";
    if (score < 200) return "🙈 Bisiklette bir ulaşım aracı";
    if (score < 400) return "📝 Boş bir sayfaya araba markalarını 500 kere yaz";
    if (score < 600)
      return "💼 Ortamda biraz hava atabilirsin, ama daha fazla bilgi şart!";
    if (score < 800)
      return "🌟 Süpersin! Araba sohbetlerinde artık herkes seni dinler!";
    return "🚗 Skorun harika! Sen bu işi çözmüşsün!";
  };

  if (isGameComplete) {
    if (!isNameEntered) {
      return (
        <div className="game-container">
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
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    playerName.trim() &&
                    setIsNameEntered(true)
                  }
                />
                <button
                  onClick={() => playerName.trim() && setIsNameEntered(true)}
                  className="btn btn-primary w-full"
                  disabled={!playerName.trim()}
                >
                  Devam Et
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="game-container">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="game-card text-center max-w-2xl w-full animate-slideIn">
            <div
              id="certificate"
              className="relative p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-900/50 dark:to-sky-900/50 border-8 border-double border-indigo-200 dark:border-indigo-700"
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <svg
                  className="w-full h-full opacity-5"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <pattern
                    id="pattern-circles"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="2"
                      fill="currentColor"
                      className="text-indigo-500"
                    />
                  </pattern>
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    fill="url(#pattern-circles)"
                  />
                </svg>
              </div>

              <div className="relative">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  CARHUNT
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Başarı Sertifikası
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  {playerName}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400 bg-clip-text text-transparent mb-2">
                  {getScoreMessage(2000)}
                </div>
                <div className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Final Skorun
                </div>
                <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
                  {score}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                  10 farklı arabayı tanıyarak bu başarıya ulaştın!
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-500">
                  {new Date().toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleDownloadCertificate}
                className="btn btn-primary flex-1 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Sertifikayı İndir
                </span>
              </button>
              <button
                onClick={handleRestart}
                className="btn btn-secondary flex-1 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Yeniden Başla
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-gray-900 bg-white">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 animate-confetti"></div>
        </div>
      )}

      <header className="header-container sticky top-0 z-50 rounded-lg dark:bg-gray-800 bg-white">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative">
              <h1 className="game-header text-5xl">CAR HUNT</h1>
            </div>
            <div className="flex gap-4 items-center">
              <button onClick={toggleTheme} className="text-xl">
                {themeIcon}
              </button>
              <div className="score-badge animate-glow">
                <span className="mr-2">✨</span>
                {currentLevel} / 10
              </div>
              <div className="score-badge">
                <span className="mr-2">🏆</span>
                Skor: {score}
              </div>
              {canProceed && (
                <button
                  onClick={handleNextCar}
                  className="btn btn-primary animate-fadeScale"
                >
                  Sonraki Araç →
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 dark:bg-gray-900 bg-white">
        <div className="max-w-[90vw] mx-auto animate-slideIn">
          {currentCar && (
            <GameCard
              carData={currentCar}
              onCorrectGuess={handleCorrectGuess}
              onWrongGuess={handleWrongGuess}
            />
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://github.com/necmettinzivlak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com/necmettinzivlak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <span className="text-xs text-gray-400">© by necmettinzivlak</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
