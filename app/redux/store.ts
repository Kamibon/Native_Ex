import { configureStore } from "@reduxjs/toolkit";
import { stateSlice } from "../service/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";




export const store = configureStore({
    reducer: { fakeGram: stateSlice.reducer } ,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch  = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;