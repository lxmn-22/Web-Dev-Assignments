"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";

const login = async (formData: FormData) => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	try {
		await signIn("credentials", {
			redirect: false,
			callbackUrl: "/",
			email,
			password,
		});
	} catch (error) {
		const someError = error as CredentialsSignin;

		return someError.cause;
	}
	redirect("/");
};

// Registering the user:
const register = async (formData: FormData) => {
	const firstName = formData.get("firstname") as string;
	const lastName = formData.get("lastname") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	// console.log(firstName);
	// console.log(lastName);
	// console.log(email);
	// console.log(password);

	if (!firstName || !lastName || !email || !password) {
		throw new Error("Please, fill all fields.");
	}

	await connectDB();

	// existing user:
	const existingUser = await User.findOne({ email });

	if (existingUser) throw new Error("User already exists!");

	const hashedPassword = await hash(password, 10);

	await User.create({ firstName, lastName, email, password: hashedPassword });
	console.log("User created.");

	redirect("/login");
};

export { register, login };
