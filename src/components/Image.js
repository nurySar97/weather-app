import { useEffect, useState, memo } from "react";

export const ImageComponent = memo(
  ({ preloader: Preloader, url, alt, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
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
    }, [setLoaded, url]);

    return loaded ? <img src={url} alt={alt} {...props} /> : <Preloader />;
  }
);
