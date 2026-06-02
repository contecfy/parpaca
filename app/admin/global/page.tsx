'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import ImageUpload from '@/components/ui/ImageUpload';

const TABS = [
    { id: 'global_branding', label: 'Branding' },
    { id: 'global_contact', label: 'Contact Information' },
    { id: 'global_socials', label: 'Social Media' },
    { id: 'global_footer', label: 'Footer Settings' }
];

export default function GlobalComponentsCMSPage() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchGlobalData = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(db, 'globals', 'layout');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data());
                } else {
                    setData({
                        location: 'Uganda, Central Kampala, Nakawa Division, Mbuya II,',
                        phone1: '+256 772 873 735',
                        phone2: '+49 1521 474 0368',
                        email: 'info@parpacaafrica.org',
                        socialFacebook: '/',
                        socialInstagram: '/',
                        socialTwitter: '/',
                        socialLinkedin: '/',
                        socialWhatsapp: 'tel:+4915214740368',
                        logoImage: '/logo.jpg',
                        footerMission: 'PARPACAs mission is to empower marginalized communities in Uganda through participatory action research, policy advocacy, and sustainable development initiatives.',
                        footerNewsletterTitle: 'Join Our Newsletter',
                        footerNewsletterDescription: 'Stay updated with our programs, awareness campaigns, community events, and impact stories.'
                    });
                }
            } catch (error) {
                console.error("Error fetching global data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGlobalData();
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await setDoc(doc(db, 'globals', 'layout'), data);
            alert('Global settings saved successfully!');
        } catch (error) {
            console.error("Error saving content:", error);
            alert('Failed to save. Check permissions.');
        } finally {
            setIsSaving(false);
        }
    };

    const renderActiveForm = () => {
        if (!data) return null;

        switch (activeTab) {
            case 'global_branding':
                return (
                    <section className="space-y-4">
                        <div className="max-w-md">
                            <label className="block text-sm font-medium mb-1">Company Logo (Header & Footer)</label>
                            <ImageUpload 
                                value={data.logoImage} 
                                onChange={(url: string) => setData({...data, logoImage: url})} 
                            />
                        </div>
                    </section>
                );
            case 'global_contact':
                return (
                    <section className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Location Address</label>
                                <input type="text" className="w-full border rounded p-2" value={data.location || ''} onChange={(e) => setData({...data, location: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Primary Email</label>
                                <input type="text" className="w-full border rounded p-2" value={data.email || ''} onChange={(e) => setData({...data, email: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Primary Phone</label>
                                <input type="text" className="w-full border rounded p-2" value={data.phone1 || ''} onChange={(e) => setData({...data, phone1: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Secondary Phone</label>
                                <input type="text" className="w-full border rounded p-2" value={data.phone2 || ''} onChange={(e) => setData({...data, phone2: e.target.value})} />
                            </div>
                        </div>
                    </section>
                );
            case 'global_socials':
                return (
                    <section className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Facebook URL</label>
                                <input type="text" className="w-full border rounded p-2" value={data.socialFacebook || ''} onChange={(e) => setData({...data, socialFacebook: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">X (Twitter) URL</label>
                                <input type="text" className="w-full border rounded p-2" value={data.socialTwitter || ''} onChange={(e) => setData({...data, socialTwitter: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Instagram URL</label>
                                <input type="text" className="w-full border rounded p-2" value={data.socialInstagram || ''} onChange={(e) => setData({...data, socialInstagram: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
                                <input type="text" className="w-full border rounded p-2" value={data.socialLinkedin || ''} onChange={(e) => setData({...data, socialLinkedin: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">WhatsApp URL (e.g. tel:+49...)</label>
                                <input type="text" className="w-full border rounded p-2" value={data.socialWhatsapp || ''} onChange={(e) => setData({...data, socialWhatsapp: e.target.value})} />
                            </div>
                        </div>
                    </section>
                );
            case 'global_footer':
                return (
                    <section className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Footer Mission Description</label>
                            <textarea rows={3} className="w-full border rounded p-2" value={data.footerMission || ''} onChange={(e) => setData({...data, footerMission: e.target.value})} />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Newsletter Title</label>
                                <input type="text" className="w-full border rounded p-2" value={data.footerNewsletterTitle || ''} onChange={(e) => setData({...data, footerNewsletterTitle: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Newsletter Description</label>
                                <textarea rows={3} className="w-full border rounded p-2" value={data.footerNewsletterDescription || ''} onChange={(e) => setData({...data, footerNewsletterDescription: e.target.value})} />
                            </div>
                        </div>
                    </section>
                );
            default:
                return <div>Select a valid section.</div>;
        }
    };

    return (
        <div className="max-w-6xl pb-24 mx-auto mt-8 px-4 flex flex-col md:flex-row gap-8">
            {/* SIDEBAR FOR TABS */}
            <aside className="w-full md:w-64 shrink-0">
                <h1 className="text-2xl font-black text-gray-900 mb-6">Global Settings</h1>
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
                        <h2 className="text-xl font-bold">{TABS.find(t => t.id === activeTab)?.label} CMS</h2>
                        <p className="text-sm text-gray-500">Edit the global content displayed across the site.</p>
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
                        Loading settings...
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
