import SignupForm from "./signup-form"
import LoginForm from "./login-form"

export default function SignupPage() {
  return (
    <div className="bg-gradient-to-r from-yellow-300 to-lime-900 flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  )
}

export function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-yellow-300 to-lime-900 flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-fit max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}