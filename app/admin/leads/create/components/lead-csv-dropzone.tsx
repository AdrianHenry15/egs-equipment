"use client";

import { DEFAULT_LEAD_FORM } from "@/lib/forms/constants";
import { LeadFormValues } from "@/lib/forms/types";
import Papa from "papaparse";

export default function LeadCsvDropzone({
    onParsed,
}: {
    onParsed: (rows: LeadFormValues[]) => void;
}) {
    function parse(file: File) {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (res) => {
                const rows = res.data.map((row: any) => ({
                    ...DEFAULT_LEAD_FORM,
                    ...row,
                    equipmentNeeds: row.equipmentNeeds ? row.equipmentNeeds.split("|") : [],
                    equipmentInterest: row.equipmentInterest
                        ? row.equipmentInterest.split("|")
                        : [],
                }));

                onParsed(rows);
            },
        });
    }

    return (
        <label className="border border-dashed rounded p-4 block text-center cursor-pointer">
            <input
                type="file"
                accept=".csv"
                hidden
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return; // ✅ guard

                    parse(file);
                }}
            />
            <p className="font-medium">Drag & drop CSV</p>
            <p className="text-sm text-gray-500">or click to upload</p>
        </label>
    );
}
