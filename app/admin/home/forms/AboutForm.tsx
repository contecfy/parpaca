import ImageUpload from '@/components/ui/ImageUpload';
import React from 'react';

export default function AboutForm({ data, setData }: { data: any, setData: (data: any) => void }) {
    if (!data) return null;

    const handleStatChange = (index: number, field: string, value: string) => {
        const newStats = [...(data.stats || [])];
        if (!newStats[index]) newStats[index] = { number: '', label: '' };
        newStats[index][field] = value;
        setData({ ...data, stats: newStats });
    };

    const handleAddStat = () => {
        const newStats = [...(data.stats || []), { number: '', label: '' }];
        setData({ ...data, stats: newStats });
    };

    const handleRemoveStat = (index: number) => {
        const newStats = [...(data.stats || [])];
        newStats.splice(index, 1);
        setData({ ...data, stats: newStats });
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Eyebrow</label>
                    <input type="text" className="w-full border rounded p-2" value={data.eyebrow || ''} onChange={(e) => setData({...data, eyebrow: e.target.value})} />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Main Title</label>
                    <input type="text" className="w-full border rounded p-2" value={data.title || ''} onChange={(e) => setData({...data, title: e.target.value})} />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description Chunk 1</label>
                <textarea className="w-full border rounded p-2" rows={3} value={data.description1 || ''} onChange={(e) => setData({...data, description1: e.target.value})} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description Chunk 2</label>
                <textarea className="w-full border rounded p-2" rows={3} value={data.description2 || ''} onChange={(e) => setData({...data, description2: e.target.value})} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description Chunk 3</label>
                <textarea className="w-full border rounded p-2" rows={3} value={data.description3 || ''} onChange={(e) => setData({...data, description3: e.target.value})} />
            </div>
            
            <fieldset className="border p-4 rounded bg-gray-50">
                <legend className="font-medium text-sm text-gray-700 px-2">Stats</legend>
                <div className="grid grid-cols-3 gap-4">
                    {data.stats?.map((stat: any, idx: number) => (
                        <div key={idx} className="space-y-2 p-2 pt-8 border bg-white rounded relative">
                            <button onClick={() => handleRemoveStat(idx)} className="absolute top-1 right-1 text-red-500 hover:text-red-700 bg-red-50 px-2 py-0.5 rounded text-[10px] font-bold">X</button>
                            <span className="absolute top-1 left-1 text-gray-500 font-bold text-[10px] uppercase">Stat {idx + 1}</span>
                            <input type="text" placeholder="Number (e.g. 20+)" className="w-full border rounded p-1 text-sm" value={stat.number || ''} onChange={(e) => handleStatChange(idx, 'number', e.target.value)} />
                            <input type="text" placeholder="Label" className="w-full border rounded p-1 text-sm" value={stat.label || ''} onChange={(e) => handleStatChange(idx, 'label', e.target.value)} />
                        </div>
                    ))}
                </div>
                <button onClick={handleAddStat} className="mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                    + Add Stat
                </button>
            </fieldset>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Button Text</label>
                    <input type="text" className="w-full border rounded p-2" value={data.buttonText || ''} onChange={(e) => setData({...data, buttonText: e.target.value})} />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Image (Cloudinary)</label>
                    <ImageUpload value={data.image} onChange={(url: string) => setData({...data, image: url})} />
                </div>
            </div>
        </div>
    );
}
