import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const loginSchema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(4, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

type LoginProps = {
  onLogin?: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  function submitLogin() {
    onLogin?.();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#14b8a655,transparent_35%)]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Monolith Metrics
          </p>
          <h1 className="mt-3 text-4xl font-bold">Login</h1>
          <p className="mt-2 text-slate-300">
            React + Go dashboard starter
          </p>
        </div>

        <form onSubmit={handleSubmit(submitLogin)} className="space-y-5">

          {/* Username */}
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">
              Username
            </span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3">
              <User size={18} className="text-cyan-300" />
              <input
                {...register("username")}
                className="w-full bg-transparent outline-none placeholder:text-slate-500"
                placeholder="Enter username"
              />
            </div>
            {errors.username && (
              <p className="mt-1 text-sm text-red-300">
                {errors.username.message}
              </p>
            )}
          </label>

          {/* Password */}
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">
              Password
            </span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3">
              <Lock size={18} className="text-cyan-300" />

              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className="w-full bg-transparent outline-none placeholder:text-slate-500"
                placeholder="Enter password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-cyan-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-300">
                {errors.password.message}
              </p>
            )}
          </label>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input
                type="checkbox"
                className="accent-cyan-400"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-cyan-300 hover:underline"
              onClick={() => alert("Redirect to forgot password page")}
            >
              Forgot password?
            </button>
          </div>

          <button className="w-full rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}