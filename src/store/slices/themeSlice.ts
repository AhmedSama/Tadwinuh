import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


document.querySelector("body")?.setAttribute("data-theme",localStorage.getItem("theme") || "light")

export const themeSlice = createSlice({
  name: 'theme',
  initialState : localStorage.getItem("theme") || "light",
  reducers: {
    setTheme: (_, action: PayloadAction<string>) => {
        document.querySelector("body")?.setAttribute("data-theme",action.payload)
        localStorage.setItem("theme",action.payload)
        return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer