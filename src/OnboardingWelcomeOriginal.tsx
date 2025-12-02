import { ArrowRight, Plus, Lock, Upload, QrCode, Eye } from 'lucide-react';
import appIcon from './appicon-512.png';

export default function OnboardingWelcomeOriginal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-5 py-4">
        <div className="flex items-center justify-center">
          <div className="text-base font-bold text-gray-900">Welcome to iden2</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-10 overflow-y-auto">
        {/* Welcome Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-[2.5rem] blur-2xl -z-10"></div>
            <img
              src={appIcon}
              alt="iden2 App Icon"
              className="w-36 h-36 rounded-[2.5rem] shadow-xl ring-4 ring-violet-100/50"
            />
          </div>
          <p className="text-lg text-gray-700 text-center max-w-sm leading-relaxed font-medium">
            You're all set! Add your first ID to get started.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mb-8">
          <h2 className="text-sm text-gray-500 font-semibold mb-5 text-center tracking-wide uppercase">
            How it works
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200">
                <Upload className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Add Your ID</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Scan or upload a passport or driver's license
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Scan QR Codes</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  When businesses need verification, scan their code
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-200">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Choose What to Share</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You control exactly what information to share
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">Your data stays private</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Everything is stored securely on your device. We never see or store your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-gray-100 px-6 py-6 safe-area-inset-bottom">
        <button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-violet-200/50 hover:shadow-xl hover:shadow-violet-200/60 hover:from-violet-700 hover:to-violet-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] mb-3">
          <Plus className="w-5 h-5" />
          <span className="text-base">Add Your First ID</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-gray-500 text-center">
          You'll need an ID to verify your information with businesses
        </p>
      </div>
    </div>
  );
}

