import ImageUpload from '@/components/ui/ImageUpload';
import React from 'react';

export default function TeamForm({ data, setData }: { data: any, setData: (data: any) => void }) {
    if (!data) return null;

    const handleMemberChange = (index: number, field: string, value: string) => {
        const newMembers = [...(data.teamMembers || [])];
        if (!newMembers[index]) newMembers[index] = { name: '', role: '', description: '', image: '', linkedin: '', twitter: '' };
        newMembers[index][field] = value;
        setData({ ...data, teamMembers: newMembers });
    };

    const handleAddMember = () => {
        const newMembers = [...(data.teamMembers || []), { name: '', role: '', description: '', image: '', linkedin: '', twitter: '' }];
        setData({ ...data, teamMembers: newMembers });
    };

    const handleRemoveMember = (index: number) => {
        const newMembers = [...(data.teamMembers || [])];
        newMembers.splice(index, 1);
        setData({ ...data, teamMembers: newMembers });
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
                <legend className="font-medium text-sm text-gray-700 px-2">Team Members</legend>
                <div className="space-y-6">
                    {data.teamMembers?.map((member: any, idx: number) => (
                        <div key={idx} className="p-4 pt-10 border bg-white rounded flex gap-6 relative">
                            <button onClick={() => handleRemoveMember(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded text-xs font-bold">Remove</button>
                            <span className="absolute top-2 left-2 text-gray-500 font-bold text-xs uppercase">Member {idx + 1}</span>
                            <div className="w-1/3">
                                <label className="text-sm font-medium mb-1 block">Image</label>
                                <ImageUpload value={member.image} onChange={(url: string) => handleMemberChange(idx, 'image', url)} />
                            </div>
                            <div className="w-2/3 space-y-3">
                                <div className="grid grid-cols-2 gap-2">
                                    <input type="text" placeholder="Name" className="w-full border rounded p-2" value={member.name || ''} onChange={(e) => handleMemberChange(idx, 'name', e.target.value)} />
                                    <input type="text" placeholder="Role" className="w-full border rounded p-2" value={member.role || ''} onChange={(e) => handleMemberChange(idx, 'role', e.target.value)} />
                                </div>
                                <textarea placeholder="Description" className="w-full border rounded p-2" rows={2} value={member.description || ''} onChange={(e) => handleMemberChange(idx, 'description', e.target.value)} />
                                <div className="grid grid-cols-2 gap-2">
                                    <input type="text" placeholder="LinkedIn URL" className="w-full border rounded p-2" value={member.linkedin || ''} onChange={(e) => handleMemberChange(idx, 'linkedin', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleAddMember} className="mt-6 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors text-sm font-bold block w-full text-center rounded">
                    + Add Team Member
                </button>
            </fieldset>
        </div>
    );
}
