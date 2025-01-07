import Image from 'next/image';
import React from 'react';

interface ImageDisplayProps {
  currentImage: string;
  isImageLoading: boolean;
  showFullImage: boolean;
  isModelGuessed: boolean;
  currentPartIndex: number;
  carData: { images: { parts: string[] } };
  showNextPart: () => void;
  showPreviousPart: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  currentImage,
  isImageLoading,
  showFullImage,
  isModelGuessed,
  currentPartIndex,
  carData,
  showNextPart,
  showPreviousPart,
}) => {
  return (
    <div className="w-full md:w-2/3 aspect-video bg-gray-50/80 rounded-xl overflow-hidden relative group">
      <div
        className={`absolute inset-0 bg-white flex items-center justify-center z-10 transition-opacity duration-300 ${
          isImageLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="animate-glow rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent animate-spin"></div>
      </div>
      <div className="relative w-full h-full">
        <Image 
          key={currentImage}
          src={currentImage}
          alt={showFullImage ? 'Araç tam görünüm' : 'Araba parçası'}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => {}}
        />
        {!showFullImage && (
          <div className="absolute top-2 right-2 bg-blue-500/50 text-white text-sm px-2 py-1 rounded">
            Her bir parça -15 Puan
          </div>
        )}
      </div>
      {!showFullImage && !isModelGuessed && (
        <div className="absolute bottom-4 left-0 right-0 px-4 z-20">
          <div className="flex justify-between items-center gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-lg">
            <button
              onClick={showPreviousPart}
              className={`btn btn-primary z-30 ${
                currentPartIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPartIndex === 0}
            >
              ← Önceki
            </button>
            <span className="text-sm font-medium text-white bg-black/40 px-3 py-1 rounded-full">
              {currentPartIndex + 1} / {carData.images.parts.length}
            </span>
            <button
              onClick={showNextPart}
              className={`btn btn-primary z-30 ${
                currentPartIndex === carData.images.parts.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              disabled={currentPartIndex === carData.images.parts.length - 1}
            >
              Sonraki →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;