import { configureStore } from "@reduxjs/toolkit"
import theme from "./themeSlice"
import modal from "./modalSlice"

export const store = configureStore({
  reducer: { theme, modal }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
