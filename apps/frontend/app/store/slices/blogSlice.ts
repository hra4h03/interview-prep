import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants';

const initialState = {
    articles: [{
        _id: "",
        title: "",
        description: "",
        categoryName: "",
        categoryImage: "",
        author: "",
        updatedAt: ""
    }],
    loading: true,
    error: ''
};

export const getArticles =
    createAsyncThunk('blog/posts', async () => (await fetch(`${API_URL}/posts`)).json());

export const getPostsByCategory =
    createAsyncThunk('category/posts/category', async (id: string) => {
        return (await fetch(`${API_URL}/posts/category/${id}`)).json()
    });

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.loading = true;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.loading = false;
                state.articles = [];
                state.error = action.error.message
            })
            .addCase(getPostsByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPostsByCategory.fulfilled, (state, action) => {
                console.log('blogSlice:: getPostsByCategory:: action:', action);
                state.articles = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getPostsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.articles = [];
                state.error = action.error.message
            });
    },
});
export const blogReducer = blogSlice.reducer