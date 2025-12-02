import { useState } from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import appIcon from './appicon-512.png';

export default function OnboardingWelcome() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome!",
      subtitle: "Your digital wallet is ready",
      content: (
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img
              src={appIcon}
              alt="iden2 App Icon" 
              className="w-32 h-32 rounded-3xl mx-auto"
            />
          </div>
          <p className="text-base text-gray-600 text-center max-w-xs">
            Store your IDs securely and share only what's needed
          </p>
        </div>
      )
    },
    {
      title: "How it works",
      subtitle: "Simple and secure",
      content: (
        <div className="space-y-6 w-full">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-violet-600 font-bold text-lg">1</span>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-semibold text-gray-900 mb-1">Add your ID</h3>
              <p className="text-sm text-gray-600">Scan or upload your passport or driver's license</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-violet-600 font-bold text-lg">2</span>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-semibold text-gray-900 mb-1">Scan QR codes</h3>
              <p className="text-sm text-gray-600">When businesses need verification, scan their code</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-violet-600 font-bold text-lg">3</span>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-semibold text-gray-900 mb-1">Choose what to share</h3>
              <p className="text-sm text-gray-600">You control exactly what information to share</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "You're in control",
      subtitle: "Privacy first",
      content: (
        <div className="flex flex-col items-center space-y-6">
          <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center">
            <Shield className="w-10 h-10 text-violet-600" />
          </div>
          <div className="space-y-4 text-center">
            <h3 className="font-semibold text-gray-900 text-lg">Your data stays on your device</h3>
            <p className="text-sm text-gray-600 max-w-xs">
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
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-violet-600 text-sm font-medium"
            >
              Back
            </button>
          )}
          <div className="flex-1 text-center">
            <div className="text-sm font-semibold text-gray-900">{currentStepData.title}</div>
          </div>
          {currentStep > 0 ? (
            <div className="w-14"></div>
          ) : (
            <button className="text-violet-600 text-sm font-medium opacity-0">Skip</button>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all ${index <= currentStep ? 'bg-violet-600' : 'bg-gray-200'
                } ${index === currentStep ? 'w-8' : 'w-1.5'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {currentStepData.subtitle && (
          <p className="text-sm text-gray-500 mb-6 text-center">{currentStepData.subtitle}</p>
        )}
        <div className="w-full max-w-sm">
          {currentStepData.content}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white border-t border-gray-200 px-6 py-6">
        {isLastStep ? (
          <button className="w-full bg-violet-600 text-white font-semibold py-4 rounded-xl shadow-sm hover:bg-violet-700 transition-colors flex items-center justify-center gap-2">
            <span>Get Started</span>
            <Check className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full bg-violet-600 text-white font-semibold py-4 rounded-xl shadow-sm hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Continue</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
        {!isLastStep && (
          <button
            onClick={() => setCurrentStep(steps.length - 1)}
            className="w-full text-gray-500 text-sm font-medium mt-3"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
