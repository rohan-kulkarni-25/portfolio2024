import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ data }) => {
  return (
    <div className="shadow-lg w-3/12 flex-col flex place-content-between rounded-2xl pb-8 hover:shadow-2xl ">
      <div className="flex flex-col gap-4 p-8">
        <p className="text-4xl font-bold mb-8">{data.title}</p>
        <div className="flex flex-row flex-wrap gap-4">
          {data.skills.map((skill) => {
            return (
              <p
                key={skill}
                className="px-4 py-2 rounded-2xl border border-blue-200 text-base "
              >
                {skill.toString().toUpperCase()}
              </p>
            );
          })}
        </div>
        <p className="text-left text-lg text-gray-500 w-full mt-4">
          {data.content}
        </p>
      </div>
      <div className="flex flex-row gap-4 px-8 ">
        <a
          href={data.demoUrl}
          className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white "
        >
          <FiExternalLink />
          Demo
        </a>
        <a
          href={data.readmore}
          className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white "
        >
          <FaGithub />
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
