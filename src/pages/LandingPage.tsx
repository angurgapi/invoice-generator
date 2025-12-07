import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Zap, Download, Shield, ArrowRight } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
            <FileText className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Create Professional Invoices
            <span className="block text-primary mt-2">In Seconds</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Generate beautiful, professional invoices instantly. No signup
            required. Download as PDF and get paid faster.
          </p>
          <div className="flex gap-4">
            <Link to="/generate">
              <Button size="lg" className="text-lg h-12 px-8">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Create invoices in seconds with our intuitive form. No complex
                setup or learning curve.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Instant Download</h3>
              <p className="text-muted-foreground">
                Download your invoice as a professional PDF immediately after
                creation. Ready to send.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your data is never stored. Everything happens in your browser
                for complete privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl">
        <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="pt-6 pb-8 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Join thousands of professionals creating invoices the easy way. No
              credit card required.
            </p>
            <Link to="/generate">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg h-12 px-8"
              >
                Create Your First Invoice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2025 Invoice Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
