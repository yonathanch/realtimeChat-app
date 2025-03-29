import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  MessagesSquare,
  User,
  MessageSquareMore,
  Coffee,
  Mail,
  Lock,
  EyeOff,
  Eye,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  //ambil logic dari useauthstore.js
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 7)
      return toast.error("Password must be at least 7 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-5">
      {/* Left Side */}
      <div className="hidden lg:flex  lg:col-span-2 flex flex-col justify-start items-center p-6 sm:p-12 bg-gradient-to-b from-[#00fbffdb] to-[#8360C3] font-sans w-full">
        <MessageSquareMore className="size-20 mt-15" />
        <h1 className="font-bold text-2xl">InstaChat</h1>
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mt-15">
            <div className="flex flex-col items-center gap-2 group">
              <p className="text-2xl mt-4 text-center">
                Share Your Smile With This World and Find Friends
              </p>
              <Coffee className="size-20 mt-10" />
              <p className="text-2xl mt-5">Enjoy..!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-3 flex flex-col justify-center items-center p-6 sm:p-12 w-full mt-20">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessagesSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your create account
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10 ">
                  <User className="size-5 text-base-content/40 " />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 mt-2"
                  placeholder="Your Fullname"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10 ">
                  <Mail className="size-5 text-base-content/40 " />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 mt-2"
                  placeholder="Natan@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10 ">
                  <Lock className="size-5 text-base-content/40 " />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 mt-2"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40 " />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
