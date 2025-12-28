"use client";

import Papa from "papaparse";

interface CsvDropzoneProps<T> {
    onParsed: (rows: T[]) => void;
    transformRow?: (row: any) => T;
    accept?: string;
    label?: string;
    description?: string;
}

export default function CsvDropzone<T>({
    onParsed,
    transformRow,
    accept = ".csv",
    label = "Drag & drop CSV",
    description = "or click to upload",
}: CsvDropzoneProps<T>) {
    function parse(file: File) {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (res) => {
                const rows = res.data.map((row: any) => (transformRow ? transformRow(row) : row));

                onParsed(rows);
            },
        });
    }

    return (
        <label className="border border-dashed rounded p-4 block text-center cursor-pointer hover:bg-gray-50">
            <input
                type="file"
                accept={accept}
                hidden
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    parse(file);
                }}
            />

            <p className="font-medium">{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </label>
    );
}
