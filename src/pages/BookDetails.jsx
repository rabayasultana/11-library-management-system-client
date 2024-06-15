import { useLoaderData } from "react-router-dom";

const BookDetails = () => {

    const book = useLoaderData();
    const { name, category, author, rating, image, description } = book || {}
    console.log(book)
    return (
        <div>
            <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 md:flex items-center">
    <img className="w-[350px] h-[400px] mx-auto p-2" src={image} alt="Article"/>

    <div className="p-6 ">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{name}</a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{author}</a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{rating}</span>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default BookDetails;