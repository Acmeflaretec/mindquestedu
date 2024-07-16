import AboutUs from "@/components/about";
import AnnouncementSection from "@/components/announcement";
import BannerSection from "@/components/banner";
import ContactSection from "@/components/contact";
import MissionVision from "@/components/missionvision";
import PreviousWinners from "@/components/previouswinners";

export default function Home() {
  return (
   <div>
    <BannerSection/>
    <AnnouncementSection/>
    <AboutUs/>
    <PreviousWinners/>
    <MissionVision/>
    <ContactSection/>
   </div>
  );
}
