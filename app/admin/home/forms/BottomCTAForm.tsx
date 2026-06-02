import React from 'react';

export default function BottomCTAForm({ data, setData }: { data: any, setData: (data: any) => void }) {
    if (!data) return null;

    return (
        <div className="space-y-4 max-w-2xl">
            <div>
                <label className="block text-sm font-medium mb-1">Eyebrow</label>
                <input type="text" className="w-full border rounded p-2" value={data.eyebrow || ''} onChange={(e) => setData({...data, eyebrow: e.target.value})} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <textarea rows={3} className="w-full border rounded p-2" value={data.title || ''} onChange={(e) => setData({...data, title: e.target.value})} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea rows={3} className="w-full border rounded p-2" value={data.description || ''} onChange={(e) => setData({...data, description: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Button 1 Text</label>
                    <input type="text" className="w-full border rounded p-2" value={data.button1 || ''} onChange={(e) => setData({...data, button1: e.target.value})} />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Button 2 Text</label>
                    <input type="text" className="w-full border rounded p-2" value={data.button2 || ''} onChange={(e) => setData({...data, button2: e.target.value})} />
                </div>
            </div>
        </div>
    );
}
