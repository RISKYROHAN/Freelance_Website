import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You | CatalystWeb Solutions",
  description: "Your request has been received.",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-corporate-900 px-4 text-center text-white py-20">
      <div className="mx-auto flex max-w-md flex-col items-center space-y-6 rounded-3xl bg-corporate-800 p-8 shadow-2xl sm:p-12 border border-corporate-700">
        <div className="rounded-full bg-green-500/10 p-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold sm:text-4xl">Request Received!</h1>
        
        <p className="text-corporate-200 text-lg">
          Thank you for reaching out. Our team is reviewing your details and will get back to you shortly to discuss your free website prototype.
        </p>

        <div className="w-full pt-4 border-t border-corporate-700 mt-4 flex flex-col gap-3">
          <p className="text-sm text-corporate-300 font-medium mb-2">While you wait:</p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn-primary w-full !bg-[#25D366] hover:!bg-[#1ebc59] !text-white flex items-center justify-center gap-2">
            Message us on WhatsApp
          </a>
          <Link href="/" className="btn-secondary w-full bg-corporate-900 !text-white !border-corporate-600 hover:!bg-corporate-700">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
