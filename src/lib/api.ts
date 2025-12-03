const API_URL = import.meta.env.VITE_API_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;

export interface InvoiceFormValues {
    invoiceNo: string;
    invoiceDate: string;
    dueDate: string;
    paymentTerms: string;
    companyName: string;
    companyAddress: string;
    companyTaxId: string;
    companyEmail: string;
    companyPhone: string;
    clientName: string;
    clientAddress: string;
    clientEmail: string;
    clientPhone: string;
    currency: string;
    paymentMethod: string;
    itemDescription: string;
    quantity: number;
    unitPrice: number;
    taxRate: number;
    discount: number;
    notes: string;
    format: "png" | "pdf";
    markPaid: boolean;
}

export const generateInvoice = async (
    values: InvoiceFormValues
): Promise<Blob> => {
    const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "X-API-Key": API_KEY || "",
        },
        body: JSON.stringify(values),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `Failed to generate invoice: ${response.status} ${response.statusText} - ${errorText}`
        );
    }

    return response.blob();
};

export const downloadBlob = (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
};

export const checkHealth = async (): Promise<{ status: string }> => {
    const response = await fetch(`${API_URL}/health`);

    if (!response.ok) {
        throw new Error(`Health check failed: ${response.status}`);
    }

    return response.json();
};
