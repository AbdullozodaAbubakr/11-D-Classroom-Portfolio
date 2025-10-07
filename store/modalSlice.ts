import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Person } from "../types/Person"

type ModalState = {
  open: boolean
  person: Person | null
}

const initialState: ModalState = { open: false, person: null }

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<Person>) {
      state.open = true
      state.person = action.payload
    },
    closeModal(state) {
      state.open = false
      state.person = null
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
