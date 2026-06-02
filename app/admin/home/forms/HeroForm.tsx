import ImageUpload from '@/components/ui/ImageUpload';
import React from 'react';

export default function HeroForm({ data, setData }: { data: any, setData: (data: any) => void }) {
    if (!data) return null;
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Title (use \n for new lines)</label>
                <textarea 
                    className="w-full border rounded p-2 focus:ring-primary focus:border-primary"
                    rows={3}
                    value={data.title || ''}
                    onChange={(e) => setData({...data, title: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea 
                    className="w-full border rounded p-2 focus:ring-primary focus:border-primary"
                    rows={4}
                    value={data.description || ''}
                    onChange={(e) => setData({...data, description: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Background Image (Cloudinary)</label>
                <ImageUpload 
                    value={data.backgroundImage}
                    onChange={(url: string) => setData({...data, backgroundImage: url})}
                />
            </div>
        </div>
    );
}
