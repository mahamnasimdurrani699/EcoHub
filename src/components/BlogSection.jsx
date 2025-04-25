import React from 'react';
import blog1 from '../assets/Images/blog1.png';
import blog2 from '../assets/Images/blog2.jpeg';
import blog3 from '../assets/Images/blog3.jpg';

const blogs = [
  {
    imageUri: blog3,
    link: "/blog",
  },
  {
    imageUri: blog2,
    link: "/blog2"
  },
  {
    imageUri: blog1,
    link: "/blog3"
  },
];

const BlogSection = () => {
  return (
    <div className="border py-8 bg-lightBackground">
      <h2 className="text-2xl font-bold p-2 mb-4 text-center text-secondary">Articles</h2> 
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer border border-gray-400 rounded-lg shadow-light bg-white hover:bg-accent" // Custom background and shadow
          >
            <img
              src={blog.imageUri}
              alt={`Blog image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-x-0 bottom-4 text-center">
              <a
                href={blog.link}
                className="font-bold text-lightBackground bg-accent px-4 py-2 rounded-lg shadow-md hover:bg-darkAccent transition-all"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
