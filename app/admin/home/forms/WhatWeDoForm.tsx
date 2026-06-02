import React from 'react';

export default function WhatWeDoForm({ data, setData }: { data: any, setData: (data: any) => void }) {
    if (!data) return null;

    const handleServiceChange = (index: number, field: string, value: any) => {
        const newServices = [...(data.services || [])];
        if (!newServices[index]) newServices[index] = { number: '', title: '', description: '', points: ['', '', '', ''] };
        newServices[index][field] = value;
        setData({ ...data, services: newServices });
    };

    const handlePointChange = (serviceIndex: number, pointIndex: number, value: string) => {
        const newServices = [...(data.services || [])];
        if (!newServices[serviceIndex].points) newServices[serviceIndex].points = ['', '', '', ''];
        newServices[serviceIndex].points[pointIndex] = value;
        setData({ ...data, services: newServices });
    };

    const handleAddService = () => {
        const newServices = [...(data.services || []), { number: '', title: '', description: '', points: ['', '', '', ''] }];
        setData({ ...data, services: newServices });
    };

    const handleRemoveService = (index: number) => {
        const newServices = [...(data.services || [])];
        newServices.splice(index, 1);
        setData({ ...data, services: newServices });
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
                    <textarea rows={2} className="w-full border rounded p-2" value={data.title || ''} onChange={(e) => setData({...data, title: e.target.value})} />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea className="w-full border rounded p-2" rows={3} value={data.description || ''} onChange={(e) => setData({...data, description: e.target.value})} />
            </div>
            
            <fieldset className="border p-4 rounded bg-gray-50">
                <legend className="font-medium text-sm text-gray-700 px-2">Services</legend>
                <div className="space-y-6">
                    {data.services?.map((svc: any, idx: number) => (
                        <div key={idx} className="p-4 border bg-white rounded space-y-3 relative pt-10">
                            <span className="absolute top-2 left-2 bg-gray-200 px-2 py-1 text-xs rounded font-bold">Service {idx + 1}</span>
                            <button onClick={() => handleRemoveService(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded text-xs font-bold">Remove</button>
                            <div className="grid grid-cols-4 gap-2">
                                <input type="text" placeholder="No (e.g. 01)" className="col-span-1 border rounded p-2" value={svc.number || ''} onChange={(e) => handleServiceChange(idx, 'number', e.target.value)} />
                                <input type="text" placeholder="Title" className="col-span-3 border rounded p-2" value={svc.title || ''} onChange={(e) => handleServiceChange(idx, 'title', e.target.value)} />
                            </div>
                            <textarea placeholder="Description" className="w-full border rounded p-2" rows={2} value={svc.description || ''} onChange={(e) => handleServiceChange(idx, 'description', e.target.value)} />
                            
                            <div className="pl-4 border-l-2 border-primary space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Bullet Points</label>
                                {[0, 1, 2, 3].map((pIdx) => (
                                    <input key={pIdx} type="text" placeholder={`Point ${pIdx + 1}`} className="w-full border rounded p-1 text-sm" value={svc.points?.[pIdx] || ''} onChange={(e) => handlePointChange(idx, pIdx, e.target.value)} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleAddService} className="mt-6 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                    + Add Service
                </button>
            </fieldset>
        </div>
    );
}
