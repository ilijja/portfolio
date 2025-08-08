import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project, TechStackIcon } from "@/lib/types";
import Image from "next/image";
import TechStackIcons from "./TechStackIcons";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: Project;
}

const PreviewDialog = ({ open = false, setOpen, project }: Props) => {
  const getProjectName = (name: string) => {
    switch (name) {
      case "qwaak.app":
        return "qwaak";
      case "snapshare":
        return "rsstox";
      case "storywidget":
        return name;
      case "Smart restaurant":
        return "restt";
      case "reddtick":
        return name;
      default:
        return "qwaak";
    }
  };

  let videoUrl = `https://pub-38acb385c488401690eb1cf52880f92f.r2.dev/${getProjectName(
    project.name
  )}.mp4`;

  return (
    <Dialog open={open} onOpenChange={(open: boolean) => setOpen(open)}>
      <form>
        <DialogContent className="sm:max-w-[825px] bg-zinc-100">
          <DialogHeader>
            <DialogTitle className="flex gap-2 items-center">
              <Image
                src={project.icon}
                alt="icon"
                className="rounded-lg shadow-sm"
                width={36}
                height={32}
              />
              {project.name}
            </DialogTitle>
            <DialogDescription>{project.desc}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div>
              <video
                crossOrigin="anonymous"
                controls
                className="rounded-2xl"
                src={videoUrl}
              />
            </div>
          </div>
          <DialogFooter className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm text-font-secondary">
                Built with:
              </p>
              <div className="flex gap-1">
                {project.techStack.map((icon: TechStackIcon) => (
                  <TechStackIcons key={icon} icon={icon} />
                ))}
              </div>
            </div>
            <DialogClose asChild>
              <button className="px-2 py-1 rounded bg-zinc-800 text-zinc-50 text-sm cursor-pointer">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default PreviewDialog;
