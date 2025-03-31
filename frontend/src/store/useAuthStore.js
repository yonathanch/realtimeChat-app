import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  //Mengecek apakah user masih login
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });

    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created succesfully");

      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIng: true });

    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log("Login Response:", res.data); // Debugging response
      set({ authUser: res.data });
      toast.success("Logged in succesfully");

      get().connectSocket();
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIng: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out succesfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated succesfully");
    } catch (error) {
      console.log("error is update profile:", error);
      toast.success(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  // updateProfile: async (data) => {
  //   set({ isUpdatingProfile: true });

  //   try {
  //     console.log("Sending updateProfile request with:", data); // Debugging

  //     // Jika tidak ada profilePict, hapus dari data
  //     const filteredData = { ...data };
  //     if (!filteredData.profilePict) {
  //       delete filteredData.profilePict;
  //     }

  //     const res = await axiosInstance.put("/auth/update-profile", filteredData);
  //     set({ authUser: res.data });
  //     toast.success("Profile updated successfully");
  //   } catch (error) {
  //     console.error("Error in updateProfile:", error.response?.data || error);
  //     toast.error(error.response?.data?.message || "Failed to update profile");
  //   } finally {
  //     set({ isUpdatingProfile: false });
  //   }
  // },

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
