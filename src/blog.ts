// Blog type definition
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string; // I assume this should be a string (URL) instead of Date
  imageAlt: string;
  slug: string;
};

// Example blog data (you can replace this with actual data)
const blogs: Blog[] = [
  {
    title: "Understanding TypeScript",
    date: "2024-10-20",
    description: "An in-depth look into TypeScript and its powerful features.",
    image: "https://example.com/typescript.png",
    imageAlt: "TypeScript Logo",
    slug: "understanding-typescript",
  },
  {
    title: "Exploring JavaScript ES6",
    date: "2024-10-18",
    description: "Learn about the latest features of JavaScript ES6.",
    image: "https://example.com/es6.png",
    imageAlt: "JavaScript ES6 Logo",
    slug: "exploring-javascript-es6",
  },
];

function displayBlogs(blogPosts: Blog[]) {
  blogPosts.forEach((blog) => {
    console.log(`Title: ${blog.title}`);
    console.log(`Date: ${blog.date}`);
    console.log(`Description: ${blog.description}`);
    console.log(`Image URL: ${blog.image}`);
    console.log(`Image Alt Text: ${blog.imageAlt}`);
    console.log(`Slug: ${blog.slug}`);
    console.log("-----------------------------");

  });
}

displayBlogs(blogs);
