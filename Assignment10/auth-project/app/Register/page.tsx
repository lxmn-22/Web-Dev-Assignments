import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import React from "react";

const Register = async () => {
    return (
        <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome for Authentication
            </h2>
            <p className="text-sm max-w-sm mt-2 text-neutral-600 dark:text-neutral-300">
                Please provide all the necessary information.
            </p>

            <form className="my-8">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <div className="flex flex-col">
                        <Label htmlFor="firstname" className="mb-2">
                            First Name
                        </Label>
                        <Input
                            id="firstname"
                            placeholder="John"
                            type="text"
                            name="firstname"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="lastname" className="mb-2">
                            Last Name
                        </Label>
                        <Input
                            id="lastname"
                            placeholder="Doe"
                            type="text"
                            name="lastname"
                        />
                    </div>
                </div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="johndoe@gmail.com"
                    type="email"
                    name="email"
                ></Input>
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    placeholder="********"
                    type="password"
                    name="password"
                    className="mb-4"
                ></Input>

                <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                    Sign Up &rarr;
                </button>

                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
