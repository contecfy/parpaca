import AboutContent from "./aboutcontent"
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

async function getAboutData() {
    try {
        const docRef = doc(db, 'pages', 'about');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) return docSnap.data();
    } catch(err) {}
    return null;
}

const AboutUsPage = async () => {
    const data = await getAboutData();
    return (
        <AboutContent data={data} />
    )
}

export default AboutUsPage