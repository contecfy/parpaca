import React from 'react';

export default function KeyFocusForm({ data, setData }: { data: any, setData: (data: any) => void }) {
    if (!data) return null;

    const handleFocusChange = (index: number, field: string, value: string) => {
        const newFocuses = [...(data.focusAreas || [])];
        if (!newFocuses[index]) newFocuses[index] = { title: '', description: '' };
        newFocuses[index][field] = value;
        setData({ ...data, focusAreas: newFocuses });
    };

    const handleAddFocus = () => {
        const newFocuses = [...(data.focusAreas || []), { title: '', description: '' }];
        setData({ ...data, focusAreas: newFocuses });
    };

    const handleRemoveFocus = (index: number) => {
        const newFocuses = [...(data.focusAreas || [])];
        newFocuses.splice(index, 1);
        setData({ ...data, focusAreas: newFocuses });
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
                <legend className="font-medium text-sm text-gray-700 px-2">Focus Areas</legend>
                <div className="grid grid-cols-2 gap-4">
                    {data.focusAreas?.map((item: any, idx: number) => (
                        <div key={idx} className="p-4 border bg-white rounded space-y-3 relative pt-10">
                            <button onClick={() => handleRemoveFocus(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded text-xs font-bold">Remove</button>
                            <span className="absolute top-2 left-2 text-gray-500 font-bold text-xs uppercase">Card {idx + 1}</span>
                            <input type="text" placeholder="Title" className="w-full border rounded p-2" value={item.title || ''} onChange={(e) => handleFocusChange(idx, 'title', e.target.value)} />
                            <textarea placeholder="Description" className="w-full border rounded p-2" rows={3} value={item.description || ''} onChange={(e) => handleFocusChange(idx, 'description', e.target.value)} />
                        </div>
                    ))}
                </div>
                <button onClick={handleAddFocus} className="mt-6 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                    + Add Focus Area
                </button>
            </fieldset>
        </div>
    );
}
