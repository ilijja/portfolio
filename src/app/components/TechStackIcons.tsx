import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TechStackIcon } from "@/lib/types";
import Image from "next/image";

export interface Props {
  icon: TechStackIcon;
}

export const techStackIcons: Record<TechStackIcon, string> = {
  [TechStackIcon.REACT]: "/techStackIcons/react.png",
  [TechStackIcon.NODEJS]: "/techStackIcons/nodejs.png",
  [TechStackIcon.NEXTJS]: "/techStackIcons/nextjs.png",
  [TechStackIcon.FFMPEG]: "/techStackIcons/ffmpeg.png",
  [TechStackIcon.MONGO]: "/techStackIcons/mongo.png",
  [TechStackIcon.CLOUDFLARE_R2]: "/techStackIcons/r2.png",
  [TechStackIcon.NEXTAUTH]: "/techStackIcons/nextauth.png",
  [TechStackIcon.PASSPORT]: "/techStackIcons/passport.png",
  [TechStackIcon.AWS_S3_BUCKET]: "/techStackIcons/aws-bucket.png",
  [TechStackIcon.KONVA]: "/techStackIcons/konva.png",
  [TechStackIcon.STRIPE]: "/techStackIcons/stripe.png",
  [TechStackIcon.POLAR]: "/techStackIcons/polar.png",
  [TechStackIcon.LEMONSQUEEZY]: "/techStackIcons/lemonsqueezy.png",
  [TechStackIcon.TYPESCRIPT]: "/techStackIcons/typescript.png",
  [TechStackIcon.SOCKETIO]: "/techStackIcons/socket.png",
  [TechStackIcon.SHADCN]: "/techStackIcons/shadcn.png",
  [TechStackIcon.TAILWIND]: "/techStackIcons/tw.png",
  [TechStackIcon.ANGULAR]: "/techStackIcons/angular.png",
  [TechStackIcon.JAVA]: "/techStackIcons/java.png",
  [TechStackIcon.JAVASCRIPT]: "/techStackIcons/javascript.png",
  [TechStackIcon.OPENAI]: "/techStackIcons/openai.png",
  [TechStackIcon.NODEMAILER]: "/techStackIcons/nodemailer.png",
  [TechStackIcon.GOOGLE_MAPS]: "/techStackIcons/gmaps.png",
  [TechStackIcon.MY_SQL]: "/techStackIcons/mysql.png",
  [TechStackIcon.REDDIT]: "/techStackIcons/reddit.png",
};

const TechStackIcons = ({ icon }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`w-5 h-5 rounded shadow-sm ${
            icon === TechStackIcon.NEXTJS ? "bg-black" : "bg-white"
          } relative flex items-center justify-center opacity-80`}
        >
          <Image
            className="rounded-sm"
            src={techStackIcons[icon]}
            alt={`${icon}-alt`}
            fill
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{icon}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TechStackIcons;
