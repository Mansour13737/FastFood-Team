'use client';

import { useState, useEffect } from 'react';
import Loading from '../app/loading';

export default function GlobalLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const images = document.getElementsByTagName('img');
      let loadedImages = 0;
      const totalImages = images.length;

      const checkAllImagesLoaded = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setIsLoading(false);
        }
      };

      Array.from(images).forEach(img => {
        if (img.complete) {
          checkAllImagesLoaded();
        } else {
          img.addEventListener('load', checkAllImagesLoaded);
          img.addEventListener('error', checkAllImagesLoaded);
        }
      });

      // If no images found, remove loading
      if (totalImages === 0) {
        setIsLoading(false);
      }
    };

    handleLoad();
  }, []);

  return isLoading ? <Loading /> : null;
} 