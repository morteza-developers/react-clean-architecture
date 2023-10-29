import { Grid } from "@mui/material";
import { SPACING_HALF } from "core/utils/constants/spacing";
import PageWithTitle from "presentation/components/elements/PageWithTitle";
import Input from "presentation/components/uiKit/Input";
import LoadingButton from "presentation/components/uiKit/LoadingButton";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const AddBlogPage = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};
  return (
    <PageWithTitle
      title={t("Add")}
      breadcrumb={[
        {
          title: t("Blog"),
          id: 1,
          href: "/blog",
        },
        {
          title: t("Add"),
          id: 2,
        },
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={SPACING_HALF}>
          <Grid item xs={12} md={6}>
            <Input label={t("Title")} {...register("title")} />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton variant="contained">{t("Add")}</LoadingButton>
          </Grid>
        </Grid>
      </form>
    </PageWithTitle>
  );
};

export default AddBlogPage;
