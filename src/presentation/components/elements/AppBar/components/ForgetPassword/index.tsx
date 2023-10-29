import { Grid } from "@mui/material";
import { SPACING_HALF } from "core/utils/constants/spacing";
import Dialog from "presentation/components/uiKit/DialogImproved";
import Input from "presentation/components/uiKit/Input";
import LoadingButton from "presentation/components/uiKit/LoadingButton";
import { useFetch } from "presentation/packages/fetch";
import { toast } from "presentation/packages/notify";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
// import { makeOperators } from "utils/factories/data/operators";

type Props = {
  open?: boolean;
  onClose?: () => void;
};
const ForgetPassword: FC<Props> = ({ open, onClose = () => null }) => {
  const { t } = useTranslation();

  // const { reFetch: changePassword, isPending } = useFetch(
  //   makeOperators().changePassword,
  //   {
  //     autoFetch: false,
  //     onFinish: toast,
  //     onSuccess: () => onClose(),
  //   }
  // );

  const {
    register,
    handleSubmit,
    formState: { errors: resetPasswordError },
  } = useForm();

  const onSubmit = (data: any) => {
    // changePassword(data);
  };
  return (
    <Dialog onClose={() => onClose()} title={t("Forget password")} open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={SPACING_HALF}>
          <Grid xs={12} item>
            <Input
              label={t("EnterOldPassword")}
              {...register("oldPass", { required: true })}
              errorText={resetPasswordError.oldPass && t("reuiredMassage")}
            />
          </Grid>
          <Grid xs={12} item>
            <Input
              label={t("EntertNewPassword")}
              {...register("newPass", { required: true })}
              errorText={resetPasswordError.newPass && t("reuiredMassage")}
            />
          </Grid>
          <Grid xs={12} item>
            <Input
              label={t("RepeatNewPassword")}
              {...register("confirmPass", { required: true })}
              errorText={resetPasswordError.confirmPass && t("reuiredMassage")}
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              // loading={isPending}
              variant="contained"
              type="submit"
            >
              {t("Confirm")}
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};

export default ForgetPassword;
