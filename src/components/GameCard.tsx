import { useState, useEffect } from 'react'

interface GameCardProps {
  carData: {
    brandName: string
    modelName: string
    images: {
      parts: string[]
      full: string
    }
    hints: string[]
  }
  onCorrectGuess: (points: number, isModelGuessed: boolean) => void
  onWrongGuess: () => void
}

const GameCard: React.FC<GameCardProps> = ({ carData, onCorrectGuess, onWrongGuess }) => {
  const [brandGuess, setBrandGuess] = useState('')
  const [modelGuess, setModelGuess] = useState('')
  const [showHints, setShowHints] = useState([false, false, false])
  const [currentPartIndex, setCurrentPartIndex] = useState(0)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [showFullImage, setShowFullImage] = useState(false)
  const [isBrandGuessed, setIsBrandGuessed] = useState(false)
  const [isModelGuessed, setIsModelGuessed] = useState(false)
  const [usedHints, setUsedHints] = useState(0)
  const [maxPartIndexSeen, setMaxPartIndexSeen] = useState(0)
  const [imageCache, setImageCache] = useState<Record<string, boolean>>({})
  const [remainingPoints, setRemainingPoints] = useState(100) // Toplam puan havuzu

  useEffect(() => {
    setBrandGuess('')
    setModelGuess('')
    setShowHints([false, false, false])
    setCurrentPartIndex(0)
    setMessage('')
    setMessageType('')
    setIsImageLoading(true)
    setShowFullImage(false)
    setIsBrandGuessed(false)
    setIsModelGuessed(false)
    setUsedHints(0)
    setMaxPartIndexSeen(0)
    setImageCache({})
    setRemainingPoints(100) // Her yeni araçta puanı sıfırla
    
    const preloadImages = () => {
      carData.images.parts.forEach(src => {
        const img = new Image()
        img.src = src
        img.onload = () => {
          setImageCache(prev => ({ ...prev, [src]: true }))
        }
      })
      const fullImg = new Image()
      fullImg.src = carData.images.full
      fullImg.onload = () => {
        setImageCache(prev => ({ ...prev, [carData.images.full]: true }))
      }
    }
    preloadImages()
  }, [carData])

  useEffect(() => {
    const currentImageSrc = showFullImage ? carData.images.full : carData.images.parts[currentPartIndex]
    setIsImageLoading(!imageCache[currentImageSrc])
  }, [currentPartIndex, showFullImage, imageCache, carData.images])

  const calculateBrandPoints = () => {
    // Marka için maksimum 40 puan
    return Math.floor(remainingPoints * 0.4)
  }

  const calculateModelPoints = () => {
    // Model için kalan puanların tamamı
    return remainingPoints
  }

  const handleBrandGuess = () => {
    if (brandGuess.toLowerCase().trim() === carData.brandName.toLowerCase()) {
      const points = calculateBrandPoints()
      setMessage(`Doğru! ${carData.brandName} markasını bildiniz! (+${points} puan) 
                 Şimdi modeli tahmin edin.`)
      setMessageType('success')
      setIsBrandGuessed(true)
      onCorrectGuess(points, false)
    } else {
      setMessage('Yanlış marka. Tekrar deneyin! 🤔')
      setMessageType('error')
      onWrongGuess()
    }
  }

  const handleModelGuess = () => {
    if (modelGuess.toLowerCase().trim() === carData.modelName.toLowerCase()) {
      const points = calculateModelPoints()
      setMessage(`Tebrikler! Bu bir ${carData.brandName} ${carData.modelName}! (+${points} puan)
                 ${usedHints} ipucu ve ${maxPartIndexSeen + 1} parça kullanarak bildiniz.`)
      setMessageType('success')
      setShowFullImage(true)
      setIsModelGuessed(true)
      onCorrectGuess(points, true)
    } else {
      setMessage('Yanlış model. Tekrar deneyin! 🤔')
      setMessageType('error')
      onWrongGuess()
    }
  }

  const handlePass = () => {
    setMessage(`Pas geçildi. Bu bir ${carData.brandName} ${carData.modelName}.
               Maksimum ${remainingPoints} puan kazanabilirdiniz.`)
    setMessageType('info')
    setShowFullImage(true)
    setIsModelGuessed(true)
    onCorrectGuess(0, true)
  }

  const revealHint = (index: number) => {
    if (!showHints[index]) {
      const newHints = [...showHints]
      newHints[index] = true
      setShowHints(newHints)
      setUsedHints(prev => prev + 1)
      // Her ipucu 10 puan düşürür
      setRemainingPoints(prev => Math.max(0, prev - 10))
    }
  }

  const showNextPart = () => {
    if (currentPartIndex < carData.images.parts.length - 1 && !isModelGuessed) {
      setCurrentPartIndex(prev => prev + 1)
      // Sadece yeni bir parça gösterildiğinde puan düşür
      if (currentPartIndex >= maxPartIndexSeen) {
        setMaxPartIndexSeen(currentPartIndex + 1)
        // Her yeni parça 15 puan düşürür
        setRemainingPoints(prev => Math.max(0, prev - 15))
      }
    }
  }

  const showPreviousPart = () => {
    if (currentPartIndex > 0 && !isModelGuessed) {
      setCurrentPartIndex(prev => prev - 1)
    }
  }

  const currentImage = showFullImage ? carData.images.full : carData.images.parts[currentPartIndex]

  return (
    <div className="card p-8">
      <div className="text-center">
        <h2 className="game-header mb-8">
          Arabayı Tahmin Et
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-50/80 rounded-xl overflow-hidden relative group">
            <div className={`absolute inset-0 bg-white flex items-center justify-center z-10 transition-opacity duration-300 ${isImageLoading ? 'opacity-100' : 'opacity-0'}`}>
              <div className="animate-glow rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent animate-spin"></div>
            </div>
            <div className="relative w-full h-full">
              <img
                key={currentImage}
                src={currentImage}
                alt={showFullImage ? "Araç tam görünüm" : "Araba parçası"}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
            {!showFullImage && !isModelGuessed && (
              <div className="absolute bottom-4 left-0 right-0 px-4 z-20">
                <div className="flex justify-between items-center gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                  <button
                    onClick={showPreviousPart}
                    className={`btn btn-primary z-30 ${currentPartIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPartIndex === 0}
                  >
                    ← Önceki
                  </button>
                  <span className="text-sm font-medium text-white bg-black/40 px-3 py-1 rounded-full">
                    {currentPartIndex + 1} / {carData.images.parts.length}
                  </span>
                  <button
                    onClick={showNextPart}
                    className={`btn btn-primary z-30 ${currentPartIndex === carData.images.parts.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPartIndex === carData.images.parts.length - 1}
                  >
                    Sonraki →
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-700 font-medium">İpuçları:</p>
                <p className="text-sm text-gray-500">
                  Her ipucu -10 puan
                </p>
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

            <div className="mt-8 space-y-4">
              {message && (
                <div className={`p-4 rounded-lg ${
                  messageType === 'success' ? 'bg-green-100 text-green-700' :
                  messageType === 'error' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                } animate-fadeScale`}>
                  {message}
                </div>
              )}

              {!isModelGuessed && (
                <>
                  {!isBrandGuessed ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-gray-600">
                          Marka Tahmini
                        </p>
                        <p className="text-sm text-gray-500">
                          Maksimum {calculateBrandPoints()} puan
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={brandGuess}
                          onChange={(e) => setBrandGuess(e.target.value)}
                          className="input-field"
                          placeholder="Marka tahmin et..."
                        />
                        <button
                          onClick={handleBrandGuess}
                          className="btn btn-primary w-full mt-2"
                        >
                          Tahmin Et
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-gray-600">
                          Model Tahmini
                        </p>
                        <p className="text-sm text-gray-500">
                          Maksimum {calculateModelPoints()} puan
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={modelGuess}
                          onChange={(e) => setModelGuess(e.target.value)}
                          className="input-field"
                          placeholder="Model tahmin et..."
                        />
                        <button
                          onClick={handleModelGuess}
                          className="btn btn-primary w-full mt-2"
                        >
                          Tahmin Et
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              <button
                onClick={handlePass}
                className="btn btn-secondary w-full mt-4"
                disabled={isModelGuessed}
              >
                Pas Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard 