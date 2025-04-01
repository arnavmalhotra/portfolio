import { Button } from "@/components/ui/button"
import Link from "next/link";
import { LinkedinIcon, MailIcon, GithubIcon } from "lucide-react";
export default function Socials() {
  return (
      <div className=" flex text-2xl md:text-4xl font-bold text-center mt-6 text-gray-300">
        <div className="p-4">
          <Button>
            <GithubIcon />
          <Link href="https://github.com/arnavmalhotra">Github</Link>
        </Button>
         </div>

        <div className="p-4">
        <Button>
          <LinkedinIcon />
          <Link href="https://www.linkedin.com/in/arnav-malhotra-ab424218b/">Linkedin</Link>
        </Button>
        </div>

        <div className="p-4">
        <Button>
          <MailIcon />
          <Link href="mailto:arnav196@my.yorku.ca">Contact</Link>
          </Button>
        </div>
      </div>
  );
}
