import React, { useState } from "react";

interface GuessInputProps {
  guessType: "brand" | "model";
  guessValue: string;
  setGuessValue: (value: string) => void;
  handleGuess: () => void;
  handlePass: () => void;
  isModelGuessed: boolean;
  calculatePoints: () => number;
}

const GuessInput: React.FC<GuessInputProps> = ({
  guessType,
  guessValue,
  setGuessValue,
  handleGuess,
  handlePass,
  isModelGuessed,
  calculatePoints,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const brands = [
    "Peugeot",
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "BMW",
    "Mercedes",
    "Audi",
    "Hyundai",
    "Kia",
    "Mazda",
    "Nissan",
    "Renault",
    "Fiat",
    "Opel",
    "Citroen",
    "Skoda",
    "Seat",
    "Volvo",
    "Land Rover",
    "Jaguar",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Alfa Romeo",
    "Subaru",
    "Lexus",
    "Mitsubishi",
    "Suzuki",
    "Dacia",
    "Mini",
    "Smart",
    "Jeep",
    "Chrysler",
    "Dodge",
    "Tesla",
    "Bentley",
    "Rolls-Royce",
    "Aston Martin",
    "McLaren",
    "Bugatti",
    "Tofaş",
    "Togg",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGuessValue(value);

    if (value.length >= 3 && guessType === "brand") {
      const filteredSuggestions = brands.filter((brand) =>
        brand.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setGuessValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium text-gray-600">
          {guessType === "brand" ? "Marka Tahmini" : "Model Tahmini"}
        </p>
        {suggestions.length > 0 && (
          <ul className=" bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10 w-40 text-sm">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <p className="text-sm text-gray-500">
          Maksimum {calculatePoints()} puan
        </p>
      </div>
      <div className="relative">
        <input
          type="text"
          value={guessValue}
          onKeyDown={(e) => e.key === "Enter" && handleGuess()}
          onChange={handleInputChange}
          placeholder={
            guessType === "brand"
              ? "Marka tahmini yap..."
              : "Model tahmini yap..."
          }
          className="input w-full text-center text-lg"
        />

        <div className="button-group mt-2">
          <button onClick={handleGuess} className="btn btn-primary equal-width">
            Tahmin Et
          </button>
          <button
            onClick={handlePass}
            className="btn btn-secondary equal-width"
            disabled={isModelGuessed}
          >
            Pas Geç
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuessInput;
