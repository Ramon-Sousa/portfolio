import { Project } from '@prisma/client';

interface ProjectCardProps {
  project: Project & { category: { title: string }[] };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src="..." alt={project.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-2">{project.category.map(cat => cat.title).join(', ')}</p>
      <a href={`/projects/${project.slug}`} className="text-blue-500 hover:underline">
        Ver mais
      </a>
    </div>
  );
};

export default ProjectCard;
