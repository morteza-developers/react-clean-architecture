import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BlogsState } from "./blogsSlice.types";
import {
  fetchInitBlogs,
  fetchBlogs,
  fetchBlogsByPage,
  deleteBlogsById,
  fetchRetryBlogs,
  reTryFetchBlogs,
  restoreBlogsById,
  fetchBlogsByReset,
} from "./actions";

import { removeList } from "core/utils/tools";
import { BlogEntity } from "features/blog/domain/entities/blogs";
import { GetAllBlogsParams } from "core/params/blog/blog";

const initialState: BlogsState = {
  list: {
    filter: {},
    data: [],
    initialized: false,
    status: "success",
  },
  recycle: {
    filter: {},
    data: [],
    initialized: false,
    status: "success",
  },
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    initFilter: (state, action: PayloadAction<GetAllBlogsParams>) => {
      state.list.filter = action.payload;
      state.list.initialized = true;
    },

    disposeBlogs: (state) => {
      state.list = initialState.list;
      state.recycle = initialState.recycle;
    },

    blogsUpdateFilter: (state, action: PayloadAction<GetAllBlogsParams>) => {
      state.list.filter = action.payload;
    },
    blogsUpdatePage: (state, action: PayloadAction<number>) => {
      // state.list.filter.page = action.payload;
    },
    resetBlogs: (state) => {
      state.list.filter = initialState.list.filter;
    },
    //   recycleBlogs
    recycleBlogsUpdatePage: (state, action: PayloadAction<number>) => {
      // state.recycle.filter.page = action.payload;
    },
    initRecycleBlogsFilter: (state, action: PayloadAction<GetAllBlogsParams>) => {
      state.recycle.filter = action.payload;
      state.recycle.initialized = true;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchBlogs.fulfilled,
      (state, action: PayloadAction<BlogEntity[]>) => {
        state.list.data = action.payload;

        state.list.status = "success";
      }
    );

    builder.addCase(fetchBlogs.rejected, (state) => {
      state.list.status = "error";
    });

    builder.addCase(fetchBlogs.pending, (state) => {
      state.list.status = "loading";
    });
    //fetchRetryBlogs
    builder.addCase(
      fetchRetryBlogs.fulfilled,
      (state, action: PayloadAction<BlogEntity[]>) => {
        state.list.data = action.payload;
        state.list.status = "success";
      }
    );

    builder.addCase(fetchRetryBlogs.rejected, (state) => {
      state.list.status = "error";
    });

    builder.addCase(fetchRetryBlogs.pending, (state) => {
      state.list.status = "loading";
    });
    //fetchBlogsByPage
    builder.addCase(
      fetchBlogsByPage.fulfilled,
      (state, action: PayloadAction<BlogEntity[]>) => {
        state.list.data = action.payload;
        state.list.status = "success";
      }
    );

    builder.addCase(fetchBlogsByPage.rejected, (state) => {
      state.list.status = "error";
    });

    builder.addCase(fetchBlogsByPage.pending, (state) => {
      state.list.status = "loading";
    });

    //fetchInitBlogs

    builder.addCase(
      fetchInitBlogs.fulfilled,
      (state, action: PayloadAction<BlogEntity[]>) => {
        state.list.data = action.payload;
        state.list.status = "success";
      }
    );

    builder.addCase(fetchInitBlogs.rejected, (state) => {
      state.list.status = "error";
    });

    builder.addCase(fetchInitBlogs.pending, (state) => {
      state.list.status = "loading";
    });

    //deleteBlogsById
    builder.addCase(deleteBlogsById.fulfilled, (state, action) => {
      state.list.data = removeList("id", action.meta.arg, state.list.data);
      // state.list.data.recycle_count = state.list.data.recycle_count + 1;
      // state.list.data.count = state.list.data.count - 1;
    });

    //reTryFetchBlogs

    builder.addCase(
      reTryFetchBlogs.fulfilled,
      (state, action: PayloadAction<BlogEntity[]>) => {
        state.list.data = action.payload;
        state.list.status = "success";
      }
    );

    builder.addCase(reTryFetchBlogs.rejected, (state) => {
      state.list.status = "error";
    });

    builder.addCase(reTryFetchBlogs.pending, (state) => {
      state.list.status = "loading";
    });
    //fetchBlogsByReset

    builder.addCase(
      fetchBlogsByReset.fulfilled,
      (state, action: PayloadAction<BlogEntity[]>) => {
        state.list.data = action.payload;
        state.list.status = "success";
      }
    );

    builder.addCase(fetchBlogsByReset.rejected, (state) => {
      state.list.status = "error";
    });

    builder.addCase(fetchBlogsByReset.pending, (state) => {
      state.list.status = "loading";
    });
    //fetchRecycleBlogs

    // builder.addCase(
    //   fetchRecycleBlogsByPage.fulfilled,
    //   (state, action: PayloadAction<BlogEntity[]>) => {
    //     state.recycle.data = action.payload;
    //     state.recycle.status = "success";
    //   }
    // );

    // builder.addCase(fetchRecycleBlogsByPage.rejected, (state) => {
    //   state.recycle.status = "error";
    // });

    // builder.addCase(fetchRecycleBlogsByPage.pending, (state) => {
    //   state.recycle.status = "loading";
    // });

    //reTryFetchRecycleBlogs

    // builder.addCase(
    //   reTryFetchRecycleBlogs.fulfilled,
    //   (state, action: PayloadAction<BlogEntity[]>) => {
    //     state.recycle.data = action.payload;
    //     state.recycle.status = "success";
    //   }
    // );

    // builder.addCase(reTryFetchRecycleBlogs.rejected, (state) => {
    //   state.recycle.status = "error";
    // });

    // builder.addCase(reTryFetchRecycleBlogs.pending, (state) => {
    //   state.recycle.status = "loading";
    // });

    //fetchRecycleInitBlogs

    
    // builder.addCase(
    //   fetchInitRecycleBlogs.fulfilled,
    //   (state, action: PayloadAction<BlogEntity[]>) => {
    //     state.recycle.data = action.payload;
    //     state.recycle.status = "success";
    //   }
    // );

    // builder.addCase(fetchInitRecycleBlogs.rejected, (state) => {
    //   state.recycle.status = "error";
    // });

    // builder.addCase(fetchInitRecycleBlogs.pending, (state) => {
    //   state.recycle.status = "loading";
    // });

    //restoreBlogsById

    builder.addCase(restoreBlogsById.fulfilled, (state, action) => {
      state.recycle.data = removeList(
        "id",
        action.meta.arg,
        state.recycle.data
      );
      // state.recycle.data.recycle_count = state.recycle.data.recycle_count - 1;
      // state.recycle.data.count = state.recycle.data.count + 1;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  disposeBlogs,
  blogsUpdateFilter,
  blogsUpdatePage,
  initFilter,
  resetBlogs,
  recycleBlogsUpdatePage,
  initRecycleBlogsFilter,
} = blogsSlice.actions;

export default blogsSlice.reducer;
