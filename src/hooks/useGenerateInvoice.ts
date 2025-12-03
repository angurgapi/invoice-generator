import { useMutation } from "@tanstack/react-query";
import { generateInvoice, downloadBlob } from "@/lib/api";

export const useGenerateInvoice = () => {
    return useMutation({
        mutationFn: generateInvoice,
        onSuccess: (blob, variables) => {
            downloadBlob(blob, `invoice-${variables.invoiceNo}.${variables.format}`);
        },
        onError: (error: Error) => {
            console.error("Error generating invoice:", error);
            alert(`Error generating invoice: ${error.message}`);
        },
    });
};
