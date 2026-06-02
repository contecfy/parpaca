import BecomeAMemberContent from "./becomeamemebercontent"
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

async function getMemberData() {
    try {
        const docRef = doc(db, 'pages', 'become_member');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) return docSnap.data();
    } catch(err) {}
    return null;
}

const BecomeAMember = async () => {
    const data = await getMemberData();
    return (
        <BecomeAMemberContent data={data} />
    )
}

export default BecomeAMember