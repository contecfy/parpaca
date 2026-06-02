'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import ImageUpload from '@/components/ui/ImageUpload';

export default function AboutCMSPage() {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchAboutData = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(db, 'pages', 'about');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data());
                } else {
                    setData({
                        heroSubtitle: 'Who We Are',
                        heroTitleLine1: 'Catalyzing Change',
                        heroTitleLine2: 'Through Research',
                        heroDescription: 'We are an independent non-profit organisation and NGO think tank advancing participatory research, policy analysis, and strategic advocacy across Africa.',
                        heroBgImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
                        
                        storyTitle: 'Our Story',
                        storyDescription: 'The Participatory Action Research and Policy Advocacy Center Africa (PARPACA) is an independent, non-profit NGO and think tank...',
                        storyImage: 'https://images.pexels.com/photos/9490630/pexels-photo-9490630.jpeg',
                        
                        missionTitle: 'Our Mission',
                        missionDescription: 'To advance sustainable development in Africa through participatory research, inclusive innovation, and evidence-based policy.',
                        visionTitle: 'Our Vision',
                        visionDescription: 'To be Africas leading evidence-driven innovation hub advancing equitable growth, resilient communities, and sustainable impact.',
                        
                        competenceTitle: 'Core Competences',
                        competenceDescription: 'Our specialized expertise enables us to drive sustainable impact across Africa.',
                        competencesList: [
                            { title: 'Monitoring, Evaluation, Accountability, and Learning (MEAL)', description: 'PARPACA designs and implements robust MEAL frameworks...', image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg' },
                            { title: 'Financial Management Oversight', description: 'PARPACA delivers rigorous financial management oversight...', image: 'https://images.pexels.com/photos/7947634/pexels-photo-7947634.jpeg' },
                            { title: 'Innovation Ecosystems and Research-to-Impact Integration', description: 'PARPACA facilitates dynamic multi-stakeholder innovation ecosystems...', image: 'https://images.pexels.com/photos/390426/pexels-photo-390426.png' }
                        ],
                        
                        principlesTitle: 'Key Principles of Participatory M&E',
                        principlesList: [
                            { title: 'Inclusivity', description: 'Engage all stakeholders (beneficiaries, staff, donors, partners) in the M&E process.' },
                            { title: 'Empowerment', description: 'Enable communities to take ownership of data collection and analysis.' },
                            { title: 'Transparency', description: 'Share findings openly with all stakeholders.' },
                            { title: 'Flexibility', description: 'Adapt M&E tools to local contexts and changing needs.' },
                            { title: 'Learning-Oriented', description: 'Use findings to improve programs rather than just report to donors.' }
                        ]
                    });
                }
            } catch (error) {
                console.error("Error fetching about data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAboutData();
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await setDoc(doc(db, 'pages', 'about'), data);
            alert('About page saved successfully!');
        } catch (error) {
            console.error("Error saving content:", error);
            alert('Failed to save. Check permissions.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleCompetenceChange = (index: number, field: string, value: string) => {
        const newComps = [...data.competencesList];
        newComps[index][field] = value;
        setData({...data, competencesList: newComps});
    };

    const handlePrincipleChange = (index: number, field: string, value: string) => {
        const newPrins = [...data.principlesList];
        newPrins[index][field] = value;
        setData({...data, principlesList: newPrins});
    };

    const handleAddCompetence = () => {
        const newComps = [...(data.competencesList || []), { title: '', description: '', image: '' }];
        setData({ ...data, competencesList: newComps });
    };

    const handleRemoveCompetence = (index: number) => {
        const newComps = [...(data.competencesList || [])];
        newComps.splice(index, 1);
        setData({ ...data, competencesList: newComps });
    };

    const handleAddPrinciple = () => {
        const newPrins = [...(data.principlesList || []), { title: '', description: '' }];
        setData({ ...data, principlesList: newPrins });
    };

    const handleRemovePrinciple = (index: number) => {
        const newPrins = [...(data.principlesList || [])];
        newPrins.splice(index, 1);
        setData({ ...data, principlesList: newPrins });
    };

    if (isLoading || !data) return <div className="max-w-4xl pb-24 mx-auto mt-8 flex justify-center text-gray-400">Loading...</div>;

    return (
        <div className="max-w-5xl pb-24 mx-auto mt-8 px-4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <div>
                    <h1 className="text-3xl font-black text-gray-900">About Page CMS</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage content for the About Us page.</p>
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
                   <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title Line 1</label>
                            <input type="text" className="w-full border rounded p-2" value={data.heroTitleLine1 || ''} onChange={(e) => setData({...data, heroTitleLine1: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Title Line 2 (Highlight)</label>
                            <input type="text" className="w-full border rounded p-2" value={data.heroTitleLine2 || ''} onChange={(e) => setData({...data, heroTitleLine2: e.target.value})} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea rows={3} className="w-full border rounded p-2" value={data.heroDescription || ''} onChange={(e) => setData({...data, heroDescription: e.target.value})} />
                    </div>
                </section>

                {/* OUR STORY */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Our Story</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Section Title</label>
                            <input type="text" className="w-full border rounded p-2" value={data.storyTitle || ''} onChange={(e) => setData({...data, storyTitle: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Story Image</label>
                            <ImageUpload value={data.storyImage} onChange={(url: string) => setData({...data, storyImage: url})} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Story Description</label>
                        <textarea rows={4} className="w-full border rounded p-2" value={data.storyDescription || ''} onChange={(e) => setData({...data, storyDescription: e.target.value})} />
                    </div>
                </section>

                {/* MISSION & VISION */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Mission & Vision</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium mb-1">Mission Title</label>
                            <input type="text" className="w-full border rounded p-2" value={data.missionTitle || ''} onChange={(e) => setData({...data, missionTitle: e.target.value})} />
                            <label className="block text-sm font-medium mb-1">Mission Description</label>
                            <textarea rows={3} className="w-full border rounded p-2" value={data.missionDescription || ''} onChange={(e) => setData({...data, missionDescription: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium mb-1">Vision Title</label>
                            <input type="text" className="w-full border rounded p-2" value={data.visionTitle || ''} onChange={(e) => setData({...data, visionTitle: e.target.value})} />
                            <label className="block text-sm font-medium mb-1">Vision Description</label>
                            <textarea rows={3} className="w-full border rounded p-2" value={data.visionDescription || ''} onChange={(e) => setData({...data, visionDescription: e.target.value})} />
                        </div>
                    </div>
                </section>

                {/* CORE COMPETENCES */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Core Competences</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Section Title</label>
                            <input type="text" className="w-full border rounded p-2" value={data.competenceTitle || ''} onChange={(e) => setData({...data, competenceTitle: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <input type="text" className="w-full border rounded p-2" value={data.competenceDescription || ''} onChange={(e) => setData({...data, competenceDescription: e.target.value})} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {data.competencesList?.map((comp: any, idx: number) => (
                            <div key={idx} className="p-4 pt-10 border rounded bg-gray-50 flex gap-4 relative">
                                <button onClick={() => handleRemoveCompetence(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-100 px-2 py-1 rounded text-xs font-bold">Remove</button>
                                <span className="absolute top-2 left-2 text-gray-500 font-bold text-xs uppercase">Card {idx + 1}</span>
                                <div className="w-1/3">
                                    <label className="block text-xs font-semibold mb-1 uppercase">Card Image</label>
                                    <ImageUpload value={comp.image} onChange={(url: string) => handleCompetenceChange(idx, 'image', url)} />
                                </div>
                                <div className="w-2/3 space-y-2">
                                    <input type="text" placeholder="Title" className="w-full border rounded p-2 font-semibold" value={comp.title || ''} onChange={(e) => handleCompetenceChange(idx, 'title', e.target.value)} />
                                    <textarea rows={3} placeholder="Description" className="w-full border rounded p-2" value={comp.description || ''} onChange={(e) => handleCompetenceChange(idx, 'description', e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddCompetence} className="mt-6 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                        + Add Competence
                    </button>
                </section>

                {/* PRINCIPLES */}
                <section className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                    <h2 className="text-lg font-bold border-b pb-2">Key Principles</h2>
                    <div>
                        <label className="block text-sm font-medium mb-1">Section Title</label>
                        <input type="text" className="w-full max-w-md border rounded p-2" value={data.principlesTitle || ''} onChange={(e) => setData({...data, principlesTitle: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {data.principlesList?.map((prin: any, idx: number) => (
                            <div key={idx} className="p-4 pt-10 border rounded bg-gray-50 space-y-2 relative">
                                <button onClick={() => handleRemovePrinciple(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-100 px-2 py-1 rounded text-xs font-bold">Remove</button>
                                <span className="absolute top-2 left-2 text-gray-500 font-bold text-xs uppercase">Principle {idx + 1}</span>
                                <input type="text" placeholder="Title" className="w-full border rounded p-2 font-semibold" value={prin.title || ''} onChange={(e) => handlePrincipleChange(idx, 'title', e.target.value)} />
                                <textarea rows={2} placeholder="Description" className="w-full border rounded p-2" value={prin.description || ''} onChange={(e) => handlePrincipleChange(idx, 'description', e.target.value)} />
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddPrinciple} className="mt-6 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                        + Add Principle
                    </button>
                </section>
                
            </div>
        </div>
    );
}
