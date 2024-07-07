import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div className="bg-white shadow-2xl p-10 mx-auto w-[400px] rounded-md">
      <h1 className="text-lg font-semibold">Login</h1>
      <LoginForm />
    </div>
  );
}
