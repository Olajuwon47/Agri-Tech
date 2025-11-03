// otp-form.tsx
"use client"

import { useState } from "react"
import { cn } from "../../lib/utils"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/ui/input-otp"

export function OTPForm({ className, ...props }: React.ComponentProps<"div">) {
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit code")
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      console.log("Verifying OTP:", otp)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically verify the OTP with your backend
      // const response = await fetch('/api/verify-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ otp })
      // })
      
      // if (response.ok) {
      //   // Handle successful verification
      //   console.log("OTP verification successful")
      // }
    } catch (error) {
      console.error("OTP verification failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    try {
      console.log("Resending OTP...")
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Implement resend logic here
      alert("Verification code has been resent!")
    } catch (error) {
      console.error("Failed to resend OTP:", error)
    }
  }

  return (
    <div
      className={cn("flex flex-col gap-6 md:min-h-[450px]", className)}
      {...props}
    >
      <Card className="flex-1 p-0">
        <CardContent className="grid flex-1 p-0 md:grid-cols-2">
          <form className="flex flex-col items-center justify-center p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <Field className="items-center text-center">
                <h1 className="text-2xl font-bold">Enter verification code</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  We sent a 6-digit code to your email
                </p>
              </Field>
              <Field>
                <FieldLabel htmlFor="otp" className="sr-only">
                  Verification code
                </FieldLabel>
                <InputOTP
                  maxLength={6}
                  id="otp"
                  required
                  containerClassName="gap-4"
                  value={otp}
                  onChange={setOtp}
                  disabled={isLoading}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <FieldDescription className="text-center">
                  Enter the 6-digit code sent to your email.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading || otp.length !== 6}>
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>
                <FieldDescription className="text-center">
                  Didn&apos;t receive the code?{" "}
                  <button 
                    type="button" 
                    onClick={handleResend}
                    className="underline underline-offset-2 hover:no-underline"
                  >
                    Resend
                  </button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/assets/AgroPulse.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-container dark:brightness-[0.2] dark:grayscale"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}