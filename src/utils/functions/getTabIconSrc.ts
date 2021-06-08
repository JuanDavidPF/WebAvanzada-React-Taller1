import { TabType } from "../interfaces/TabType";

const baseUrl = `${process.env.PUBLIC_URL}/resources/images/icons/`;

export const getTabIconSrc = (tab: TabType) => {
  let icon = "undefined_dashboard_icon.png";

  switch (tab) {
    case "Chassis":
      icon = "chasis_dashboard_icon.png";
      break;

    case "Motherboards":
      icon = "motherboard_dashboard_icon.png";
      break;

    case "CPUs":
      break;

    case "GPUs":
      break;

    case "RAMs":
      icon = "ram_dashboard_icon.png";
      break;

    case "HDDs":
      break;
  }

  return `${baseUrl}${icon}`;
}; //closes getTabIconSrc method
