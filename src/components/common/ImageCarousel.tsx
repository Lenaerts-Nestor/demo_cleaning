import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { GalleryImage } from "../../types";

interface ImageCarouselProps {
  images: GalleryImage[];
  className?: string;
  frameClassName?: string;
  aspectClassName?: string;
  showCaption?: boolean;
  renderCaption?: (image: GalleryImage) => ReactNode;
  showIndicators?: boolean;
  showControls?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  indicatorContainerClassName?: string;
  activeIndicatorClassName?: string;
  inactiveIndicatorClassName?: string;
  enableClickNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const mergeClasses = (
  ...classes: Array<string | false | null | undefined>
): string => classes.filter(Boolean).join(" ");

export default function ImageCarousel({
  images,
  className,
  frameClassName,
  aspectClassName = "aspect-[4/3]",
  showCaption = true,
  renderCaption,
  showIndicators = true,
  showControls = true,
  previousLabel = "Vorige afbeelding",
  nextLabel = "Volgende afbeelding",
  indicatorContainerClassName,
  activeIndicatorClassName,
  inactiveIndicatorClassName,
  enableClickNavigation = false,
  autoPlay = false,
  autoPlayInterval = 3500,
}: ImageCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  if (safeImages.length === 0) {
    return null;
  }

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % safeImages.length);
  }, [safeImages.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + safeImages.length) % safeImages.length
    );
  }, [safeImages.length]);

  const restartAutoPlay = useCallback(() => {
    if (!autoPlay || safeImages.length <= 1) {
      return;
    }

    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, goToNext, safeImages.length]);

  useEffect(() => {
    restartAutoPlay();

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [restartAutoPlay]);

  const handleGoToNext = useCallback(() => {
    goToNext();
    restartAutoPlay();
  }, [goToNext, restartAutoPlay]);

  const handleGoToPrevious = useCallback(() => {
    goToPrevious();
    restartAutoPlay();
  }, [goToPrevious, restartAutoPlay]);

  const allowClickNavigation = enableClickNavigation && safeImages.length > 1;

  const handleImageClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!allowClickNavigation) {
        return;
      }

      const { left, width } = event.currentTarget.getBoundingClientRect();
      const clickX = event.clientX - left;

      if (clickX < width / 2) {
        handleGoToPrevious();
      } else {
        handleGoToNext();
      }
    },
    [allowClickNavigation, handleGoToNext, handleGoToPrevious]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!allowClickNavigation) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handleGoToPrevious();
      } else if (
        event.key === "ArrowRight" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        handleGoToNext();
      }
    },
    [allowClickNavigation, handleGoToNext, handleGoToPrevious]
  );

  const currentImage = safeImages[currentIndex];

  return (
    <div
      className={mergeClasses(
        "relative",
        allowClickNavigation ? "cursor-pointer" : undefined,
        className
      )}
      onClick={handleImageClick}
      onKeyDown={handleKeyDown}
      role={allowClickNavigation ? "button" : undefined}
      tabIndex={allowClickNavigation ? 0 : undefined}
      aria-label={
        allowClickNavigation
          ? "Navigeer door de afbeeldingen door links of rechts te klikken"
          : undefined
      }
    >
      <div
        className={mergeClasses(
          "relative overflow-hidden",
          frameClassName ?? "rounded-2xl shadow-xl",
          aspectClassName
        )}
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="w-full h-full object-cover"
        />
        {showCaption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
            {renderCaption ? (
              renderCaption(currentImage)
            ) : (
              <p className="text-white text-sm sm:text-base font-medium">
                {currentImage.alt}
              </p>
            )}
          </div>
        )}
      </div>

      {showControls && safeImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={handleGoToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all"
            aria-label={previousLabel}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleGoToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all"
            aria-label={nextLabel}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showIndicators && safeImages.length > 1 && (
        <div
          className={mergeClasses(
            "flex justify-center gap-2 mt-6 sm:mt-8",
            indicatorContainerClassName
          )}
        >
          {safeImages.map((image, index) => (
            <button
              key={image.id ?? index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={mergeClasses(
                "h-2 rounded-full transition-all",
                index === currentIndex
                  ? activeIndicatorClassName ?? "w-8 bg-blue-600"
                  : inactiveIndicatorClassName ??
                      "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Ga naar afbeelding ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
