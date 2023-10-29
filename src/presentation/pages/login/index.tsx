import { Box, Paper } from "@mui/material";
import { useStyles } from "./style";
import LoginImage from "assets/images/login-image.png";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";
import Input from "presentation/components/uiKit/Input";
import LoadingButton from "presentation/components/uiKit/LoadingButton";
import PasswordInput from "presentation/components/uiKit/PasswordInput";
import { userLoginUseCase } from "core/di/useCases";
import { toast } from "presentation/packages/notify";
import { useFetch } from "presentation/packages/fetch";
import { UserLoginParams } from "features/user/domain/params";
const LoginPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation();
  const { reFetch: login, isPending } = useFetch(userLoginUseCase, {
    autoFetch: false,
    onSuccess: (res) => {
      window.location.replace("/");
    },
    onFinish: toast,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginParams>();
  const onSubmit = (data: UserLoginParams) => {
    login(data);
  };
  return (
    <Paper className={classes.loginContainer}>
      <Box className={classes.left}>
        <img src={LoginImage} alt="login" />
      </Box>
      <form className={classes.right} onSubmit={handleSubmit(onSubmit)}>
        <Typography className={classes.title}>{t("loginTitle")}</Typography>
        <Input
          {...register("user", { required: true })}
          errorText={errors.user && t("reuiredMassage")}
          label={t("userName")}
        />
        <PasswordInput
          {...register("password", { required: true })}
          errorText={errors.password && t("reuiredMassage")}
          label={t("password")}
        />
        <LoadingButton
          color="primary"
          type="submit"
          variant="contained"
          size="medium"
          fullWidth
          loading={isPending}
        >
          {t("loginBtn")}
        </LoadingButton>
        <Stack direction={"row"} className={classes.footer}>
          <Link to="/auth/forgetpassword">{t("forgetPassword")}</Link>
        </Stack>
      </form>
    </Paper>
  );
};

export default LoginPage;
