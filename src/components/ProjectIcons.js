import React from "react";
import { withBaseIcon } from "react-icons-kit";
import { github } from "react-icons-kit/entypo/github";
import { linkedin } from "react-icons-kit/icomoon/linkedin";

const SideIconContainer = withBaseIcon({
  size: 40,
  style: { color: "#5c757d" },
});

export const GitHubIcon = () => <SideIconContainer icon={github} />;
export const LinkedInIcon = () => <SideIconContainer icon={linkedin} />;
