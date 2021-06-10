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
      icon = "cpu_dashboard_icon.png";
      break;

    case "GPUs":
      icon = "gpu_dashboard_icon.png";
      break;

    case "RAMs":
      icon = "ram_dashboard_icon.png";
      break;

    case "HDDs":
      icon = "hdd_dashboard_icon.png";
      break;
  }

  return `${baseUrl}${icon}`;
}; //closes getTabIconSrc method
