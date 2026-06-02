import AboutSection from "@/components/sections/About";
import BottomCTA from "@/components/sections/Bottom-CTA";
import Collaboration from "@/components/sections/Collaboration";
import Hero from "@/components/sections/Hero";
import KeyFoucs from "@/components/sections/KeyFocuses";
import TeamSection from "@/components/sections/Team";
import Whatwedo from "@/components/sections/What-we-do";
import { dbLite } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore/lite";

export const dynamic = 'force-dynamic';

async function getSectionData(collectionName: string, sectionId: string) {
    try {
        const docRef = doc(dbLite, collectionName, sectionId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().data; // Returns the "data" object inside the document
        }
    } catch(err) {
        console.error(`Error fetching section ${sectionId}:`, err);
    }
    return null;
}

export default async function Home() {
  const heroData: any = await getSectionData('sections', 'home_hero');
  const aboutData: any = await getSectionData('sections', 'home_about');
  const whatWeDoData: any = await getSectionData('sections', 'home_what_we_do');
  const keyFocusData: any = await getSectionData('sections', 'home_key_focuses');
  const collaborationData: any = await getSectionData('sections', 'home_collaboration');
  const teamData: any = await getSectionData('sections', 'home_team');
  const bottomCTAData: any = await getSectionData('sections', 'home_bottom_cta');
  
  return (
    <div className="overflow-x-hidden">
      <Hero data={heroData} />
      <AboutSection data={aboutData} />
      <Whatwedo data={whatWeDoData} />
      <KeyFoucs data={keyFocusData} />
      <Collaboration data={collaborationData} />
      <TeamSection data={teamData} />
      <BottomCTA data={bottomCTAData} />
    </div>
  );
}
