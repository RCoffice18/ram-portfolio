import { Button } from "@/components/ui/button";
import { Constants } from "@/utils/profiles/ram/constants";
import Socials from "@/components/Socials/Socials";
import Avatar from "@/components/Avatar/Avatar";
import Statistics from "@/components/Statistics/Statistics";
import { icons_svg } from "@/components/icons/icons_svgs";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{Constants.jobTitle}</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">{Constants.username}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {Constants.description}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href={Constants.resume_path}
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <span>{icons_svg.download}</span>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border-2 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Avatar */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Avatar />
          </div>
        </div>
      </div>
      <Statistics />
    </section>
  );
};

export default Home;
