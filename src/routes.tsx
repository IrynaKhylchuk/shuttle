//pages
import { v4 as uuidv4 } from "uuid";

import Layout from "./pages/Layout";
import Search from "./components/MainContainer/Search";

import Plans from "./components/Footer/Plans/Plans";
import Features from "./components/Footer/Features/Features";
import Music from "./components/Footer/Music/Music";
import Reviews from "./components/Footer/Reviews/Reviews";
import Devices from "./components/Footer/Devices/Devices";
import Download from "./components/Footer/Download/Download";
import Help from "./components/Footer/Help/Help";
import Community from "./components/Footer/Community/Community";
import Backstage from "./components/Footer/Backstage/Backstage";

import Flow from "./components/Footer/Flow/Flow";
import IdentifySongs from "./components/Footer/IdentifySongs/IdentifySongs";
import TransferYourLibrary from "./components/Footer/TransferYourLibrary/TransferYourLibrary";
import Lyrics from "./components/Footer/Lyrics/Lyrics";
import OfflineListening from "./components/Footer/OfflineListening/OfflineListening";
import HiFi from "./components/Footer/HiFi/HiFi";

import Explore from "./components/Footer/Explore/Explore";
import Charts from "./components/Footer/Charts/Charts";
import MostPopularRelease from "./components/Footer/MostPopularRelease/MostPopularRelease";
import NewReleases from "./components/Footer/NewReleases/NewReleases";
import Radio from "./components/Footer/Radio/Radio";
import Podcasts from "./components/Footer/Podcasts/Podcasts";
import MusicForAllMoments from "./components/Footer/MusicForAllMoments/MusicForAllMoments";
import Newsroom from "./components/Footer/Newsroom/Newsroom";

import WhoAreWe from "./components/Footer/WhoAreWe/WhoAreWe";
import Investors from "./components/Footer/Investors/Investors";
import BrandPartnerships from "./components/Footer/BrandPartnerships/BrandPartnerships";
import MusiciansAndPodcasters from "./components/Footer/MusiciansAndPodcasters/MusiciansAndPodcasters";
import Developers from "./components/Footer/Developers/Developers";
import Press from "./components/Footer/Press/Press";
import Careers from "./components/Footer/Careers/Careers";
import ACPS from "./components/Footer/ACPS/ACPS";

import Legal from "./components/Footer/Legal/Legal";
import TermsAndConditionsOfUse from "./components/Footer/TermsAndConditionsOfUse/TermsAndConditionsOfUse";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy/PrivacyPolicy";
import Cookies from "./components/Footer/Cookies/Cookies";
import OpenSourceSoftwareReport from "./components/Footer/OpenSourceSoftwareReport(EN)/OpenSourceSoftwareReport(EN)";
import VulnerabilitiesDisclosurePrivacy from "./components/Footer/VulnerabilitiesDisclosurePrivacy(EN)/VulnerabilitiesDisclosurePrivacy(EN)";

export interface Route {
   path: string;
   name: string;
   component: JSX.Element;
   layout: string;
   id: string;
}

export const footerRoutesColOne: Route[] = [
   {
      path: "/",
      name: "Shuttle",
      component: <Layout />,
      layout: "",
      id: uuidv4(),
   },
   {
      path: "/plans",
      name: "Plans",
      component: <Plans />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/reviews",
      name: "Reviews",
      component: <Reviews />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/devices",
      name: "Devices",
      component: <Devices />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/download",
      name: "Download the desktop app",
      component: <Download />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/help",
      name: "Help",
      component: <Help />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/community",
      name: "Community & feedback",
      component: <Community />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/backstage",
      name: "The Backstage",
      component: <Backstage />,
      layout: "/",
      id: uuidv4(),
   },
];

export const footerRoutesColTwo: Route[] = [
   {
      path: "/features",
      name: "Features",
      component: <Layout />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/flow",
      name: "Flow",
      component: <Flow />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/identify_songs",
      name: "Identify Songs",
      component: <IdentifySongs />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/transfer_your_library",
      name: "Transfer your library",
      component: <TransferYourLibrary />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/lyrics",
      name: "Lyrics",
      component: <Lyrics />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/offline_listening",
      name: "Offline listening",
      component: <OfflineListening />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/hifi",
      name: "High Fidelity (HiFi)",
      component: <HiFi />,
      layout: "/",
      id: uuidv4(),
   },
];

export const footerRoutesColThree: Route[] = [
   {
      path: "/explore",
      name: "Explore",
      component: <Explore />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/charts",
      name: "Charts",
      component: <Charts />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/most_popular_release",
      name: "Most popular release",
      component: <MostPopularRelease />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/new_releases",
      name: "New releases",
      component: <NewReleases />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/radio",
      name: "Radio",
      component: <Radio />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/podcasts",
      name: "Podcasts",
      component: <Podcasts />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/music_for_all_moments",
      name: "Music for all moments",
      component: <MusicForAllMoments />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/newsroom",
      name: "Newsroom",
      component: <Newsroom />,
      layout: "/",
      id: uuidv4(),
   },
];

export const footerRoutesColFour: Route[] = [
   {
      path: "/who_are_we",
      name: "Who are we?",
      component: <WhoAreWe />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/investors",
      name: "Investors",
      component: <Investors />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/brand_partnerships",
      name: "Brand Partnerships",
      component: <BrandPartnerships />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/musicians_and_podcasters",
      name: "Musicians and podcasters",
      component: <MusiciansAndPodcasters />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/developers",
      name: "Developers",
      component: <Developers />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/press",
      name: "Press",
      component: <Press />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/careers",
      name: "Careers",
      component: <Careers />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/acps",
      name: "ACPS",
      component: <ACPS />,
      layout: "/",
      id: uuidv4(),
   },
];

export const footerRoutesColFive: Route[] = [
   {
      path: "/legal",
      name: "Legal",
      component: <Legal />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/terms_and_conditions_of_use",
      name: "Terms and Conditions of Use",
      component: <TermsAndConditionsOfUse />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/privacy_policy",
      name: "Privacy Policy",
      component: <PrivacyPolicy />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/cookies",
      name: "Cookies",
      component: <Cookies />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/open_source_software_report",
      name: "Open Source Software Report (EN)",
      component: <OpenSourceSoftwareReport />,
      layout: "/",
      id: uuidv4(),
   },
   {
      path: "/vulnerabilities_disclosure_privacy",
      name: "Vulnerabilities Disclosure Privacy (EN)",
      component: <VulnerabilitiesDisclosurePrivacy />,
      layout: "/",
      id: uuidv4(),
   },
];

export const search: Route[] = [
   { path: "/search", name: "Search", component: <Search />, layout: "/", id: uuidv4() },
];
