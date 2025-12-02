import { useState } from 'react';
import { ArrowRight, Check, Shield, Upload, QrCode, Eye } from 'lucide-react';
import appIcon from './appicon-512.png';

export default function OnboardingWelcome() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome!",
      subtitle: "Your digital wallet is ready",
      content: (
        <div className="flex flex-col items-center animate-in fade-in duration-500">
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-[2.5rem] blur-2xl -z-10"></div>
            <img
              src={appIcon}
              alt="iden2 App Icon" 
              className="w-40 h-40 rounded-[2.5rem] mx-auto shadow-2xl ring-4 ring-violet-100/50"
            />
          </div>
          <p className="text-lg text-gray-700 text-center max-w-sm leading-relaxed font-medium">
            Store your IDs securely and share only what's needed
          </p>
        </div>
      )
    },
    {
      title: "How it works",
      subtitle: "Simple and secure",
      content: (
        <div className="space-y-5 w-full animate-in fade-in duration-500">
          <div className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200">
              <Upload className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-gray-900 mb-2 text-base">Add your ID</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Scan or upload your passport or driver's license</p>
            </div>
          </div>

          <div className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200">
              <QrCode className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-gray-900 mb-2 text-base">Scan QR codes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">When businesses need verification, scan their code</p>
            </div>
          </div>

          <div className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-gray-900 mb-2 text-base">Choose what to share</h3>
              <p className="text-sm text-gray-600 leading-relaxed">You control exactly what information to share</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "You're in control",
      subtitle: "Privacy first",
      content: (
        <div className="flex flex-col items-center space-y-8 animate-in fade-in duration-500">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/30 to-purple-400/30 rounded-full blur-2xl -z-10"></div>
            <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center shadow-xl shadow-violet-200">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="space-y-4 text-center">
            <h3 className="font-bold text-gray-900 text-xl">Your data stays on your device</h3>
            <p className="text-base text-gray-600 max-w-sm leading-relaxed">
              We never see or store your personal information. Everything is encrypted and private.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-5 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-violet-600 text-sm font-semibold hover:text-violet-700 transition-colors px-2 py-1 -ml-2"
            >
              Back
            </button>
          )}
          <div className="flex-1 text-center">
            <div className="text-base font-bold text-gray-900">{currentStepData.title}</div>
          </div>
          {currentStep > 0 ? (
            <div className="w-14"></div>
          ) : (
              <button className="text-violet-600 text-sm font-semibold opacity-0 cursor-default">Skip</button>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white/50 backdrop-blur-sm px-5 py-4 border-b border-gray-100">
        <div className="flex items-center justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ease-out ${index <= currentStep
                ? 'bg-gradient-to-r from-violet-500 to-violet-600 shadow-sm shadow-violet-200'
                : 'bg-gray-200'
                } ${index === currentStep ? 'w-10' : index < currentStep ? 'w-6' : 'w-2'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {currentStepData.subtitle && (
          <p className="text-sm text-gray-500 mb-8 text-center font-medium tracking-wide uppercase">
            {currentStepData.subtitle}
          </p>
        )}
        <div className="w-full max-w-sm">
          {currentStepData.content}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-gray-100 px-6 py-6 safe-area-inset-bottom">
        {isLastStep ? (
          <button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-violet-200/50 hover:shadow-xl hover:shadow-violet-200/60 hover:from-violet-700 hover:to-violet-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]">
            <span className="text-base">Get Started</span>
            <Check className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
              className="w-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-violet-200/50 hover:shadow-xl hover:shadow-violet-200/60 hover:from-violet-700 hover:to-violet-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
          >
              <span className="text-base">Continue</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
        {!isLastStep && (
          <button
            onClick={() => setCurrentStep(steps.length - 1)}
            className="w-full text-gray-500 text-sm font-semibold mt-4 py-2 hover:text-gray-700 transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
