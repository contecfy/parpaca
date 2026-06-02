'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import ImageUpload from '@/components/ui/ImageUpload';

export default function ServicesCMSPage() {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchServicesData = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(db, 'pages', 'services');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data());
                } else {
                    setData({
                        heroSubtitle: 'We Offer',
                        heroTitle: 'Our Services',
                        heroDescription: 'As an independent, non-profit policy research and advocacy institution, the Participatory Action Research and Policy Advocacy Center Africa (PARPACA) delivers rigorous, participatory, and policy-relevant services designed to strengthen governance systems, inform evidence-based decision-making, and advance inclusive and sustainable development across Africa.',
                        heroBgImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
                        
                        gridTitle: 'What We Do',
                        servicesList: [
                            { title: 'PARPACA Innovation Ecosystems Hub', description: 'The PARPACA Innovation Ecosystems Hub applies a systems-based, multi-stakeholder approach to turn research into collaborative solutions, piloting and scaling innovations for sustainable impact in a community.' },
                            { title: 'Ecosystem Development and Partnership Facilitation', description: 'The Hub connects universities, startups, policymakers, private sector actors, development partners, and communities, fostering cross-sector collaboration...'},
                            { title: 'Innovation Incubation', description: 'PARPACA supports early-stage research and social innovation initiatives through technical guidance, mentorship...' },
                            { title: 'Acceleration and Scaling', description: 'The Hub facilitates validation, institutionalisation, and scaling of proven solutions...' },
                            { title: 'Research-to-Innovation Translation', description: 'A core function of the Hub is ensuring that research outcomes are translated into implementable programmes...' }
                        ]
                    });
                }
            } catch (error) {
                console.error("Error fetching services data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchServicesData();
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await setDoc(doc(db, 'pages', 'services'), data);
            alert('Services page saved successfully!');
        } catch (error) {
            console.error("Error saving content:", error);
            alert('Failed to save. Check permissions.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleServiceChange = (index: number, field: string, value: string) => {
        const newSvcs = [...data.servicesList];
        newSvcs[index][field] = value;
        setData({...data, servicesList: newSvcs});
    };

    const handleAddService = () => {
        const newSvcs = [...(data.servicesList || []), { title: '', description: '' }];
        setData({ ...data, servicesList: newSvcs });
    };

    const handleRemoveService = (index: number) => {
        const newSvcs = [...(data.servicesList || [])];
        newSvcs.splice(index, 1);
        setData({ ...data, servicesList: newSvcs });
    };

    if (isLoading || !data) return <div className="max-w-4xl pb-24 mx-auto mt-8 flex justify-center text-gray-400">Loading...</div>;

    return (
        <div className="max-w-5xl pb-24 mx-auto mt-8 px-4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <div>
                    <h1 className="text-3xl font-black text-gray-900">Services Page CMS</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage content for the Services page.</p>
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
                        <textarea rows={4} className="w-full border rounded p-2" value={data.heroDescription || ''} onChange={(e) => setData({...data, heroDescription: e.target.value})} />
                   </div>
                </section>

                {/* SERVICES GRID */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Services Grid</h2>
                    <div>
                        <label className="block text-sm font-medium mb-1">Section Title</label>
                        <input type="text" className="w-full max-w-md border rounded p-2" value={data.gridTitle || ''} onChange={(e) => setData({...data, gridTitle: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {data.servicesList?.map((svc: any, idx: number) => (
                            <div key={idx} className="p-4 pt-10 border rounded bg-gray-50 space-y-2 relative">
                                <button onClick={() => handleRemoveService(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-100 px-2 py-1 rounded text-xs font-bold">Remove</button>
                                <span className="absolute top-2 left-2 text-gray-500 font-bold text-xs uppercase">Service {idx + 1}</span>
                                <input type="text" placeholder="Title" className="w-full border rounded p-2 font-semibold" value={svc.title || ''} onChange={(e) => handleServiceChange(idx, 'title', e.target.value)} />
                                <textarea rows={4} placeholder="Description" className="w-full border rounded p-2" value={svc.description || ''} onChange={(e) => handleServiceChange(idx, 'description', e.target.value)} />
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddService} className="mt-6 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                        + Add Service
                    </button>
                </section>
                
            </div>
        </div>
    );
}
