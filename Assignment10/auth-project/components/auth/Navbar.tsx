import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
            <Link href="/" className="text-xl font-bold">
                Buy your pet
            </Link>

            <ul className="hidden md:flex space-x-4 list-none">
                <li>
                    <Link href="/login" className="hover:text-gray-400">
                        Login
                    </Link>
                </li>

                <li>
                    <Link href="/Register" className="hover:text-gray-400">
                        Register
                    </Link>
                </li>

                <li>
                    <Link
                        href="/admin/dashboard"
                        className="hover:text-gray-400"
                    >
                        Dashboard
                    </Link>
                </li>

                <form>
                    <Button type="submit" variant={"ghost"}>
                        Logout
                    </Button>
                </form>
            </ul>
        </nav>
    );
};

export default Navbar;
