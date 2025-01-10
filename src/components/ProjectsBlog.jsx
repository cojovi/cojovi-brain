import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { curve, benefitImage2 } from "../assets";

const ProjectsBlog = () => {
  return (
    <div className="bg-n-8 relative overflow-hidden">
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6 text-white">
              Projects &amp; Blog
              <span className="inline-block relative">
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Welcome to our Projects &amp; Blog section! Explore the latest projects, read insightful blog posts, and stay updated with the community's advancements in AI, coding, and technology.
            </p>
            <Button href="https://discord.gg/93ZeMUAf" white>
              Join Our Discord
            </Button>
          </div>

          <div className="flex flex-col gap-20">
            {/* Projects Section */}
            <div className="w-full">
              <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="Featured Projects"
                text="Dive into some of the most exciting projects our community has worked on."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {[1, 2, 3, 4, 5, 6].map((project) => (
                  <div
                    key={project}
                    className="border border-n-1/10 rounded-3xl overflow-hidden bg-n-7"
                  >
                    <img
                      src={benefitImage2}
                      alt={`Project ${project}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="h5 mb-2 text-white">Project Title {project}</h3>
                      <p className="body-2 text-n-3 mb-4">
                        A brief description of the project goes here. This is a placeholder for future project details.
                      </p>
                      <Button href="#" size="sm">
                        View Project
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog Section */}
            <div className="w-full">
              <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="Latest Blog Posts"
                text="Stay informed with the latest articles, tutorials, and insights from our community."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {[1, 2, 3].map((post) => (
                  <div
                    key={post}
                    className="border border-n-1/10 rounded-3xl overflow-hidden bg-n-7"
                  >
                    <img
                      src={benefitImage2}
                      alt={`Blog Post ${post}`}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="h5 mb-2 text-white">Blog Post Title {post}</h3>
                      <p className="body-2 text-n-3 mb-4">
                        A brief excerpt from the blog post goes here. This is a placeholder for future blog content.
                      </p>
                      <Button href="#" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectsBlog; 