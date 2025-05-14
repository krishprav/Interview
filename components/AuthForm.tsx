"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in Failed. Please try again.");
          return;
        }

        await signIn({
          email,
          idToken,
        });

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  };

  const isSignIn = type === "sign-in";

 return (
    <div className="glass-panel lg:min-w-[566px] border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col gap-8 p-12">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="glass-panel p-4 rounded-2xl backdrop-blur-lg border border-white/10 relative">
            <div className="absolute inset-0 rounded-2xl border-2 border-red-500/30 animate-pulse" />
            <Image 
              src="/logo.svg" 
              alt="logo" 
              height={48} 
              width={54}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-4xl font-bold">
            <span className="text-white">100</span>
            <span className="text-red-500">x</span>
            <span className="text-white"> Interview</span>
          </h2>
          <h3 className="text-white/80 text-center text-xl">
            Practice job interviews with AI
          </h3>
        </div>
  
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
                inputClassName="glass-input focus:ring-2 focus:ring-red-500/50 rounded-none py-6 text-white"
              />
            )}
  
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="your@email.com"
              type="email"
              inputClassName="glass-input focus:ring-2 focus:ring-red-500/50 rounded-xl py-6 text-white"
            />
  
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="••••••••"
              type="password"
              inputClassName="glass-input focus:ring-2 focus:ring-red-500/50 rounded-xl py-6 text-white"
            />
  
            <Button 
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
              type="submit"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </Form>
  
        <div className="glass-panel backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
          <p className="text-center text-white/80">
            {isSignIn ? "No account yet?" : "Have an account already?"}
            <Link
              href={!isSignIn ? "/sign-in" : "/sign-up"}
              className="ml-2 font-semibold text-red-400 hover:text-red-300 underline-offset-4"
            >
              {!isSignIn ? "Sign In" : "Sign Up"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
