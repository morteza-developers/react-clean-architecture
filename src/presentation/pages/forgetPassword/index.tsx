import { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { useStyles } from "./style";
import loginImage from "assets/images/login-image.png";
import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import LoadingButton from "presentation/components/uiKit/LoadingButton";
import Input from "presentation/components/uiKit/Input";
import { SPACING_HALF } from "core/utils/constants/spacing";




const ForgetPasswordPage = () => {
  const [confirm, setConfirm] = useState(false);
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register: forgetPasswordRegister,
    handleSubmit: handleFogetPassword,
    getValues,
    formState: { errors: forgetPasswordError },
  } = useForm<any>();
  const {
    register: confirmPasswordRegister,
    handleSubmit: handleConfirmPassword,
    formState: { errors: confirmPasswordError },
  } = useForm<any>();
  // const {
  //   reFetch: forgetPassword,
  //   isPending: forgetPasswordLoading,
  //   data: verificationToken,
  // } = useFetch(makeOperators().forgetPassword, {
  //   autoFetch: false,
  //   onFinish: toast,
  //   onSuccess: (res) => {
  //     setConfirm(true);
  //   },
  //   onDataSetter: (res) => res.data.verification_token,
  // });
  // const { reFetch: confirmPassword, isPending: confirmPasswordLoading } =
  //   useFetch(makeOperators().confirmPassword, {
  //     autoFetch: false,
  //     onSuccess: (res) => {
  //       new ClientCookie().set(TOKEN, res.data.token, 2);
  //       new HttpClientSingleton().setAuthorizationToken(res.data.token);
  //       navigate("/");
  //     },
  //     onFinish: toast,
  //   });
  const onForgetSubmit = (data: any) => {
    // forgetPassword(data);
  };
  const onConfirmSubmit = (data: any) => {
    const newData = { ...data };
    const user = getValues("user");
    // confirmPassword({
    //   ...newData,
    //   user,
    //   verification_token: verificationToken,
    // });
  };

  const confirmPasswordElem = (
    <Box className={classes.right}>
      <Typography className={classes.title}>
        {t("forgetPasswordTitle")}
      </Typography>
      <form
        onSubmit={handleFogetPassword(onForgetSubmit)}
        className={classes.formContainer}
      >
        <Grid container spacing={SPACING_HALF}>
          <Grid item xs={12}>
            <Input
              {...forgetPasswordRegister("user", { required: true })}
              label={t("enterTell")}
              errorText={forgetPasswordError.user && t("reuiredMassage")}
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              // loading={forgetPasswordLoading}
            >
              {t("Send")}
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
      <Box className={classes.footer}>
        <Link to="/auth/login">{t("returnToLoginPage")}</Link>
      </Box>
    </Box>
  );

  return (
    <Paper className={classes.loginContainer}>
      <Box className={classes.left}>
        <img src={loginImage} alt="login" />
      </Box>
      {confirm ? (
        <Box className={classes.right}>
          <Typography className={classes.title}>
            {t("forgetPasswordTitle")}
          </Typography>
          <form
            onSubmit={handleConfirmPassword(onConfirmSubmit)}
            className={classes.formContainer}
          >
            <Grid container spacing={SPACING_HALF}>
              <Grid item xs={12}>
                <Input
                  {...confirmPasswordRegister("code", { required: true })}
                  label={t("enterToken")}
                  errorText={confirmPasswordError.code && t("reuiredMassage")}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  {...confirmPasswordRegister("pass", { required: true })}
                  label={t("enterPassword")}
                  errorText={confirmPasswordError.pass && t("reuiredMassage")}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  {...confirmPasswordRegister("comfirm_pass", {
                    required: true,
                  })}
                  label={t("repeatPassword")}
                  errorText={
                    confirmPasswordError.comfirm_pass && t("reuiredMassage")
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <LoadingButton
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                  // loading={confirmPasswordLoading}
                >
                  {t("Send")}
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
          <Link
            to="/auth/forgetpassword"
            className={classes.changeNumber}
            onClick={() => {
              // setConfirm(confirmPasswordLoading);
            }}
          >
            {t("changePhoneNumber")}
          </Link>
        </Box>
      ) : (
        confirmPasswordElem
      )}
    </Paper>
  );
};

export default ForgetPasswordPage;
