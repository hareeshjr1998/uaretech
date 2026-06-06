import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  },
  status: 'idle', // idle, sending, success, error
  errorMessage: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.formData = { name: '', email: '', phone: '', service: '', message: '' };
      state.status = 'idle';
      state.errorMessage = null;
    },
    setSubmitStatus: (state, action) => {
      state.status = action.payload.status;
      if (action.payload.error) {
        state.errorMessage = action.payload.error;
      }
    },
  },
});

export const { updateForm, resetForm, setSubmitStatus } = contactSlice.actions;
export default contactSlice.reducer;
