import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-16">
        2026 BOSS Challenge
        <br />
        Portfolio Projects
      </h1>

      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
