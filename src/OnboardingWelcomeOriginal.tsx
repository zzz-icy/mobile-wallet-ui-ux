import { Lock, Plus, QrCode, Eye } from 'lucide-react';
import appIcon from './appicon-512.png';

export default function OnboardingWelcomeOriginal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-5 py-3 sticky top-0 z-20">
        <div className="flex items-center justify-center">
                  <div className="text-base font-bold text-gray-900">Welcome to iDen2</div>
        </div>
      </div>

      {/* Main Content */}
          <div className="flex-1 px-6 py-4 pb-24 overflow-y-auto">
              {/* Welcome Section */}
              <div className="mb-5 flex justify-center">
                  <div className="flex items-center gap-10 max-w-sm">
                      {/* Logo */}
                      <div className="relative flex-shrink-0">
                          {/* Outer glow */}
                          <div className="absolute -inset-1 bg-gradient-to-br from-violet-400/50 to-purple-400/50 rounded-xl blur-xl -z-10"></div>
                          {/* Inner glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-violet-400/30 to-purple-400/30 rounded-xl blur-lg -z-10"></div>
                          {/* Logo container */}
                          <div className="relative bg-white rounded-xl p-2 shadow-lg shadow-violet-200/50 ring-2 ring-violet-200/60">
                              <img
                                  src={appIcon}
                                  alt="iDen2 App Icon"
                                  className="w-16 h-16 rounded-lg"
                              />
                          </div>
                      </div>
                      {/* One Step Away Message */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center text-center">
                          <p className="text-sm font-semibold text-gray-700 leading-relaxed mb-1">
                              Just One ID Away
                          </p>
                          {/* <div className="flex justify-center py-0.5 mb-1">
                              <div className="w-0.5 h-3 bg-gradient-to-b from-violet-400 to-violet-300"></div>
                          </div> */}
                          <p className="text-sm font-semibold text-violet-600 leading-relaxed">
                              You Are All Set
                          </p>
                      </div>
                  </div>
              </div>

              {/* How it works Section */}
              <div className="mb-5">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-gray-300"></div>
                      <h2 className="text-sm font-semibold text-gray-700 px-3">
                          How it works
                      </h2>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"></div>
                  </div>
              </div>

              {/* Steps Flow */}
              <div className="space-y-0">
                  {/* Step 1 */}
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md shadow-violet-200">
                              <Plus className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                      </div>
                      <div className="flex-1 pt-0.5">
                          <h3 className="font-bold text-gray-900 text-sm">Add Your ID</h3>
                          <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                              Scan your government-issued ID, such as a passport or driver's license
                          </p>
                      </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center py-1">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-violet-400 to-violet-300"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md shadow-violet-200">
                              <QrCode className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                      </div>
                      <div className="flex-1 pt-0.5">
                          <h3 className="font-bold text-gray-900 text-sm">Scan QR Codes</h3>
                          <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                              Scan QR codes when businesses request verification
                          </p>
                      </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center py-1">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-violet-400 to-violet-300"></div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md shadow-violet-200">
                              <Eye className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                      </div>
                      <div className="flex-1 pt-0.5">
                          <h3 className="font-bold text-gray-900 text-sm">Choose What to Share</h3>
                          <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                              You control what information to share
                          </p>
                      </div>
                  </div>
              </div>

        {/* Privacy Section */}
              <div className="mt-5">
                  {/* Separator */}
                  <div className="flex items-center gap-3 mb-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-gray-300"></div>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"></div>
                  </div>

                  {/* Privacy Card - Distinct Design */}
                  <div className="bg-white rounded-xl p-4 border-2 border-violet-200 shadow-sm">
                      <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md shadow-violet-200 mb-2">
                              <Lock className="w-5 h-5 text-white" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm mb-1">Your data stays private</h3>
                          <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                              Stored securely on your device. We never see your information.
                          </p>
                      </div>
                  </div>
        </div>
      </div>

          {/* Bottom Action - Sticky Footer */}
          <div className="bg-white/80 backdrop-blur-sm border-t border-gray-100 px-6 py-4 safe-area-inset-bottom sticky bottom-0 z-20 shadow-lg shadow-black/5">
              <button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-violet-200/50 hover:shadow-xl hover:shadow-violet-200/60 hover:from-violet-700 hover:to-violet-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]">
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-sm">Add Your First ID</span>
              </button>
              <button
                  onClick={() => {
                      // Handle "Do it later" action
                      console.log('Do it later clicked');
                  }}
                  className="w-full bg-white border border-violet-300 text-violet-700 font-semibold text-sm py-3 rounded-xl mt-3 hover:bg-violet-50 hover:border-violet-400 active:bg-violet-100 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                  Do It Later
              </button>
      </div>
    </div>
  );
}

