'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import ImageUpload from '@/components/ui/ImageUpload';

export default function BecomeMemberCMSPage() {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchMemberData = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(db, 'pages', 'become_member');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data());
                } else {
                    setData({
                        heroSubtitle: 'Join Our Network',
                        heroTitle: 'Become a Member',
                        heroDescription: 'Partner with PARPACA and be part of a pan-African movement dedicated to evidence-based policy making, grassroots empowerment, and inclusive innovation.',
                        heroBgImage: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
                        
                        benefitsTitle: 'Why Join PARPACA?',
                        benefitsDescription: 'As a member, you gain access to a collaborative ecosystem designed to amplify your impact.',
                        benefitsList: [
                            { title: 'Exclusive Research', description: "Access cutting-edge participatory research, policy briefs, and evaluation reports before public release." },
                            { title: 'Networking', description: "Connect with policymakers, academic institutions, startups, and community leaders across the continent." },
                            { title: 'Policy Influence', description: "Participate in advocacy campaigns and contribute to evidence-based policy formulations that drive real change." },
                            { title: 'Capacity Building', description: "Receive mentorship and technical guidance to scale your organization's impact and innovation capacity." }
                        ],
                        
                        formTitle: 'Membership Application',
                        formDescription: 'Fill out the form below and our team will get back to you with next steps.'
                    });
                }
            } catch (error) {
                console.error("Error fetching become member data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMemberData();
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await setDoc(doc(db, 'pages', 'become_member'), data);
            alert('Become a Member page saved successfully!');
        } catch (error) {
            console.error("Error saving content:", error);
            alert('Failed to save. Check permissions.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleBenefitChange = (index: number, field: string, value: string) => {
        const newBens = [...data.benefitsList];
        newBens[index][field] = value;
        setData({...data, benefitsList: newBens});
    };

    const handleAddBenefit = () => {
        const newBens = [...(data.benefitsList || []), { title: '', description: '' }];
        setData({ ...data, benefitsList: newBens });
    };

    const handleRemoveBenefit = (index: number) => {
        const newBens = [...(data.benefitsList || [])];
        newBens.splice(index, 1);
        setData({ ...data, benefitsList: newBens });
    };

    if (isLoading || !data) return <div className="max-w-4xl pb-24 mx-auto mt-8 flex justify-center text-gray-400">Loading...</div>;

    return (
        <div className="max-w-5xl pb-24 mx-auto mt-8 px-4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <div>
                    <h1 className="text-3xl font-black text-gray-900">Become a Member CMS</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage content for the Become a Member page.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="px-6 py-2.5 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 disabled:opacity-50 text-sm shadow-sm transition-all"
                >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
            
            <div className="space-y-10">
                {/* HERO SECTION */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Hero Section</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Subtitle (Eyebrow)</label>
                            <input type="text" className="w-full border rounded p-2" value={data.heroSubtitle || ''} onChange={(e) => setData({...data, heroSubtitle: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Background Image</label>
                            <ImageUpload value={data.heroBgImage} onChange={(url: string) => setData({...data, heroBgImage: url})} />
                        </div>
                   </div>
                   <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input type="text" className="w-full border rounded p-2" value={data.heroTitle || ''} onChange={(e) => setData({...data, heroTitle: e.target.value})} />
                   </div>
                   <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea rows={3} className="w-full border rounded p-2" value={data.heroDescription || ''} onChange={(e) => setData({...data, heroDescription: e.target.value})} />
                   </div>
                </section>

                {/* BENEFITS GRID */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Benefits List</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium mb-1">Section Title</label>
                            <input type="text" className="w-full border rounded p-2" value={data.benefitsTitle || ''} onChange={(e) => setData({...data, benefitsTitle: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium mb-1">Section Description</label>
                            <textarea rows={2} className="w-full border rounded p-2" value={data.benefitsDescription || ''} onChange={(e) => setData({...data, benefitsDescription: e.target.value})} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {data.benefitsList?.map((ben: any, idx: number) => (
                            <div key={idx} className="p-4 pt-10 border rounded bg-gray-50 space-y-2 relative">
                                <button onClick={() => handleRemoveBenefit(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-100 px-2 py-1 rounded text-xs font-bold">Remove</button>
                                <span className="absolute top-2 left-2 text-gray-500 font-bold text-xs uppercase">Benefit {idx + 1}</span>
                                <input type="text" placeholder="Title" className="w-full border rounded p-2 font-semibold" value={ben.title || ''} onChange={(e) => handleBenefitChange(idx, 'title', e.target.value)} />
                                <textarea rows={3} placeholder="Description" className="w-full border rounded p-2" value={ben.description || ''} onChange={(e) => handleBenefitChange(idx, 'description', e.target.value)} />
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddBenefit} className="mt-6 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                        + Add Benefit
                    </button>
                </section>
                
                {/* FORM TEXT SECTION */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Application Form Intro Info</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input type="text" className="w-full max-w-md border rounded p-2" value={data.formTitle || ''} onChange={(e) => setData({...data, formTitle: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea rows={2} className="w-full max-w-md border rounded p-2" value={data.formDescription || ''} onChange={(e) => setData({...data, formDescription: e.target.value})} />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
