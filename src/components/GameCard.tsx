import { useState, useEffect } from "react";
import ImageDisplay from "./ImageDisplay";
import HintList from "./HintList";
import GuessInput from "./GuessInput";
import MessageDisplay from "./MessageDisplay";

interface GameCardProps {
  carData: {
    brandName: string;
    modelName: string;
    images: {
      parts: string[];
      full: string;
    };
    hints: string[];
  };
  onCorrectGuess: (points: number, isModelGuessed: boolean) => void;
  onWrongGuess: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  carData,
  onCorrectGuess,
  onWrongGuess,
}) => {
  const [brandGuess, setBrandGuess] = useState("");
  const [modelGuess, setModelGuess] = useState("");
  const [showHints, setShowHints] = useState([false, false, false]);
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [showFullImage, setShowFullImage] = useState(false);
  const [isBrandGuessed, setIsBrandGuessed] = useState(false);
  const [isModelGuessed, setIsModelGuessed] = useState(false);
  const [usedHints, setUsedHints] = useState(0);
  const [maxPartIndexSeen, setMaxPartIndexSeen] = useState(0);
  const [imageCache, setImageCache] = useState<Record<string, boolean>>({});
  const [remainingPoints, setRemainingPoints] = useState(100); // Toplam puan havuzu

  const wrongGuessMessages = [
    "Yanlış tahmin! Bir daha dene.",
    "Bu sefer olmadı, tekrar dene!",
    "Yaklaştın ama doğru değil.",
    "Biraz daha düşün, tekrar dene!",
    "Yanlış cevap, bir daha dene!",
  ];

  useEffect(() => {
    setBrandGuess("");
    setModelGuess("");
    setShowHints([false, false, false]);
    setCurrentPartIndex(0);
    setMessage("");
    setMessageType("");
    setIsImageLoading(true);
    setShowFullImage(false);
    setIsBrandGuessed(false);
    setIsModelGuessed(false);
    setUsedHints(0);
    setMaxPartIndexSeen(0);
    setImageCache({});
    setRemainingPoints(100); // Her yeni araçta puanı sıfırla

    const preloadImages = () => {
      carData.images.parts.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImageCache((prev) => ({ ...prev, [src]: true }));
        };
      });
      const fullImg = new Image();
      fullImg.src = carData.images.full;
      fullImg.onload = () => {
        setImageCache((prev) => ({ ...prev, [carData.images.full]: true }));
      };
    };
    preloadImages();
  }, [carData]);

  useEffect(() => {
    const currentImageSrc = showFullImage
      ? carData.images.full
      : carData.images.parts[currentPartIndex];
    setIsImageLoading(!imageCache[currentImageSrc]);
  }, [currentPartIndex, showFullImage, imageCache, carData.images]);

  const calculateBrandPoints = () => {
    // Marka için maksimum 40 puan
    return Math.floor(remainingPoints * 0.4);
  };

  const calculateModelPoints = () => {
    // Model için kalan puanların tamamı
    return remainingPoints;
  };

  const getRandomWrongGuessMessage = () => {
    const randomIndex = Math.floor(Math.random() * wrongGuessMessages.length);
    return wrongGuessMessages[randomIndex];
  };

  const handleBrandGuess = () => {
    setMessage("");
    setMessageType("");
    if (brandGuess.toLowerCase().trim() === carData.brandName.toLowerCase()) {
      const points = calculateBrandPoints();
      setMessage(`Doğru! ${carData.brandName.toUpperCase()} markasını bildiniz! (+${points} puan) 
                 Şimdi modeli tahmin edin.`);
      setMessageType("success");
      setIsBrandGuessed(true);
      onCorrectGuess(points, false);
    } else {
      setMessage(getRandomWrongGuessMessage());
      setMessageType("error");
      onWrongGuess();
    }
  };

  const handleModelGuess = () => {
    if (modelGuess.toLowerCase().trim() === carData.modelName.toLowerCase()) {
      const points = calculateModelPoints();
      setMessage(`Tebrikler! Bu bir ${carData.brandName.toUpperCase()} ${carData.modelName.toUpperCase()}! (+${points} puan)
                 ${usedHints} ipucu ve ${
        maxPartIndexSeen + 1
      } parça kullanarak bildiniz.`);
      setMessageType("success");
      setShowFullImage(true);
      setIsModelGuessed(true);
      onCorrectGuess(points, true);
    } else {
      setMessage(getRandomWrongGuessMessage());
      setMessageType("error");
      onWrongGuess();
    }
  };

  const handlePass = () => {
    setMessage(`Pas geçildi. Bu bir ${carData.brandName} ${carData.modelName}.
               Maksimum ${remainingPoints} puan kazanabilirdiniz.`);
    setMessageType("info");
    setShowFullImage(true);
    setIsModelGuessed(true);
    onCorrectGuess(0, true);
  };

  const revealHint = (index: number) => {
    if (!showHints[index]) {
      const newHints = [...showHints];
      newHints[index] = true;
      setShowHints(newHints);
      setUsedHints((prev) => prev + 1);
      // Her ipucu 10 puan düşürür
      setRemainingPoints((prev) => Math.max(0, prev - 10));
    }
  };

  const showNextPart = () => {
    if (currentPartIndex < carData.images.parts.length - 1 && !isModelGuessed) {
      setCurrentPartIndex((prev) => prev + 1);
      // Sadece yeni bir parça gösterildiğinde puan düşür
      if (currentPartIndex >= maxPartIndexSeen) {
        setMaxPartIndexSeen(currentPartIndex + 1);
        // Her yeni parça 15 puan düşürür
        setRemainingPoints((prev) => Math.max(0, prev - 15));
      }
    }
  };

  const showPreviousPart = () => {
    if (currentPartIndex > 0 && !isModelGuessed) {
      setCurrentPartIndex((prev) => prev - 1);
    }
  };


  const currentImage = showFullImage
    ? carData.images.full
    : carData.images.parts[currentPartIndex];

  return (
    <div className="card p-8">
      <div className="text-center">
        <h2 className="card-header mb-8">Arabayı Tahmin Et</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <ImageDisplay
            currentImage={currentImage}
            isImageLoading={isImageLoading}
            showFullImage={showFullImage}
            isModelGuessed={isModelGuessed}
            currentPartIndex={currentPartIndex}
            carData={carData}
            showNextPart={showNextPart}
            showPreviousPart={showPreviousPart}
          />

          <div className="w-full md:w-1/3 flex flex-col justify-between">
            <HintList
              carData={carData}
              showHints={showHints}
              revealHint={revealHint}
              isModelGuessed={isModelGuessed}
            />

            <div className="mt-8 space-y-4">
              <MessageDisplay message={message} messageType={messageType} />

              {!isModelGuessed && (
                <>
                  {!isBrandGuessed ? (
                    <GuessInput
                      guessType="brand"
                      guessValue={brandGuess}
                      setGuessValue={setBrandGuess}
                      handleGuess={handleBrandGuess}
                      handlePass={handlePass}
                      isModelGuessed={isModelGuessed}
                      calculatePoints={calculateBrandPoints}
                    />
                  ) : (
                    <GuessInput
                      guessType="model"
                      guessValue={modelGuess}
                      setGuessValue={setModelGuess}
                      handleGuess={handleModelGuess}
                      handlePass={handlePass}
                      isModelGuessed={isModelGuessed}
                      calculatePoints={calculateModelPoints}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
