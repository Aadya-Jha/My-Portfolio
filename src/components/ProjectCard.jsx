import React from "react";

const ProjectCard = ({ img, title, subtitle, description, stack, link, github }) => {
  return (
    <div
      className="
        relative rounded-3xl
        bg-gradient-to-b from-[#181520] to-[#0f0d14]
        border border-white/10
        p-6

        shadow-[0_0_25px_rgba(166,74,201,0.18)]
        transition-all duration-300 ease-out

        hover:-translate-y-2
        hover:shadow-[0_0_45px_rgba(166,74,201,0.45)]
      "
    >
      <div className="rounded-2xl overflow-hidden mb-6">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-white text-2xl font-semibold font-grotesk">
          {title}
        </h2>

        <p className="text-purple text-sm font-medium font-grotesk">
          {subtitle}
        </p>

        <p className="text-white/70 text-sm leading-relaxed font-grotesk">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1 rounded-full text-xs
                border border-purple/40
                text-purple
                bg-purple/10
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm font-grotesk font-medium hover:text-purple transition"
          >
            Live 
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm font-grotesk font-medium hover:text-purple transition"
          >
            GitHub 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
