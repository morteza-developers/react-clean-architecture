import Button from "@mui/material/Button";
import PageWithTitle from "presentation/components/elements/PageWithTitle";
import TableHolder from "presentation/components/elements/TableHolder";
import Table from "presentation/components/uiKit/Table";
import {
  fetchInitBlogs,
  reTryFetchBlogs,
} from "presentation/features/blogs/actions";
import { disposeBlogs } from "presentation/features/blogs/blogsSlice";
import {
  getBlogsFilter,
  getBlogsInitialized,
  getBlogsItems,
  getBlogsPage,
  getBlogsStatus,
} from "presentation/features/blogs/selectors";
import whitSyncRedux from "presentation/hoc/whitSyncRedux";
import { useAppDispatch, useAppSelector } from "presentation/redux/store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getBlogsItems);
  const page = useAppSelector(getBlogsPage);
  const status = useAppSelector(getBlogsStatus);
  return (
    <PageWithTitle title={t("Blog")} breadcrumb={[{ id: 1, title: t("Blog") }]}>
      <TableHolder
        actions={
          <Button variant="contained" onClick={() => navigate("/blog/add")}>
            {t("Add")}
          </Button>
        }
        title={t("List")}
      >
        <Table
          status={status}
          onTry={() => dispatch(reTryFetchBlogs())}
          columns={[
            {
              title: t("Date"),
              render: (r) => r.createDate,
            },
            {
              title: t("Title"),
              field: "title",
            },
          ]}
          data={data}
        />
      </TableHolder>
    </PageWithTitle>
  );
};

export default whitSyncRedux(BlogPage, {
  dispose: disposeBlogs,
  init: fetchInitBlogs,
  itemSelector: getBlogsFilter,
  initializedSelector: getBlogsInitialized,
});
