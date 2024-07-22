import { Constants } from "@/utils/profiles/ram/constants";
import Link from "next/link";
import { icons_svg } from "../icons/icons_svgs";

const socials = [
  { icon: icons_svg.gitHub, path: Constants.gitHub },
  { icon: icons_svg.linkedIn, path: Constants.linkedIn },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((element, index) => {
        return (
          <Link key={index} href={element.path} className={iconStyles}>
            {element.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
