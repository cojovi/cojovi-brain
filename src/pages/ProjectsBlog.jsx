import React from "react";
import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
import PlaceholderImage from "../assets/placeholder.png"; // Add a generic placeholder image in your assets

const ProjectsBlog = () => {
  return (
    <div>
      {/* Projects Section */}
      <Section id="projects">
        <div className="container">
          <Heading
            title="Our Projects"
            text="Explore the innovative projects created by our community members. From AI experiments to cutting-edge tech solutions, discover what our talented developers are building."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="border border-n-1/10 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={PlaceholderImage}
                alt="Project Placeholder"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-n-3 mb-4">
                  A brief description of the project. This should highlight the main features and goals.
                </p>
                <Button href="#project-details">View Details</Button>
              </div>
            </div>
            {/* Repeat Project Cards as needed */}
          </div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section id="blog">
        <div className="container">
          <Heading
            title="Our Blog"
            text="Stay updated with the latest tutorials, insights, and stories from our community. Whether you're a beginner or an expert, there's something here for everyone."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Card */}
            <div className="border border-n-1/10 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={PlaceholderImage}
                alt="Blog Post Placeholder"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
                <p className="text-n-3 mb-4">
                  A short summary of the blog post. This should entice readers to click and read more.
                </p>
                <Button href="#read-more">Read More</Button>
              </div>
            </div>
            {/* Repeat Blog Post Cards as needed */}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectsBlog; 