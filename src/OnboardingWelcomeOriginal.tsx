import { ArrowRight, Plus, Lock, Upload, QrCode, Eye } from 'lucide-react';
import appIcon from './appicon-512.png';

export default function OnboardingWelcomeOriginal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-5 py-3 sticky top-0 z-20">
        <div className="flex items-center justify-center">
          <div className="text-base font-bold text-gray-900">Welcome to iden2</div>
        </div>
      </div>

      {/* Main Content */}
          <div className="flex-1 px-6 py-4 pb-24 overflow-y-auto">
        {/* Welcome Section */}
              <div className="flex flex-col items-center mb-6">
                  <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-2xl blur-xl -z-10"></div>
            <img
              src={appIcon}
                          alt="iDen2 App Icon"
                          className="w-20 h-20 rounded-2xl shadow-lg ring-2 ring-violet-100/50"
            />
          </div>
                  <p className="text-base text-gray-700 text-center max-w-sm leading-relaxed font-medium">
                      Just one ID away from being all set!
          </p>
        </div>

        {/* How It Works Section */}
              <div className="mb-5">
                  <h2 className="text-xs text-gray-500 font-semibold mb-3 text-center tracking-wide uppercase">
            How it works
          </h2>
                  <div className="space-y-2.5">
                      <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-200">
                              <Upload className="w-6 h-6 text-white" />
              </div>
                          <div className="flex-1 pt-0.5">
                              <h3 className="font-bold text-gray-900 text-sm mb-1">Add Your ID</h3>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                  Scan your government-issued ID like a passport or driver's license
                </p>
              </div>
            </div>

                      <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-200">
                              <QrCode className="w-6 h-6 text-white" />
              </div>
                          <div className="flex-1 pt-0.5">
                              <h3 className="font-bold text-gray-900 text-sm mb-1">Scan QR Codes</h3>
                              <p className="text-xs text-gray-600 leading-relaxed">
                  When businesses need verification, scan their code
                </p>
              </div>
            </div>

                      <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-200">
                              <Eye className="w-6 h-6 text-white" />
              </div>
                          <div className="flex-1 pt-0.5">
                              <h3 className="font-bold text-gray-900 text-sm mb-1">Choose What to Share</h3>
                              <p className="text-xs text-gray-600 leading-relaxed">
                  You control exactly what information to share
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-100">
          <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Lock className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-sm mb-1">Your data stays private</h3>
                          <p className="text-xs text-gray-700 leading-relaxed">
                Everything is stored securely on your device. We never see or store your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

          {/* Bottom Action - Sticky Footer */}
          <div className="bg-white/80 backdrop-blur-sm border-t border-gray-100 px-6 py-4 safe-area-inset-bottom sticky bottom-0 z-20 shadow-lg shadow-black/5">
              <button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-violet-200/50 hover:shadow-xl hover:shadow-violet-200/60 hover:from-violet-700 hover:to-violet-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]">
                  <span className="text-sm">Add Your First ID</span>
                  <ArrowRight className="w-4 h-4" />
              </button>
      </div>
    </div>
  );
}

