import Dialog from "components/uiKit/DialogImproved";
import { FC, useState } from "react";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import FlipIcon from "@mui/icons-material/Flip";
import { useTranslation } from "react-i18next";
import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./ImagePreviewModal.module.css";

type Props = {
  onClose?: () => void;
  src: string;
  alt?: string;
};
const ImagePreviewModal: FC<Props> = ({
  onClose = () => null,
  src,
  alt = "",
}) => {
  const { t } = useTranslation();
  const [rotate, setRotate] = useState<number>(0);
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const handleRotate = () => {
    setRotate((r) => {
      if (r >= 270) return 0;
      return r + 90;
    });
  };

  const handleBackRotate = () => {
    setRotate((r) => {
      if (r <= -270) return 0;
      return r - 90;
    });
  };

  const isPositive = (num: number) => num > 0;

  const handleZoom = () => {
    if (scale.x < 5 && scale.x > -5) {
      const x = isPositive(scale.x) ? scale.x + 1 : scale.x - 1;
      const y = isPositive(scale.y) ? scale.y + 1 : scale.y - 1;
      setScale({ x, y });
    }
  };
  const handleUnZoom = () => {
    if (scale.x > 1 || scale.x < -1) {
      const x = isPositive(scale.x) ? scale.x - 1 : scale.x + 1;
      const y = isPositive(scale.y) ? scale.y - 1 : scale.y + 1;
      setScale({ x, y });
    }
  };

  const handleFlipX = () => {
    setScale({ ...scale, x: -scale.x });
  };
  const handleFlipY = () => {
    setScale({ ...scale, y: -scale.y });
  };
  return (
    <Dialog
      appBarAction={
        <div className={styles.action_bar}>
          <Tooltip title={t("Flip")}>
            <IconButton
              sx={{ transform: "rotate(90deg)" }}
              onClick={handleFlipY}
            >
              <FlipIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("Flip")}>
            <IconButton onClick={handleFlipX}>
              <FlipIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("Zoom Out")}>
            <IconButton onClick={handleUnZoom}>
              <ZoomOutIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("Zoom")}>
            <IconButton onClick={handleZoom}>
              <ZoomInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("Rotate")}>
            <IconButton onClick={handleRotate}>
              <RotateRightIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("Rotate")}>
            <IconButton onClick={handleBackRotate}>
              <RotateLeftIcon />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title={t("Close")}>
            <IconButton onClick={onClose} color="error">
              <CloseIcon />
            </IconButton>
          </Tooltip> */}
        </div>
      }
      maxWidth="sm"
      open
      onClose={onClose}
    >
      <div className={styles.modal}>
        <img
          style={{
            transform: `rotate(${rotate}deg) scale3d(${scale.x}, ${scale.y}, 1)`,
          }}
          className={styles.modal_image}
          src={src}
          alt={alt}
        />
      </div>
    </Dialog>
  );
};

export default ImagePreviewModal;
