import React from 'react';

interface GuessInputProps {
  guessType: 'brand' | 'model';
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
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium text-gray-600">
          {guessType === 'brand' ? 'Marka Tahmini' : 'Model Tahmini'}
        </p>
        <p className="text-sm text-gray-500">
          Maksimum {calculatePoints()} puan
        </p>
      </div>
      <div className="relative">
        <input
          type="text"
          value={guessValue}
          onChange={(e) => setGuessValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input-field equal-width"
          placeholder={`${guessType === 'brand' ? 'Marka' : 'Model'} tahmin et...`}
        />
        <div className="button-group mt-2">
          <button
            onClick={handleGuess}
            className="btn btn-primary equal-width"
          >
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