import { Tooltip } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import LoadingButton from "components/uiKit/LoadingButton";
type Props = {
  onExport: () => Promise<any>;
};

const ExportModule: FC<Props> = ({ onExport }) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const handleExport = async () => {
    setLoading(true);
    await onExport();
    setLoading(false);
  };
  return (
    <Tooltip title={t("Output")}>
      <LoadingButton
        loading={loading}
        color="primary"
        variant="contained"
        size="medium"
        startIcon={<FileUploadOutlinedIcon />}
        onClick={handleExport}
      >
        {t("Output")}
      </LoadingButton>
    </Tooltip>
  );
};

export default ExportModule;
