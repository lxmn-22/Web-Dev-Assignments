import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./shared/BlogContext";
import { useState } from "react";
import { Blog } from "./types";
import ArticleList from "./components/ArticleList";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";

function App() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

	const openModalForNewBlog = () => {
		setEditingBlog(undefined);
		setModalOpen(true);
	};

	const openModalForEdit = (blog: Blog) => {
		setEditingBlog(blog);
		setModalOpen(true);
	};

	return (
		<>
			<BlogProvider>
				<Navigation />
				<div className="flex justify-center">
					<section className="mx-auto p-6">
						<div>
							<button
								onClick={openModalForNewBlog}
								className="flex items-center justify-center text-white ml-[7rem] bg-black rounded px-4 py-2 mb-4 "
							>
								Add New Blog
								<IoMdAddCircle className="ml-[.5rem]" />{" "}
							</button>

							<ArticleList onEdit={openModalForEdit} />
							{isModalOpen && (
								<Modal onClose={() => setModalOpen(false)}>
									<BlogForm
										existingBlog={editingBlog}
										onClose={() => setModalOpen(false)}
									/>
								</Modal>
							)}
						</div>
					</section>
					<div className="w-[30%]">
						<PeopleToFollow />
						<TrendsList />
						<TopicsList />
					</div>
				</div>
			</BlogProvider>
		</>
	);
}

export default App;
