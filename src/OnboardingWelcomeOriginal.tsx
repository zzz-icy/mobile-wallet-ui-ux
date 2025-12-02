import { Shield, ArrowRight, Plus, Lock } from 'lucide-react';
import appIcon from './appicon-512.png';

export default function OnboardingWelcomeOriginal() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-center">
          <div className="text-sm font-semibold text-gray-900">Welcome to iden2</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Welcome Icon/Illustration */}
        <div className="mb-6 flex items-center justify-center">
          <img
            src={appIcon}
            alt="iden2 App Icon"
            className="w-28 h-28 rounded-3xl"
          />
        </div>

        {/* Welcome Title */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-3">
          Welcome to Your Digital Wallet
        </h1>
        
        <p className="text-base text-gray-600 text-center mb-8 max-w-sm">
          You're all set! To get started, you'll need to add your first identity credential.
        </p>

        {/* Info Card */}
        <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-violet-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base mb-1">
                What happens next?
              </h3>
              <p className="text-sm text-gray-600">
                When a company needs to verify your information (like age verification), you'll be able to securely share only what's needed.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="w-full space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-semibold">1</span>
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-medium text-gray-900 text-sm mb-1">Add Your ID</h4>
              <p className="text-sm text-gray-600">
                Start by adding a government-issued ID like a passport or driver's license.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-semibold">2</span>
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-medium text-gray-900 text-sm mb-1">Scan QR Codes</h4>
              <p className="text-sm text-gray-600">
                When a business needs verification, scan their QR code to see what they're requesting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-semibold">3</span>
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-medium text-gray-900 text-sm mb-1">Share Securely</h4>
              <p className="text-sm text-gray-600">
                Choose what to share. You're always in control of your data.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="w-full bg-violet-50 rounded-xl px-4 py-3 mb-6">
          <div className="flex items-start gap-2">
            <Lock className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-violet-900">
              Your credentials are stored securely on your device. We never see or store your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white border-t border-gray-200 px-6 py-6">
        <button className="w-full bg-violet-600 text-white font-semibold py-4 rounded-xl shadow-sm hover:bg-violet-700 transition-colors flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          <span>Add Your First ID</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          You'll need an ID to verify your information with businesses
        </p>
      </div>
    </div>
  );
}

