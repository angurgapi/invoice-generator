import React from "react";
import {
  Formik,
  Form,
  Field,
  type FormikHelpers,
  type FieldProps,
} from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FileText,
  Building2,
  User,
  Wallet,
  ShoppingCart,
  StickyNote,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGenerateInvoice } from "@/hooks/useGenerateInvoice";
import type { InvoiceFormValues } from "@/lib/api";
import { CurrencyCombobox } from "@/components/CurrencyCombobox";

const InvoiceForm: React.FC = () => {
  const { mutate, isPending } = useGenerateInvoice();

  const [today] = React.useState(() => new Date().toISOString().split("T")[0]);
  const [dueDate] = React.useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split("T")[0];
  });

  const initialValues: InvoiceFormValues = {
    invoiceNo: "2025-55577",
    invoiceDate: today,
    dueDate: dueDate,
    paymentTerms: "Net 30",
    companyName: "Your Company Ltd.",
    companyAddress: "123 Business Street\nNew York, NY 10001\nUnited States",
    companyTaxId: "US123456789",
    companyEmail: "billing@yourcompany.com",
    companyPhone: "+1 (555) 123-4567",
    clientName: "Client Company Inc.",
    clientAddress: "456 Client Avenue\nLos Angeles, CA 90001\nUnited States",
    clientEmail: "contact@client.com",
    clientPhone: "+1 (555) 987-6543",
    currency: "USD",
    paymentMethod: "Bank Transfer",
    itemDescription:
      "Professional consulting services\nProject management and delivery\nTechnical documentation",
    quantity: 1,
    unitPrice: 5000.0,
    taxRate: 0,
    discount: 0,
    notes:
      "Thank you for your business!\nPayment is due within 30 days.\nPlease include invoice number on payment.",
    format: "pdf",
    markPaid: false,
  };

  const handleSubmit = (
    values: InvoiceFormValues,
    { setSubmitting }: FormikHelpers<InvoiceFormValues>
  ) => {
    mutate(values, {
      onSettled: () => {
        setSubmitting(false);
      },
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Card className="w-full mx-auto">
          <CardHeader className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="w-full">
                <div className="flex items-center w-full justify-between">
                  <CardTitle className="text-xl sm:text-2xl">
                    Invoice Generator
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="markPaid"
                      checked={values.markPaid}
                      onCheckedChange={(checked) =>
                        setFieldValue("markPaid", checked)
                      }
                    />
                    <Label
                      htmlFor="markPaid"
                      className="text-sm font-medium cursor-pointer whitespace-nowrap"
                    >
                      Mark as PAID
                    </Label>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  Create professional invoices in PDF format
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <Form className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Invoice Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="invoiceNo">Invoice Number</Label>
                    <Field name="invoiceNo">
                      {({ field }: FieldProps) => (
                        <Input {...field} id="invoiceNo" required />
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="invoiceDate">Invoice Date</Label>
                    <Field name="invoiceDate">
                      {({ field }: FieldProps) => (
                        <Input
                          {...field}
                          id="invoiceDate"
                          type="date"
                          required
                        />
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Field name="dueDate">
                      {({ field }: FieldProps) => (
                        <Input {...field} id="dueDate" type="date" required />
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentTerms">Payment Terms</Label>
                    <Field name="paymentTerms">
                      {({ field }: FieldProps) => (
                        <Input {...field} id="paymentTerms" />
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Your Company (From)
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Field name="companyName">
                      {({ field }: FieldProps) => (
                        <Input {...field} id="companyName" required />
                      )}
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyAddress">Company Address</Label>
                      <Field name="companyAddress">
                        {({ field }: FieldProps) => (
                          <Textarea
                            {...field}
                            id="companyAddress"
                            required
                            className="min-h-24"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyTaxId">Tax/VAT ID</Label>
                        <Field name="companyTaxId">
                          {({ field }: FieldProps) => (
                            <Input {...field} id="companyTaxId" />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyEmail">Email</Label>
                        <Field name="companyEmail">
                          {({ field }: FieldProps) => (
                            <Input {...field} id="companyEmail" type="email" />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyPhone">Phone</Label>
                        <Field name="companyPhone">
                          {({ field }: FieldProps) => (
                            <Input {...field} id="companyPhone" />
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Bill To (Client)
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="clientName">Client Name/Company</Label>
                    <Field name="clientName">
                      {({ field }: FieldProps) => (
                        <Input {...field} id="clientName" required />
                      )}
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clientAddress">Billing Address</Label>
                      <Field name="clientAddress">
                        {({ field }: FieldProps) => (
                          <Textarea
                            {...field}
                            id="clientAddress"
                            required
                            className="min-h-24"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="clientEmail">Client Email</Label>
                        <Field name="clientEmail">
                          {({ field }: FieldProps) => (
                            <Input {...field} id="clientEmail" type="email" />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clientPhone">Client Phone</Label>
                        <Field name="clientPhone">
                          {({ field }: FieldProps) => (
                            <Input {...field} id="clientPhone" />
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Payment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <CurrencyCombobox
                      value={values.currency}
                      onValueChange={(value: string) =>
                        setFieldValue("currency", value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Field name="paymentMethod">
                      {({ field }: FieldProps) => (
                        <Input {...field} id="paymentMethod" />
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Line Items
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="itemDescription">Item Description</Label>
                    <Field name="itemDescription">
                      {({ field }: FieldProps) => (
                        <Textarea
                          {...field}
                          id="itemDescription"
                          required
                          className="min-h-24"
                        />
                      )}
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Field name="quantity">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="quantity"
                            type="number"
                            min="1"
                            required
                          />
                        )}
                      </Field>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="unitPrice">Unit Price</Label>
                      <Field name="unitPrice">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="unitPrice"
                            type="number"
                            step="0.01"
                            required
                          />
                        )}
                      </Field>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="taxRate">
                        Tax/VAT Rate (%){" "}
                        <span className="text-xs text-muted-foreground">
                          Leave 0 for no tax
                        </span>
                      </Label>
                      <Field name="taxRate">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="taxRate"
                            type="number"
                            step="0.01"
                            min="0"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="discount">
                        Discount (%){" "}
                        <span className="text-xs text-muted-foreground">
                          Leave 0 for no discount
                        </span>
                      </Label>
                      <Field name="discount">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="discount"
                            type="number"
                            step="0.01"
                            min="0"
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <StickyNote className="h-5 w-5" />
                  Additional Notes
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes/Terms</Label>
                  <Field name="notes">
                    {({ field }: FieldProps) => (
                      <Textarea {...field} id="notes" className="min-h-24" />
                    )}
                  </Field>
                </div>
              </div>

              {/* <div className="space-y-4">
                <Label className="text-base font-semibold">Output Format</Label>
                <RadioGroup
                  value={values.format}
                  onValueChange={(value) => setFieldValue("format", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="png" id="format-png" />
                    <Label
                      htmlFor="format-png"
                      className="font-normal cursor-pointer"
                    >
                      PNG
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pdf" id="format-pdf" />
                    <Label
                      htmlFor="format-pdf"
                      className="font-normal cursor-pointer"
                    >
                      PDF
                    </Label>
                  </div>
                </RadioGroup>
              </div> */}

              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? "Generating..." : "Generate Invoice"}
              </Button>
            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

export default InvoiceForm;
