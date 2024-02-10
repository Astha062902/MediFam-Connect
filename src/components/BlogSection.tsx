// BlogSection.tsx

import React from "react";
import "./BlogSection.css"; // Import your CSS file

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "10 Tips for a Healthy Family Lifestyle",
    date: "February 1, 2024",
    excerpt:
      "Discover practical tips to maintain a healthy lifestyle for your entire family.",
  },
  {
    title: "The Role of Technology in Family Healthcare",
    date: "January 15, 2024",
    excerpt:
      "Explore how technology is shaping the future of family healthcare and management.",
  },
  // Add more blog posts as needed
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts-container">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
