import { Button, Tooltip } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import LoadingButton from "components/uiKit/LoadingButton";
import { toast } from "packages/notify";
import { useFetch } from "packages/fetch";

type Props = {
  onExportExcel: () => Promise<string>;
};
const ExportExcel: FC<Props> = ({ onExportExcel }) => {
  const { t } = useTranslation();
  const exportExcelLink = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.click();
  };
  const { isPending, reFetch } = useFetch(onExportExcel, {
    autoFetch: false,
    onError: (e) => toast(e.message, { status: "error" }),
    onSuccess: (res) => {
      exportExcelLink(res);
    },
  });

  return (
    <Tooltip title={t("Excel output")}>
      <LoadingButton
        loading={isPending}
        onClick={() => reFetch()}
        size="large"
        color="success"
      >
        <TextSnippetIcon />
      </LoadingButton>
    </Tooltip>
  );
};

export default ExportExcel;
