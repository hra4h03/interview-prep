import { sidebarReducer } from './slices/sidebarSlice';
import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from './slices/blogSlice';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        sidebar: sidebarReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);