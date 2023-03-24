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
    categories: [],
    loading: true,
    error: ''
};

export const getPostsByCategory =
    createAsyncThunk('category/posts/category', async (id: string) => {
        return (await fetch(`${API_URL}/posts/category/${id}`)).json()
    });

export const getCategories =
    createAsyncThunk('categories', async () => {
        return (await fetch(`${API_URL}/categories`)).json()
    });

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPostsByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPostsByCategory.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getPostsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.articles = [];
                state.error = action.error.message
            })
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                console.log('categorySlice:: action: ', action);
                state.categories = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.articles = [];
                state.error = action.error.message
            });
    },
});
export const categoryReducer = categorySlice.reducer