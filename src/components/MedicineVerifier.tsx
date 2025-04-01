
import { useState } from "react";
import { QrCode, Check, X, ShieldCheck, ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MedicineVerifier = () => {
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "verified" | "rejected">("idle");
  const [result, setResult] = useState<{
    authentic: boolean;
    name: string;
    manufacturer: string;
    batch: string;
    expiry: string;
    supplyChainEvents: Array<{ date: string, event: string, location: string }>;
  } | null>(null);

  const handleVerify = () => {
    setVerificationStatus("verifying");
    
    // Simulate verification process
    setTimeout(() => {
      const isAuthentic = Math.random() > 0.3; // 70% chance of being authentic for demo
      
      setResult({
        authentic: isAuthentic,
        name: "Amoxicillin 500mg",
        manufacturer: "PharmaLabs Global Inc.",
        batch: "BAT2023-45678",
        expiry: "11/2025",
        supplyChainEvents: [
          { date: "01/05/2023", event: "Manufactured", location: "San Francisco, CA" },
          { date: "01/15/2023", event: "Quality Testing Passed", location: "San Francisco, CA" },
          { date: "01/20/2023", event: "Shipped to Distributor", location: "Chicago, IL" },
          { date: "01/25/2023", event: "Received by Distributor", location: "Chicago, IL" },
          { date: "02/05/2023", event: "Shipped to Pharmacy", location: "Miami, FL" },
          { date: "02/10/2023", event: "Received by Pharmacy", location: "Miami, FL" },
        ]
      });
      
      setVerificationStatus(isAuthentic ? "verified" : "rejected");
    }, 2000);
  };

  const resetVerification = () => {
    setVerificationStatus("idle");
    setResult(null);
  };

  return (
    <div id="demo" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Interactive Demo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Verify Your Medicine
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience how consumers can easily verify medicine authenticity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-center p-6 bg-pharma-light rounded-lg">
                  <div className="relative w-48 h-48 mb-4 rounded-xl overflow-hidden bg-white flex items-center justify-center border-2 border-dashed border-gray-300">
                    {verificationStatus === "idle" && (
                      <>
                        <QrCode className="h-16 w-16 text-gray-400" />
                        <span className="absolute bottom-2 text-sm text-gray-500">Scan QR Code</span>
                      </>
                    )}
                    
                    {verificationStatus === "verifying" && (
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <span className="mt-4 text-sm text-gray-600">Verifying...</span>
                      </div>
                    )}
                    
                    {verificationStatus === "verified" && (
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <ShieldCheck className="h-10 w-10 text-green-500" />
                        </div>
                        <span className="mt-4 text-sm font-medium text-green-600">Authentic Medicine</span>
                      </div>
                    )}
                    
                    {verificationStatus === "rejected" && (
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                          <ShieldX className="h-10 w-10 text-red-500" />
                        </div>
                        <span className="mt-4 text-sm font-medium text-red-600">Counterfeit Alert</span>
                      </div>
                    )}
                  </div>
                  
                  {verificationStatus === "idle" && (
                    <Button
                      onClick={handleVerify}
                      className="bg-primary hover:bg-primary-dark"
                    >
                      <QrCode className="mr-2 h-4 w-4" />
                      Simulate Scan
                    </Button>
                  )}
                  
                  {verificationStatus !== "idle" && (
                    <Button
                      onClick={resetVerification}
                      variant="outline"
                      className="mt-2"
                    >
                      Scan Another
                    </Button>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Verification Results</h3>
                  
                  {verificationStatus === "idle" && (
                    <div className="text-gray-500 text-center py-8">
                      <QrCode className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                      <p>Scan a medicine package to verify its authenticity.</p>
                    </div>
                  )}
                  
                  {verificationStatus === "verifying" && (
                    <div className="text-center py-8">
                      <p className="text-gray-600">Checking blockchain records...</p>
                    </div>
                  )}
                  
                  {result && (
                    <div className={`p-4 rounded-lg ${result.authentic ? "bg-green-50" : "bg-red-50"}`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-full ${result.authentic ? "bg-green-100" : "bg-red-100"} mr-3`}>
                          {result.authentic ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <div>
                          <h4 className={`font-medium ${result.authentic ? "text-green-800" : "text-red-800"}`}>
                            {result.authentic ? "Authentic Medicine" : "Counterfeit Alert"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {result.authentic 
                              ? "This product has been verified as authentic." 
                              : "This product may be counterfeit. DO NOT consume."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                          <div className="text-gray-500">Medicine:</div>
                          <div className="font-medium">{result.name}</div>
                          
                          <div className="text-gray-500">Manufacturer:</div>
                          <div className="font-medium">{result.manufacturer}</div>
                          
                          <div className="text-gray-500">Batch Number:</div>
                          <div className="font-medium">{result.batch}</div>
                          
                          <div className="text-gray-500">Expiry Date:</div>
                          <div className="font-medium">{result.expiry}</div>
                        </div>
                      </div>
                      
                      {result.authentic && (
                        <div className="mt-4">
                          <h5 className="font-medium text-gray-700 mb-2">Supply Chain Journey</h5>
                          <div className="max-h-32 overflow-y-auto text-sm">
                            {result.supplyChainEvents.map((event, index) => (
                              <div key={index} className="flex items-start mb-2">
                                <div className="w-1 h-full bg-primary mr-2 flex-shrink-0"></div>
                                <div>
                                  <span className="text-gray-500">{event.date}:</span>{" "}
                                  <span className="font-medium">{event.event}</span> at{" "}
                                  <span className="text-gray-600">{event.location}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineVerifier;
