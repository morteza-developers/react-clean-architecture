import { FC, useState } from "react";
import styles from "./Image.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ImagePreviewModal from "./components/ImagePreviewModal";

type Props = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: string | number;
  className?: string;
  imgClassName?: string;
};

const Image: FC<Props> = ({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleImageClick = () => {
    src && setOpen(true);
  };

  return (
    <>
      {open && (
        <ImagePreviewModal src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
      <div className={`${styles.main_image} ${className}`}>
        {src && (
          <button className={styles.back_drop} onClick={handleImageClick}>
            <VisibilityIcon sx={{ color: "#fff" }} />
          </button>
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imgClassName}
        />
      </div>
    </>
  );
};

export default Image;
