import ServicesContent from "./servicescontent"
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

async function getServicesData() {
    try {
        const docRef = doc(db, 'pages', 'services');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) return docSnap.data();
    } catch(err) {}
    return null;
}

const ServicesPage = async () => {
    const data = await getServicesData();
    return (
        <ServicesContent data={data} />
    )
}

export default ServicesPage