import InvoiceForm from "@/components/InvoiceForm";

export function GeneratePage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background py-8">
      <div className="container mx-auto w-full px-4 max-w-7xl">
        <InvoiceForm />
      </div>
    </div>
  );
}
