import AboutUs from "@/components/about";
import AnnouncementSection from "@/components/announcement";
import BannerSection from "@/components/banner";
import ContactSection from "@/components/contact";
import MissionVision from "@/components/missionvision";
import PreviousWinners from "@/components/previouswinners";

export default function Home() {
  const announcements = [
    {
      id: 1,
      title: "2024 Scholarship Applications Now Open",
      date: "July 1, 2024",
      content: "We are excited to announce that applications for our 2024 scholarship program are now open. Don't miss this opportunity to fund your education!",
      link: "/apply"
    },
    {
      id: 2,
      title: "New STEM Grant Program Launched",
      date: "June 15, 2024",
      content: "In partnership with leading tech companies, we're introducing a new grant program for STEM students. Check eligibility and apply now.",
      link: "/stem-grant"
    },
    {
      id: 3,
      title: "Scholarship Workshop Series",
      date: "May 30, 2024",
      content: "Join our upcoming workshop series to learn tips on crafting a standout scholarship application. Sessions start next week!",
      link: "/workshops"
    }
  ];
  return (
   <div>
    <BannerSection/>
    <AnnouncementSection announcements={announcements}/>
    <AboutUs/>
    <PreviousWinners/>
    <MissionVision/>
    <ContactSection/>
   </div>
  );
}
