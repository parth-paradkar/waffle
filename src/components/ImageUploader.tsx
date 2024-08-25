import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { DialogFooter, DialogTrigger } from './ui/dialog';

const ImageUploader = ({ onUpload }: { onUpload: (imageStr: string) => void }) => {
  const [preview, setPreview] = useState<string|null>(null);
  const [base64String, setBase64String] = useState<string|null>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Encode to base64
      const base64Reader = new FileReader();
      base64Reader.onloadend = () => {
        const base64 = (base64Reader.result as string)?.split(',')[1]; // Remove data URL part
        setBase64String(base64);
        console.log("Set base64 string")
      };
      base64Reader.readAsDataURL(file);
    } else {
      setPreview(null);
      setBase64String(null);
    }
  };

  const onSubmit = () => {
    if (!base64String) return;
    return onUpload(base64String);
  }

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">Scan Receipt</Button>
        </DialogTrigger>
        {/* <DialogTitle>Scan Receipt</DialogTitle> */}
        <DialogContent>
            <div className="space-y-4">
                <div>
                    <Input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    />
                </div>
                {preview && (
                    <div>
                    <p className="text-sm font-medium mb-2">Preview:</p>
                    <div className="relative w-full h-64">
                        <Image
                        src={preview}
                        alt="Preview"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                    </div>
                )}
                <div>
                    <DialogFooter>
                        <Button onClick={onSubmit} disabled={!base64String}>
                            Submit
                        </Button>
                    </DialogFooter>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  );
};

export default ImageUploader;