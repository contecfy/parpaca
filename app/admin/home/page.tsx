'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Import forms
import HeroForm from './forms/HeroForm';
import AboutForm from './forms/AboutForm';
import WhatWeDoForm from './forms/WhatWeDoForm';
import KeyFocusForm from './forms/KeyFocusForm';
import CollaborationForm from './forms/CollaborationForm';
import TeamForm from './forms/TeamForm';
import BottomCTAForm from './forms/BottomCTAForm';

const TABS = [
  { id: 'home_hero', label: 'Hero Section' },
  { id: 'home_about', label: 'About Section' },
  { id: 'home_what_we_do', label: 'What We Do' },
  { id: 'home_key_focuses', label: 'Key Focuses' },
  { id: 'home_collaboration', label: 'Collaboration' },
  { id: 'home_team', label: 'Team Section' },
  { id: 'home_bottom_cta', label: 'Bottom CTA' },
];

const getDefaultData = (id: string) => {
    switch (id) {
        case 'home_hero':
            return {
                title: 'Empowering Communities,\nAcross Africa to Shape\nTheir Own Future',
                description: 'A hybrid NGO think tank and innovation hub...',
                backgroundImage: '/hands.webp'
            };
        case 'home_about':
            return {
                eyebrow: 'About Us',
                title: 'About PARPACA',
                description1: 'The Participatory Action Research...',
                description2: 'PARPACA advances participatory...',
                description3: 'Through collaborations...',
                stats: [
                    { number: '20+', label: 'Research Projects' },
                    { number: '15+', label: 'Strategic Partners' },
                    { number: 'Pan-African', label: 'Operational Reach' }
                ],
                buttonText: 'Read More',
                image: 'https://images.pexels.com/photos/9490630/pexels-photo-9490630.jpeg'
            };
        case 'home_what_we_do':
            return {
                eyebrow: 'Our Services',
                title: 'Driving Change Through Strategic Action',
                description: 'Our Core activities focus on addressing...',
                services: [
                    { number: '01', title: 'No Poverty', description: 'desc', points: ['p1', 'p2', 'p3', 'p4'] },
                    { number: '02', title: 'Zero Hunger', description: 'desc', points: ['p1', 'p2', 'p3', 'p4'] },
                    { number: '03', title: 'Good Health', description: 'desc', points: ['p1', 'p2', 'p3', 'p4'] },
                    { number: '04', title: 'Quality Education', description: 'desc', points: ['p1', 'p2', 'p3', 'p4'] },
                ]
            };
        case 'home_key_focuses':
            return {
                eyebrow: 'Key Focus Areas',
                title: 'Advancing Research,\nAdvocacy & Community Impact',
                description: 'PARPACA focuses on...',
                focusAreas: Array(6).fill({ title: 'Title', description: 'Description' })
            };
        case 'home_collaboration':
            return {
                eyebrow: 'Collaboration & Support',
                title: 'Building Stronger Communities\nThrough Partnerships',
                description: 'We collaborate with vulnerable...',
                partnershipCard: { title: 'Partner', desc1: 'desc', desc2: 'desc2', buttonText: 'Partner', image: ''},
                donationCard: { title: 'Donate', desc1: 'desc', desc2: 'desc2', buttonText: 'Donate', image: ''}
            };
        case 'home_team':
            return {
                eyebrow: 'Our Team',
                title: 'Meet The People',
                description: 'Our multidisciplinary team...',
                teamMembers: Array(4).fill({ name: 'Name', role: 'Role', description: 'Desc', image: '', linkedin: '', twitter: '' })
            };
        case 'home_bottom_cta':
            return {
                eyebrow: 'Join The Movement',
                title: 'Creating Lasting Change',
                description: 'Partner with PARPACA...',
                button1: 'Get Involved',
                button2: 'Contact Us'
            };
        default:
            return {};
    }
}

export default function HomeCMSPage() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const [sectionData, setSectionData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchSectionData = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(db, 'sections', activeTab);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    const rawData = docSnap.data();
                    setSectionData(rawData.data || rawData);
                } else {
                    setSectionData(getDefaultData(activeTab));
                }
            } catch (error) {
                console.error(`Error fetching ${activeTab} data:`, error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSectionData();
    }, [activeTab]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            // Reconstruct the document wrapper { page, name, identifier, data }
            const docPayload = {
                page: 'home',
                name: TABS.find(t => t.id === activeTab)?.label || 'Section',
                identifier: activeTab.replace('home_', ''),
                data: sectionData
            };
            await setDoc(doc(db, 'sections', activeTab), docPayload);
            alert('Section saved successfully!');
        } catch (error) {
            console.error("Error saving content:", error);
            alert('Failed to save content. Check permissions and firebase config.');
        } finally {
            setIsSaving(false);
        }
    };

    const renderActiveForm = () => {
        if (!sectionData) return null;
        
        switch (activeTab) {
            case 'home_hero': return <HeroForm data={sectionData} setData={setSectionData} />;
            case 'home_about': return <AboutForm data={sectionData} setData={setSectionData} />;
            case 'home_what_we_do': return <WhatWeDoForm data={sectionData} setData={setSectionData} />;
            case 'home_key_focuses': return <KeyFocusForm data={sectionData} setData={setSectionData} />;
            case 'home_collaboration': return <CollaborationForm data={sectionData} setData={setSectionData} />;
            case 'home_team': return <TeamForm data={sectionData} setData={setSectionData} />;
            case 'home_bottom_cta': return <BottomCTAForm data={sectionData} setData={setSectionData} />;
            default: return <div>Select a valid section</div>;
        }
    };

    return (
        <div className="max-w-6xl pb-24 mx-auto mt-8 px-4 flex flex-col md:flex-row gap-8">
            {/* SIDEBAR FOR TABS */}
            <aside className="w-full md:w-64 shrink-0">
                <h1 className="text-2xl font-black text-gray-900 mb-6">Home Page CMS</h1>
                <div className="flex flex-col space-y-2">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-3 text-left rounded-lg transition-colors text-sm font-medium border ${
                                activeTab === tab.id 
                                ? 'bg-primary text-white border-primary shadow-md' 
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </aside>
            
            {/* FORM AREA */}
            <main className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b gap-4">
                    <div>
                        <h2 className="text-xl font-bold">{TABS.find(t => t.id === activeTab)?.label} Editor</h2>
                        <p className="text-sm text-gray-500">Edit the content displayed on the main page.</p>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={isSaving || isLoading}
                        className="px-6 py-2.5 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 disabled:opacity-50 text-sm shadow-sm transition-all active:scale-95"
                    >
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
                
                {isLoading ? (
                    <div className="py-20 flex justify-center text-gray-500 italic">
                        Loading section data...
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {renderActiveForm()}
                    </div>
                )}
            </main>
        </div>
    );
}
