'use client';

import { useState } from 'react';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
}

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);

    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '';

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!CLOUD_NAME || !UPLOAD_PRESET) {
            alert('Cloudinary environment variables are not set.');
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                { method: 'POST', body: formData }
            );
            const data = await response.json();
            
            // Pass the securely hosted Cloudinary URL back to the parent form:
            if (response.ok && data.secure_url) {
                onChange(data.secure_url);
            } else {
                console.error('Cloudinary upload error:', data);
                alert(data.error?.message || 'Upload failed. Please check the console.');
            }
        } catch (error) {
            console.error('Upload request failed', error);
            alert('Upload request failed. Please check the network connectivity or console.');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 p-4 border border-dashed border-gray-300 rounded-md">
            <input 
                type="file" 
                accept="image/*"
                onChange={handleUpload} 
                disabled={isUploading}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
            />
            {isUploading && <p className="text-sm text-gray-500 animate-pulse">Uploading...</p>}
            
            {value && !isUploading && (
                <div className="relative w-full max-w-sm mt-2 rounded overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={value} alt="Preview" className="w-full object-cover" />
                </div>
            )}
            
            {!value && !isUploading && (
                <p className="text-sm text-gray-400">Click to upload an image</p>
            )}
        </div>
    );
}
