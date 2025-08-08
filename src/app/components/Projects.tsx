'use client'
import Image from "next/image";
import { useState } from "react";
import { Eye, Play } from "lucide-react";
import PreviewDialog from "./PreviewDialog";
import TechStackIcons from "./TechStackIcons";
import { Project } from "@/lib/types";
import { TechStackIcon } from "@/lib/types";

const projects: Project[] = [
  {
    name: "qwaak.app",
    icon: "/logos/qwaak.png",
    url: "https://qwaak.app",
    desc: "Automate and edit Tiktok videos with AI influencers",
    techStack: [
      TechStackIcon.NEXTJS,
      TechStackIcon.NODEJS,
      TechStackIcon.MONGO,
      TechStackIcon.FFMPEG,
      TechStackIcon.CLOUDFLARE_R2,
      TechStackIcon.NEXTAUTH,
    ],
  },
  {
    name: "Smart restaurant",
    icon: "/logos/restaurant.png",
    desc: "Ordering and payment system via QR code for restaurants",

    techStack: [
      TechStackIcon.REACT,
      TechStackIcon.NODEJS,
      TechStackIcon.MONGO,
      TechStackIcon.KONVA,
    ],
  },
  {
    name: "reddtick",
    icon: "/logos/reddit.png",
    desc: "Track any subreddit activity and schedule post at the best time",
    techStack: [
      TechStackIcon.NEXTJS,
      TechStackIcon.MONGO,
      TechStackIcon.NEXTAUTH,
    ],
  },
  {
    name: "storywidget",
    icon: "/logos/story.png",
    desc: "Create interactive stories and widgets directly on your website",
    techStack: [
      TechStackIcon.REACT,
      TechStackIcon.NODEJS,
      TechStackIcon.MONGO,
      TechStackIcon.PASSPORT,
      TechStackIcon.AWS_S3_BUCKET,
    ],
  },
  {
    name: "snapshare",
    icon: "/logos/rss.png",
    desc: "Automatic RSS to Twitter repurposing content with AI",
    techStack: [TechStackIcon.REACT, TechStackIcon.NODEJS, TechStackIcon.MONGO],
  },
  {
    name: "slovenia-transfer",
    icon: "/logos/transfer.png",
    url: "https://booking.slovenia-transfer.com/reservation",
    desc: "Automated booking and payment system for Slovenia Transfer",
    techStack: [TechStackIcon.REACT, TechStackIcon.NODEJS, TechStackIcon.MONGO],
  },
];

const ProjectItem = ({ project }: { project: Project }) => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setPreviewOpen(true);
  };

  const handleExitModal = (open: boolean) => {
    setSelectedProject(null);
    setPreviewOpen(open);
  };

  return (
    <div className="w-full min-h-56 flex items-center justify-center">
      <div
        onClick={() => setPreviewOpen(true)}
        className="bg-zinc-100 p-4 rounded-2xl shadow-sm w-full h-full hover:scale-[103%] cursor-pointer duration-200 border-zinc-200 flex flex-col justify-between gap-4"
      >
        <div className="flex gap-2 items-start">
          <Image
            src={project.icon}
            className="rounded-lg shadow-sm"
            alt={`${project.name}-icon`}
            width={36}
            height={32}
          />
          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <p className="font-semibold">{project.name}</p>
              <p className="font-light text-sm text-font-secondary">
                {project.desc}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-sm text-font-secondary">
                Built with:
              </p>
              <div className="flex gap-1">
                {project.techStack.map((icon: TechStackIcon) => (
                  <TechStackIcons key={icon} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end gap-1">
          <button
            onClick={() => handleSelectProject(project)}
            className="bg-white border cursor-pointer flex gap-1 items-center border-zinc-200 px-2 py-1 text-sm rounded-lg"
          >
            <Play size={14} />
            Demo
          </button>
          {project.url && (
            <button
              onClick={() => window.open(project.url, "_blank")}
              className="bg-zinc-200 border border-zinc-200 cursor-pointer hover:bg-zinc-300 duration-100 flex items-center gap-1 px-2 py-1 text-sm rounded-lg"
            >
              <Eye size={14} />
              Visit site
            </button>
          )}
        </div>
      </div>

      <PreviewDialog
        open={previewOpen}
        project={project}
        setOpen={(open: boolean) => handleExitModal(open)}
      />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4 sm:mt-16">
      {projects.map((project, index) => {
        return <ProjectItem key={index} project={project} />;
      })}
    </div>
  );
};

export default Projects;
