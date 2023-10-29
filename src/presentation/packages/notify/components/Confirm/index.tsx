import { SPACING_HALF } from "core/utils//constants/spacing";
import { IConfirmListener } from "../../types";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./styles.module.css";
import { Grid, Alert, Button } from "@mui/material";
import Dialog from "presentation/components/uiKit/DialogImproved";
import LoadingButton from "presentation/components/uiKit/LoadingButton";


function Confirm({
  okText,
  cancelText,
  showOkButton = true,
  showCancelButton = true,
  onClose = () => null,
  onOk = () => null,
  title = "",
  okIcon = "",
  content,
  id,
  status,
  close,
  closeAfterAccept = true,
  preConfirm,
}: IConfirmListener) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const handleClose = () => {
    if (loading) return;
    onClose({
      okText,
      cancelText,
      showOkButton,
      showCancelButton,
      title,
      okIcon,
      content,
      id,
      status,
    });
    close();
  };
  const handleAccept = async () => {
    if (preConfirm) {
      try {
        setLoading(true);
        await preConfirm();
        setLoading(false);
        closeAfterAccept && close();

        onOk({
          okText,
          cancelText,
          showOkButton,
          showCancelButton,
          close,
          title,
          okIcon,
          content,
          id,
          status,
        });
      } catch {
        setLoading(false);
      }
    } else {
      closeAfterAccept && close();
      onOk({
        okText,
        cancelText,
        showOkButton,
        showCancelButton,
        close,
        title,
        okIcon,
        content,
        id,
        status,
      });
    }
  };

  return (
    <Dialog title={title} open onClose={handleClose}>
      <Grid container spacing={SPACING_HALF}>
        {content && (
          <Grid item xs={12} className={styles.content}>
            {status ? (
              <Alert severity={status} className={styles.message}>
                {content}
              </Alert>
            ) : (
              content
            )}
          </Grid>
        )}
        <div className={styles.action}>
          {showOkButton && (
            <LoadingButton
              loading={loading}
              variant="text"
              color="primary"
              onClick={handleAccept}
            >
              {okIcon || null}
              {okText || t("Yes")}
            </LoadingButton>
          )}

          {showCancelButton && (
            <Button
              disabled={loading}
              variant="text"
              color="inherit"
              onClick={handleClose}
            >
              {cancelText || t("No")}
            </Button>
          )}
        </div>
      </Grid>
    </Dialog>
  );
}

export default Confirm;
