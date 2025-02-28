import { createContext, useContext, useState } from "react";
import { Blog } from "../types";

interface BlogContextType {
	blogs: Blog[];
	addBlog: (blog: Blog) => void;
	updateBlog: (blog: Blog) => void;
	deleteBlog: (id: number) => void;
}

// created blog context:
const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// Blog state:
	const [blogs, setBlogs] = useState<Blog[]>([]);

	// function to add a blog:
	const addBlog = (blog: Blog) => {
		setBlogs([...blogs, blog]);
	};

	// function to update a blog:
	const updateBlog = (updatedBlog: Blog) => {
		setBlogs(
			blogs.map((blog) =>
				blog.id === updatedBlog.id ? updatedBlog : blog
			)
		);
	};

	// function to delete a blog:
	const deleteBlog = (id: number) => {
		setBlogs(blogs.filter((blog) => blog.id !== id));
	};

	return (
		<BlogContext.Provider
			value={{ blogs, addBlog, updateBlog, deleteBlog }}
		>
			{/* allows all child components to access the context */}
			{children}
		</BlogContext.Provider>
	);
};

export const useBlogs = () => {
	const context = useContext(BlogContext);

	if (!context) {
		throw new Error("useBlogs must be used within a BlogProvider");
	}
	return context;
};
