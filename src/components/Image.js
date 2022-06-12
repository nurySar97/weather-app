import { useEffect, useState, memo } from "react";

function image_is_cached(src) {
  const image = new Image();
  image.src = src;
  const _isCached = image.complete;
  image.src = "";
  image.remove();
  return _isCached;
}

export const ImageComponent = memo(
  ({ preloader: Preloader, url, alt, ...props }) => {
    const [loaded, setLoaded] = useState(() => image_is_cached(url));

    useEffect(() => {
      if (!image_is_cached(url)) {
        const image = new Image();
        image.onload = () => setLoaded(true);
        image.onerror = console.error;
        image.src = url;

        return () => {
          image.onerror = null;
          image.onload = null;
          image.src = "";
          image.remove();
        };
      }
    }, [setLoaded, url]);

    return loaded ? <img src={url} alt={alt} {...props} /> : <Preloader />;
  }
);
