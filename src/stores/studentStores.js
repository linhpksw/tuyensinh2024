// store/studentStore.js
import { create } from 'zustand';

const useStudentStore = create((set) => ({
    studentData: null,
    setStudentData: (data) => set({ studentData: data }),
    clearStudentData: () => set({ studentData: null }),
}));

export default useStudentStore;
