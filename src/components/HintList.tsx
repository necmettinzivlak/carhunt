import React from 'react';

interface HintListProps {
  carData: { hints: string[] };
  showHints: boolean[];
  revealHint: (index: number) => void;
  isModelGuessed: boolean;
}

const HintList: React.FC<HintListProps> = ({
  carData,
  showHints,
  revealHint,
  isModelGuessed,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-700 font-medium">İpuçları:</p>
        <p className="text-sm text-gray-500">Her ipucu -10 puan</p>
      </div>
      <ul className="space-y-3">
        {carData.hints.map((hint, index) => (
          <li
            key={index}
            className="animate-slideIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {showHints[index] ? (
              <div className="animate-fadeScale hint-text">
                <p>{hint}</p>
              </div>
            ) : (
              <button
                onClick={() => revealHint(index)}
                className="hint-button group w-full"
                disabled={isModelGuessed}
              >
                <span className="inline-flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 mr-2 group-hover:bg-indigo-200 transition-colors duration-300 text-indigo-600">
                    {index + 1}
                  </span>
                  İpucu {index + 1}'i Göster
                </span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HintList;