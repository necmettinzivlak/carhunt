"use client";

import React from 'react';
import { useState, useEffect } from "react";
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
    const currentTheme = htmlElement.classList.contains("dark") ? "dark" : "light";
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

  if (isGameComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 dark:bg-gray-900 bg-white">
        <div className="card p-8 text-center max-w-lg w-full animate-slideIn">
          <div className="relative inline-block mb-6">
            <h1 className="game-header text-5xl">Tebrikler! 🎉</h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-lg opacity-10 animate-glow filter blur-xl"></div>
          </div>
          <p className="text-gray-600 mb-4">Tüm seviyeleri tamamladınız!</p>
          <p className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent mb-8">
            Final Skorunuz: {score}
          </p>
          <button
            onClick={handleRestart}
            className="btn btn-primary w-full group relative"
          >
            <span className="relative z-10">Yeniden Başla</span>
          </button>
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
