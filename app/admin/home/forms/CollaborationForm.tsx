import ImageUpload from '@/components/ui/ImageUpload';
import React from 'react';

export default function CollaborationForm({ data, setData }: { data: any, setData: (data: any) => void }) {
    if (!data) return null;

    const handleCardChange = (cardName: 'partnershipCard' | 'donationCard', field: string, value: string) => {
        const newCard = { ...(data[cardName] || {}) };
        newCard[field] = value;
        setData({ ...data, [cardName]: newCard });
    };

    return (
        <div className="space-y-6">
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
            
            <div className="grid grid-cols-2 gap-6">
                <fieldset className="border p-4 rounded bg-gray-50 flex flex-col space-y-3">
                    <legend className="font-medium text-sm text-gray-700 px-2">Partnership Card</legend>
                    <input type="text" placeholder="Title" className="w-full border rounded p-2" value={data.partnershipCard?.title || ''} onChange={(e) => handleCardChange('partnershipCard', 'title', e.target.value)} />
                    <textarea placeholder="Description Paragraph 1" className="w-full border rounded p-2" rows={3} value={data.partnershipCard?.desc1 || ''} onChange={(e) => handleCardChange('partnershipCard', 'desc1', e.target.value)} />
                    <textarea placeholder="Description Paragraph 2" className="w-full border rounded p-2" rows={2} value={data.partnershipCard?.desc2 || ''} onChange={(e) => handleCardChange('partnershipCard', 'desc2', e.target.value)} />
                    <input type="text" placeholder="Button Text" className="w-full border rounded p-2" value={data.partnershipCard?.buttonText || ''} onChange={(e) => handleCardChange('partnershipCard', 'buttonText', e.target.value)} />
                    <div>
                        <label className="text-sm font-medium mb-1 block">Image (Cloudinary)</label>
                        <ImageUpload value={data.partnershipCard?.image} onChange={(url: string) => handleCardChange('partnershipCard', 'image', url)} />
                    </div>
                </fieldset>

                <fieldset className="border p-4 rounded bg-gray-50 flex flex-col space-y-3">
                    <legend className="font-medium text-sm text-gray-700 px-2">Donation Card</legend>
                    <input type="text" placeholder="Title" className="w-full border rounded p-2" value={data.donationCard?.title || ''} onChange={(e) => handleCardChange('donationCard', 'title', e.target.value)} />
                    <textarea placeholder="Description Paragraph 1" className="w-full border rounded p-2" rows={3} value={data.donationCard?.desc1 || ''} onChange={(e) => handleCardChange('donationCard', 'desc1', e.target.value)} />
                    <textarea placeholder="Description Paragraph 2" className="w-full border rounded p-2" rows={2} value={data.donationCard?.desc2 || ''} onChange={(e) => handleCardChange('donationCard', 'desc2', e.target.value)} />
                    <input type="text" placeholder="Button Text" className="w-full border rounded p-2" value={data.donationCard?.buttonText || ''} onChange={(e) => handleCardChange('donationCard', 'buttonText', e.target.value)} />
                    <div>
                        <label className="text-sm font-medium mb-1 block">Image (Cloudinary)</label>
                        <ImageUpload value={data.donationCard?.image} onChange={(url: string) => handleCardChange('donationCard', 'image', url)} />
                    </div>
                </fieldset>
            </div>
        </div>
    );
}
