//pages
import { v4 as uuidv4 } from "uuid";

import Layout from "./pages/Layout";

import Plans from "./components/Plans/Plans";
import Features from "./components/Features/Features";
import Music from "./components/Music/Music";
import Reviews from "./components/Reviews/Reviews";
import Devices from "./components/Devices/Devices";
import Download from "./components/Download/Download";
import Help from "./components/Help/Help";
import Community from "./components/Community/Community";
import Backstage from "./components/Backstage/Backstage";

import Flow from "./components/Flow/Flow";
import IdentifySongs from "./components/IdentifySongs/IdentifySongs";
import TransferYourLibrary from "./components/TransferYourLibrary/TransferYourLibrary";
import Lyrics from "./components/Lyrics/Lyrics";
import OfflineListening from "./components/OfflineListening/OfflineListening";
import HiFi from "./components/HiFi/HiFi";

import Explore from "./components/Explore/Explore";
import Charts from "./components/Charts/Charts";
import MostPopularRelease from "./components/MostPopularRelease/MostPopularRelease";
import NewReleases from "./components/NewReleases/NewReleases";
import Radio from "./components/Radio/Radio";
import Podcasts from "./components/Podcasts/Podcasts";
import MusicForAllMoments from "./components/MusicForAllMoments/MusicForAllMoments";
import Newsroom from "./components/Newsroom/Newsroom";

import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import Investors from "./components/Investors/Investors";
import BrandPartnerships from "./components/BrandPartnerships/BrandPartnerships";
import MusiciansAndPodcasters from "./components/MusiciansAndPodcasters/MusiciansAndPodcasters";
import Developers from "./components/Developers/Developers";
import Press from "./components/Press/Press";
import Careers from "./components/Careers/Careers";
import ACPS from "./components/ACPS/ACPS";

import Legal from "./components/Legal/Legal";
import TermsAndConditionsOfUse from "./components/TermsAndConditionsOfUse/TermsAndConditionsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Cookies from "./components/Cookies/Cookies";
import OpenSourceSoftwareReport from "./components/OpenSourceSoftwareReport(EN)/OpenSourceSoftwareReport(EN)";
import VulnerabilitiesDisclosurePrivacy from "./components/VulnerabilitiesDisclosurePrivacy(EN)/VulnerabilitiesDisclosurePrivacy(EN)";

export interface Route {
   path: string;
   name: string;
   component: JSX.Element;
   layout: string;
   id: string;
}

export const headerRoutes: Route[] = [
   {
      path: "/plans",
      name: "Plans",
      component: <Plans />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/features",
      name: "Features",
      component: <Features />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/music",
      name: "Music",
      component: <Music />,
      layout: "/home",
      id: uuidv4(),
   },
];

export const footerRoutesColOne: Route[] = [
   {
      path: "/home",
      name: "Shuttle",
      component: <Layout />,
      layout: "",
      id: uuidv4(),
   },
   {
      path: "/plans",
      name: "Plans",
      component: <Plans />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/reviews",
      name: "Reviews",
      component: <Reviews />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/devices",
      name: "Devices",
      component: <Devices />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/download",
      name: "Download the desktop app",
      component: <Download />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/help",
      name: "Help",
      component: <Help />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/community",
      name: "Community & feedback",
      component: <Community />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/backstage",
      name: "The Backstage",
      component: <Backstage />,
      layout: "/home",
      id: uuidv4(),
   },
];
export const footerRoutesColTwo: Route[] = [
   {
      path: "/features",
      name: "Features",
      component: <Layout />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/flow",
      name: "Flow",
      component: <Flow />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/identify_songs",
      name: "Identify Songs",
      component: <IdentifySongs />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/transfer_your_library",
      name: "Transfer your library",
      component: <TransferYourLibrary />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/lyrics",
      name: "Lyrics",
      component: <Lyrics />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/offline_listening",
      name: "Offline listening",
      component: <OfflineListening />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/hifi",
      name: "High Fidelity (HiFi)",
      component: <HiFi />,
      layout: "/home",
      id: uuidv4(),
   },
];
export const footerRoutesColThree: Route[] = [
   {
      path: "/explore",
      name: "Explore",
      component: <Explore />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/charts",
      name: "Charts",
      component: <Charts />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/most_popular_release",
      name: "Most popular release",
      component: <MostPopularRelease />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/new_releases",
      name: "New releases",
      component: <NewReleases />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/radio",
      name: "Radio",
      component: <Radio />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/podcasts",
      name: "Podcasts",
      component: <Podcasts />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/music_for_all_moments",
      name: "Music for all moments",
      component: <MusicForAllMoments />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/newsroom",
      name: "Newsroom",
      component: <Newsroom />,
      layout: "/home",
      id: uuidv4(),
   },
];
export const footerRoutesColFour: Route[] = [
   {
      path: "/who_are_we",
      name: "Who are we?",
      component: <WhoAreWe />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/investors",
      name: "Investors",
      component: <Investors />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/brand_partnerships",
      name: "Brand Partnerships",
      component: <BrandPartnerships />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/musicians_and_podcasters",
      name: "Musicians and podcasters",
      component: <MusiciansAndPodcasters />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/developers",
      name: "Developers",
      component: <Developers />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/press",
      name: "Press",
      component: <Press />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/careers",
      name: "Careers",
      component: <Careers />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/acps",
      name: "ACPS",
      component: <ACPS />,
      layout: "/home",
      id: uuidv4(),
   },
];
export const footerRoutesColFive: Route[] = [
   {
      path: "/ledal",
      name: "Legal",
      component: <Legal />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/terms_and_conditions_of_use",
      name: "Terms and Conditions of Use",
      component: <TermsAndConditionsOfUse />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/privacy_policy",
      name: "Privacy Policy",
      component: <PrivacyPolicy />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/cookies",
      name: "Cookies",
      component: <Cookies />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/open_source_software_report",
      name: "Open Source Software Report (EN)",
      component: <OpenSourceSoftwareReport />,
      layout: "/home",
      id: uuidv4(),
   },
   {
      path: "/vulnerabilities_disclosure_privacy",
      name: "Vulnerabilities Disclosure Privacy (EN)",
      component: <VulnerabilitiesDisclosurePrivacy />,
      layout: "/home",
      id: uuidv4(),
   },
];
