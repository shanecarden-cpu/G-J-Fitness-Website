import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

// Import images directly to ensure they're properly bundled by Vite
import img3358 from "../assets/gym-photos/IMG_3358.jpeg";
import img3359 from "../assets/gym-photos/IMG_3359.jpeg";
import img3360 from "../assets/gym-photos/IMG_3360.jpeg";
import img3361 from "../assets/gym-photos/IMG_3361.jpeg";
import img3362 from "../assets/gym-photos/IMG_3362.jpeg";
import img3363 from "../assets/gym-photos/IMG_3363.jpeg";
import img3364 from "../assets/gym-photos/IMG_3364.jpeg";
import img3365 from "../assets/gym-photos/IMG_3365.jpeg";
import img3366 from "../assets/gym-photos/IMG_3366.jpeg";
import img3367 from "../assets/gym-photos/IMG_3367.jpeg";
import img3368 from "../assets/gym-photos/IMG_3368.jpeg";
import img3369 from "../assets/gym-photos/IMG_3369.jpeg";
import img3370 from "../assets/gym-photos/IMG_3370.jpeg";
import img3371 from "../assets/gym-photos/IMG_3371.jpeg";
import img3372 from "../assets/gym-photos/IMG_3372.jpeg";
import img3373 from "../assets/gym-photos/IMG_3373.jpeg";
import img3374 from "../assets/gym-photos/IMG_3374.jpeg";
import img3375 from "../assets/gym-photos/IMG_3375.jpeg";

// New additional photos
import img3376 from "../assets/gym-photos/IMG_3376.jpeg";
import img3377 from "../assets/gym-photos/IMG_3377.jpeg";
import img3378 from "../assets/gym-photos/IMG_3378.jpeg";
import img3379 from "../assets/gym-photos/IMG_3379.jpeg";
import img3380 from "../assets/gym-photos/IMG_3380.jpeg";
import img3381 from "../assets/gym-photos/IMG_3381.jpeg";
import img3382 from "../assets/gym-photos/IMG_3382.jpeg";
import img3383 from "../assets/gym-photos/IMG_3383.jpeg";
import img3384 from "../assets/gym-photos/IMG_3384.jpeg";
import img3385 from "../assets/gym-photos/IMG_3385.jpeg";
import img3386 from "../assets/gym-photos/IMG_3386.jpeg";
import img3387 from "../assets/gym-photos/IMG_3387.jpeg";
import img3388 from "../assets/gym-photos/IMG_3388.jpeg";
import img3389 from "../assets/gym-photos/IMG_3389.jpeg";
import img3390 from "../assets/gym-photos/IMG_3390.jpeg";
import img3391 from "../assets/gym-photos/IMG_3391.jpeg";
import img3392 from "../assets/gym-photos/IMG_3392.jpeg";
import img3393 from "../assets/gym-photos/IMG_3393.jpeg";

// Last set of images
import img3394 from "../assets/gym-photos/IMG_3394.jpeg";
import img3395 from "../assets/gym-photos/IMG_3395.jpeg";
import img3396 from "../assets/gym-photos/IMG_3396.jpeg";
import img3397 from "../assets/gym-photos/IMG_3397.jpeg";
import img3398 from "../assets/gym-photos/IMG_3398.jpeg";
import img3399 from "../assets/gym-photos/IMG_3399.jpeg";
import img3400 from "../assets/gym-photos/IMG_3400.jpeg";
import img3401 from "../assets/gym-photos/IMG_3401.jpeg";
import img3402 from "../assets/gym-photos/IMG_3402.jpeg";
import img3403 from "../assets/gym-photos/IMG_3403.jpeg";
import img3404 from "../assets/gym-photos/IMG_3404.jpeg";
import img3405 from "../assets/gym-photos/IMG_3405.jpeg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Direct references to imported images
  const imagePaths = [
    // First set of images
    img3358, img3359, img3360, img3361, img3362, img3363, img3364, img3365,
    img3366, img3367, img3368, img3369, img3370, img3371, img3372, img3373,
    img3374, img3375,
    
    // Second set of images
    img3376, img3377, img3378, img3379, img3380, img3381, img3382, img3383,
    img3384, img3385, img3386, img3387, img3388, img3389, img3390, img3391,
    img3392, img3393,
    
    // Final set of images
    img3394, img3395, img3396, img3397, img3398, img3399, img3400, img3401,
    img3402, img3403, img3404, img3405
  ];

  // Handle any images that might not load correctly
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  };

  // Open the lightbox with the selected image
  const openLightbox = (imagePath: string) => {
    setSelectedImage(imagePath);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="bg-silver-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-silver-900 sm:text-4xl">
            G & J Fitness for Life Center Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-silver-600">
            Tour our facility and see our state-of-the-art equipment
          </p>
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagePaths.map((imagePath, index) => {
            // Use Intersection Observer for lazy loading
            const { ref, inView } = useInView({
              triggerOnce: true,
              rootMargin: '200px 0px',
            });
            
            return (
              <div 
                key={index}
                ref={ref}
                className="aspect-w-3 w-full overflow-hidden rounded-lg bg-white shadow-md cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openLightbox(imagePath)}
              >
                {inView ? (
                  <img
                    src={imagePath}
                    alt={`Gym photo ${index + 1}`}
                    className="h-full w-full object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-silver-100">
                    <div className="animate-pulse bg-silver-200 w-full h-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
        >
          <Button 
            className="absolute top-4 right-4 z-50 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
            onClick={(e) => { 
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged gym photo"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}