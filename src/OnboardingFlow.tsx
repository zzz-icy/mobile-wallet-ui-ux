import { useState } from 'react';
import { ArrowRight, ArrowLeft, Shield, QrCode, Copy, User, Key, Lock, FileText, Share2, CreditCard, Settings, Plus } from 'lucide-react';
import iden2Logo from './iden2_logo.png';
import iden2FullLogo from './iden2_full_logo.svg';

type OnboardingStep = 'intro' | 'create-or-login' | 'create-passkey' | 'recovery-code' | 'welcome' | 'login' | 'next-steps' | 'account-recovery';
type IntroSlide = 0 | 1 | 2;

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('intro');
  const [introSlide, setIntroSlide] = useState<IntroSlide>(0);
  const [username, setUsername] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [hasIds, setHasIds] = useState(false); // Toggle to simulate first-time vs returning user
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [isDashboardSpinning, setIsDashboardSpinning] = useState(false);
  const [passkeyError, setPasskeyError] = useState<string | null>(null);
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);
  const [recoveryCodeInput, setRecoveryCodeInput] = useState('');
  const [recoveryType, setRecoveryType] = useState<'username-only' | 'full-recovery'>('username-only');

  // Mock IDs data for returning user
  const mockIds = [
    { id: '1', type: 'Driver License', issuer: 'DMV', icon: CreditCard, number: 'DL123456789', expiry: '2028-12-31' },
    { id: '2', type: 'Passport', issuer: 'State Department', icon: FileText, number: 'P987654321', expiry: '2030-06-15' },
  ];


  const handleSkipIntro = () => {
    setCurrentStep('create-or-login');
  };

  const handleNext = () => {
    if (currentStep === 'intro') {
      if (introSlide < 2) {
        setIntroSlide((introSlide + 1) as IntroSlide);
      } else {
        setCurrentStep('create-or-login');
      }
    } else if (currentStep === 'create-or-login') {
      // This will be handled by specific buttons
    } else if (currentStep === 'recovery-code') {
      setCurrentStep('welcome');
    } else if (currentStep === 'welcome') {
      setCurrentStep('next-steps');
    }
  };

  const handleBack = () => {
    if (currentStep === 'create-or-login') {
      setCurrentStep('intro');
      setIntroSlide(2);
    } else if (currentStep === 'create-passkey') {
      setCurrentStep('create-or-login');
    } else if (currentStep === 'recovery-code') {
      setCurrentStep('create-passkey');
    } else if (currentStep === 'account-recovery') {
      setCurrentStep('create-passkey');
    } else if (currentStep === 'welcome') {
      setCurrentStep('recovery-code');
    } else if (currentStep === 'login') {
      setCurrentStep('create-or-login');
    } else if (currentStep === 'next-steps') {
      setCurrentStep('welcome');
    } else if (currentStep === 'intro' && introSlide > 0) {
      setIntroSlide((introSlide - 1) as IntroSlide);
    }
  };

  const handleCreateAccount = () => {
    setCurrentStep('create-passkey');
  };

  const handleLogin = () => {
    setCurrentStep('login');
  };

  const handlePasskeyCreate = () => {
    setPasskeyError(null);
    // Simulate passkey creation with error handling
    // In real app, this would check if Face ID/passcode is available
    setTimeout(() => {
      // Simulate: 20% chance of no biometric/passcode setup
      const hasBiometric = Math.random() > 0.2;
      if (!hasBiometric) {
        setPasskeyError('Please set up Face ID, Touch ID, or a device passcode in your device settings first.');
        return;
      }
      // Generate 10 recovery codes
      const codes = Array.from({ length: 10 }, () =>
        Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('')
      );
      setRecoveryCodes(codes);
      setCurrentStep('recovery-code');
    }, 1000);
  };

  const handleSignIn = () => {
    setIsSigningIn(true);
    // Simulate sign in process
    setTimeout(() => {
      setIsSigningIn(false);
      setCurrentStep('next-steps');
    }, 1500);
  };

  // Screen 1: Introduction Carousel
  if (currentStep === 'intro') {
    const introSlides = [
      {
        title: 'Verifiable Credentials',
        description: 'Store and manage your digital identity credentials securely. Your driver\'s license, passport, and more in one place.',
        icon: Shield,
      },
      {
        title: 'Your Data, Your Control',
        description: 'Your wallet keeps your data private and secure. You decide what to share and with whom.',
        icon: Lock,
      },
      {
        title: 'Easy Sharing',
        description: 'Share only what\'s needed with selective disclosure. Scan QR codes or paste request strings.',
        icon: Share2,
      },
    ];

    // const currentSlide = introSlides[introSlide];

    return (
      <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Abstract Background Shapes - Subtle Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[50%] bg-violet-200/15 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[70%] h-[40%] bg-purple-200/12 rounded-full blur-[80px]"></div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-8 relative z-10">
          {/* Skip Button - Top Right Corner */}
          {introSlide !== 2 && (
            <div className="absolute top-6 right-6 z-20">
              <button
                onClick={handleSkipIntro}
                className="px-4 py-2 text-sm text-gray-500 font-medium rounded-full hover:bg-gray-100/80 active:bg-gray-200/80 transition-all duration-200"
              >
                Skip
              </button>
            </div>
          )}

          {/* Logo */}
          <div className="pt-8 pb-6 flex-shrink-0">
            <div className="flex justify-center">
              <img
                src={iden2FullLogo}
                alt="iDen2"
                className="h-6 w-auto object-contain opacity-80 drop-shadow-sm"
              />
            </div>
          </div>

          {/* Carousel Slide - Content slides in/out */}
          <div className="flex-1 flex flex-col items-center justify-center pb-8 relative overflow-hidden">
            <div className="w-full max-w-sm relative">
              {/* Slide Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${introSlide * 100}%)` }}
              >
                {introSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/20 to-purple-400/15 rounded-3xl blur-2xl"></div>
                        <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-300/40 ring-1 ring-violet-200/60 p-6">
                          <slide.icon className="w-12 h-12 text-violet-600" strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center tracking-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-base text-gray-600 text-center leading-relaxed mb-8">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mb-8 mt-8">
                {introSlides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${index === introSlide ? 'w-8 bg-violet-600' : 'w-2 bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation - Arrow Buttons */}
          <div className="pb-8">
            <div className="flex items-center justify-center gap-6">
              {/* Left Arrow */}
              <button
                onClick={() => introSlide > 0 && setIntroSlide((introSlide - 1) as IntroSlide)}
                disabled={introSlide === 0}
                className={`p-4 rounded-full transition-all duration-300 ${introSlide === 0
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-violet-600 hover:bg-violet-50 active:scale-95 bg-white shadow-md'
                  }`}
              >
                <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
              </button>

              {/* Get Started Button (when on last slide) or Right Arrow */}
              {introSlide === 2 ? (
                <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 text-white rounded-full font-bold text-base shadow-xl shadow-violet-500/40 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (introSlide < 2) {
                      setIntroSlide((introSlide + 1) as IntroSlide);
                    }
                  }}
                  disabled={introSlide >= 2}
                  className={`p-4 rounded-full transition-all duration-300 ${introSlide >= 2
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-violet-600 hover:bg-violet-50 active:scale-95 bg-white shadow-md'
                    }`}
                >
                  <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 2: Create or Login Choice
  if (currentStep === 'create-or-login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/25 to-purple-50/20 flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-br from-violet-300/30 to-purple-300/25 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60%] h-[35%] bg-gradient-to-tr from-purple-300/25 to-violet-300/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-8 relative z-10">
          <div className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-between pt-44 pb-12">
            {/* Logo and Tagline - Top */}
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center gap-6">
                <img
                  src={iden2FullLogo}
                  alt="iDen2"
                  className="h-10 w-auto object-contain opacity-80 drop-shadow-sm"
                />
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs text-gray-500 font-semibold tracking-[0.2em] uppercase">
                    A PLATFORM FOR DIGITAL IDENTITY
                  </p>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* CTAs Section - Bottom Aligned */}
            <div className="space-y-4 flex-shrink-0">
              {/* Create Wallet - Primary Action */}
              <button
                onClick={handleCreateAccount}
                className="w-full group active:scale-[0.98] transition-all duration-300"
              >
                <div className="relative">
                  {/* Animated Glow */}
                  <div className="absolute -inset-1 bg-violet-500/20 rounded-2xl blur-lg animate-pulse"></div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-violet-600 rounded-2xl p-6 shadow-xl shadow-violet-500/40">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 text-left">
                        <p className="text-base font-bold text-white mb-1">Create Wallet</p>
                        <p className="text-xs text-white/80 mb-2">New to iDen2?</p>
                        <p className="text-xs text-white/70 leading-relaxed">
                          Store and manage your credentials securely on your device
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex-shrink-0 pt-1">
                        <ArrowRight className="w-5 h-5 text-white/90" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Divider Text */}
              <div className="text-center py-2">
                <p className="text-xs text-gray-400 font-medium">or</p>
              </div>

              {/* Login - Secondary Action */}
              <button
                onClick={handleLogin}
                className="w-full group active:scale-[0.98] transition-all duration-300"
              >
                <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-gray-600" strokeWidth={2} />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 text-left">
                      <p className="text-base font-bold text-gray-900 mb-1">Login</p>
                      <p className="text-xs text-gray-500">Already have a wallet?</p>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex-shrink-0 pt-1">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 3: Create Passkey
  if (currentStep === 'create-passkey') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/25 to-purple-50/20 flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-br from-violet-300/30 to-purple-300/25 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60%] h-[35%] bg-gradient-to-tr from-purple-300/25 to-violet-300/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="flex-1 px-6 flex flex-col relative z-10">
          <div className="w-full mx-auto flex-1 flex flex-col max-w-sm justify-between">
            {/* Top Section */}
            <div className="pt-20 pb-4 flex-shrink-0">
              {/* iDen2 Logo */}
              <div className="flex justify-center mb-14">
                <img
                  src={iden2FullLogo}
                  alt="iDen2"
                  className="h-6 w-auto object-contain opacity-80 drop-shadow-sm"
                />
              </div>

              {/* Decorative Icon */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/20 to-purple-400/15 rounded-3xl blur-2xl"></div>
                  <div className="relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-300/40 ring-1 ring-violet-200/60 p-4">
                    <Key className="w-10 h-10 text-violet-600" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                  Set Up Your Wallet
                </h1>
                <p className="text-sm text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                  Secure your wallet with a passkey
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex-1 flex items-center justify-center py-4 min-h-0">
              <div className="w-full relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-violet-200/50 border border-violet-200/60 overflow-hidden">
                <div className="relative">
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-800 mb-2 tracking-wide">
                      Username
                    </label>
                    <p className="text-xs text-gray-500 mb-4">
                      Choose a username for your wallet
                    </p>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-500" />
                      <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 text-base font-medium bg-white border-2 border-violet-200/70 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 focus:shadow-xl focus:shadow-violet-300/30 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="mb-6 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-4 text-center">
                      Create a passkey using Face ID, Touch ID, or your device PIN
                    </p>
                  </div>

                  {/* Error Message */}
                  {passkeyError && (
                    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                      <p className="text-sm text-amber-800 font-medium text-center">
                        {passkeyError}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handlePasskeyCreate}
                    disabled={!username.trim()}
                    className={`w-full rounded-2xl transition-all duration-300 relative overflow-hidden ${!username.trim()
                      ? 'bg-gray-100 cursor-not-allowed shadow-sm'
                      : 'group shadow-xl shadow-violet-500/40'
                      }`}
                  >
                    {!username.trim() ? (
                      <div className="py-5 flex items-center justify-center gap-3">
                        <span className="text-gray-400 font-bold text-base">Enter username to continue</span>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 transition-all duration-700"></div>
                        <div className="relative py-5 flex items-center justify-center gap-3">
                          <img
                            src={iden2Logo}
                            alt="iDen2 Logo"
                            className="w-6 h-6 object-contain brightness-0 invert drop-shadow-md"
                          />
                          <span className="text-white font-bold text-lg tracking-wide">Create Passkey</span>
                          <ArrowRight className="w-6 h-6 text-white drop-shadow-md transition-transform duration-300" strokeWidth={2.5} />
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pb-10 pt-6 flex-shrink-0">
              <div className="flex flex-row gap-4 justify-center">
                <button
                  onClick={handleBack}
                  className="text-xs text-gray-600 font-medium py-1"
                >
                  Back to Login
                </button>
                <button
                  onClick={() => setCurrentStep('account-recovery')}
                  className="text-xs text-violet-600 font-medium py-1"
                >
                  Account Recovery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 4: Account Recovery
  if (currentStep === 'account-recovery') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/25 to-purple-50/20 flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-br from-violet-300/30 to-purple-300/25 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60%] h-[35%] bg-gradient-to-tr from-purple-300/25 to-violet-300/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="flex-1 px-6 flex flex-col relative z-10">
          <div className="w-full mx-auto flex-1 flex flex-col max-w-sm justify-between">
            {/* Top Section */}
            <div className="pt-20 pb-4 flex-shrink-0">
              {/* iDen2 Logo */}
              <div className="flex justify-center mb-14">
                <img
                  src={iden2FullLogo}
                  alt="iDen2"
                  className="h-6 w-auto object-contain opacity-80 drop-shadow-sm"
                />
              </div>

              {/* Decorative Icon */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/20 to-purple-400/15 rounded-3xl blur-2xl"></div>
                  <div className="relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-300/40 ring-1 ring-violet-200/60 p-4">
                    <Key className="w-10 h-10 text-violet-600" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  Account Recovery
                </h1>
                <p className="text-sm text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                  Use your recovery code to restore access to your wallet
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex-1 flex items-center justify-center py-4 min-h-0">
              <div className="w-full relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-violet-200/50 border border-violet-200/60 overflow-hidden">
                <div className="relative space-y-6">
                  {/* Recovery Code Input */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-4 tracking-wide">
                      Recovery Code
                    </label>
                    <div className="relative">
                      <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-500" />
                      <textarea
                        placeholder="Paste your recovery code here"
                        value={recoveryCodeInput}
                        onChange={(e) => setRecoveryCodeInput(e.target.value)}
                        onPaste={(e) => {
                          const pastedText = e.clipboardData.getData('text');
                          setRecoveryCodeInput(pastedText.trim());
                        }}
                        rows={3}
                        className="w-full pl-12 pr-4 py-4 text-base font-medium bg-white border-2 border-violet-200/70 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 focus:shadow-xl focus:shadow-violet-300/30 transition-all duration-300 placeholder:text-gray-400 resize-none"
                      />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mt-2">
                      Paste one of your recovery codes to restore access
                    </p>
                  </div>

                  {/* Recovery Type Selection */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-4 tracking-wide">
                      Recovery Type
                    </label>
                    <div className="space-y-3">
                      {/* Username Only Option */}
                      <button
                        onClick={() => setRecoveryType('username-only')}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          recoveryType === 'username-only'
                            ? 'border-violet-500 bg-violet-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            recoveryType === 'username-only'
                              ? 'border-violet-500'
                              : 'border-gray-300'
                          }`}>
                            {recoveryType === 'username-only' && (
                              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">Username Only</p>
                            <p className="text-xs text-gray-600">Recover your username only</p>
                          </div>
                        </div>
                      </button>

                      {/* Full Recovery Option */}
                      <button
                        onClick={() => setRecoveryType('full-recovery')}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          recoveryType === 'full-recovery'
                            ? 'border-violet-500 bg-violet-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            recoveryType === 'full-recovery'
                              ? 'border-violet-500'
                              : 'border-gray-300'
                          }`}>
                            {recoveryType === 'full-recovery' && (
                              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">Full Recovery</p>
                            <p className="text-xs text-gray-600">Recover full wallet access</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Recover Button */}
                  <button
                    onClick={() => {
                      if (recoveryCodeInput.trim()) {
                        const type = recoveryType === 'username-only' ? 'username' : 'full wallet';
                        alert(`Recovery initiated! Recovering ${type} access...`);
                        setCurrentStep('create-or-login');
                      }
                    }}
                    disabled={!recoveryCodeInput.trim()}
                    className={`w-full rounded-2xl transition-all duration-300 relative overflow-hidden ${!recoveryCodeInput.trim()
                      ? 'bg-gray-100 cursor-not-allowed shadow-sm'
                      : 'group shadow-xl shadow-violet-500/40'
                      }`}
                  >
                    {!recoveryCodeInput.trim() ? (
                      <div className="py-5 flex items-center justify-center gap-3">
                        <span className="text-gray-400 font-bold text-base">Enter recovery code</span>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600"></div>
                        <div className="relative py-5 flex items-center justify-center gap-3">
                          <span className="text-white font-bold text-base tracking-wide">
                            {recoveryType === 'username-only' ? 'Recover Username' : 'Recover Wallet'}
                          </span>
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pb-10 pt-6 flex-shrink-0">
              <button
                onClick={() => setCurrentStep('create-passkey')}
                className="w-full text-center text-sm text-gray-600 font-medium py-2"
              >
                Back to Create Passkey
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 4: Login Screen
  if (currentStep === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/25 to-purple-50/20 flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-br from-violet-300/30 to-purple-300/25 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60%] h-[35%] bg-gradient-to-tr from-purple-300/25 to-violet-300/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="flex-1 px-6 flex flex-col relative z-10">
          <div className="w-full mx-auto flex-1 flex flex-col max-w-sm justify-between">
            {/* Top Section */}
            <div className="pt-20 pb-4 flex-shrink-0">
              {/* iDen2 Logo */}
              <div className="flex justify-center mb-14">
                <img
                  src={iden2FullLogo}
                  alt="iDen2"
                  className="h-6 w-auto object-contain opacity-80 drop-shadow-sm"
                />
              </div>

              {/* Decorative Icon */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/20 to-purple-400/15 rounded-3xl blur-2xl"></div>
                  <div className="relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-300/40 ring-1 ring-violet-200/60 p-4">
                    <Lock className="w-10 h-10 text-violet-600" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  Welcome Back
                </h1>
                <p className="text-sm text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                  Sign in to access your wallet
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex-1 flex items-center justify-center py-4 min-h-0">
              <div className="w-full relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-violet-200/50 border border-violet-200/60 overflow-hidden">
                <div className="relative space-y-6">
                  {/* Username Input */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                      <User className="w-5 h-5 text-violet-600" strokeWidth={2.5} />
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      className="w-full pl-12 pr-4 py-4 text-base font-medium bg-white border-2 border-violet-200/70 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 focus:shadow-xl focus:shadow-violet-300/30 transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Continue with Passkey Button */}
                  <button
                    onClick={handleSignIn}
                    disabled={isSigningIn || !username.trim()}
                    className={`w-full rounded-2xl transition-all duration-300 relative overflow-hidden ${isSigningIn || !username.trim()
                      ? 'bg-gray-100 cursor-not-allowed shadow-sm'
                      : 'group shadow-xl shadow-violet-500/40'
                      }`}
                  >
                    {isSigningIn ? (
                      <div className="py-5 flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-3 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-gray-400 font-bold text-base">Signing in...</span>
                      </div>
                    ) : !username.trim() ? (
                      <div className="py-5 flex items-center justify-center gap-3">
                        <span className="text-gray-400 font-bold text-base">Enter username to continue</span>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600"></div>
                        <div className="relative py-5 flex items-center justify-center gap-3">
                          <span className="text-white font-bold text-base tracking-wide">Continue with Passkey</span>
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pb-10 pt-6 flex-shrink-0">
              <div className="flex flex-row gap-4 justify-center">
                <button
                  onClick={handleBack}
                  className="text-xs text-gray-600 font-medium py-1"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep('account-recovery')}
                  className="text-xs text-violet-600 font-medium py-1"
                >
                  Account Recovery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 4.5: Recovery Code Screen (after passkey creation)
  if (currentStep === 'recovery-code') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/25 to-purple-50/20 flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-br from-violet-300/30 to-purple-300/25 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60%] h-[35%] bg-gradient-to-tr from-purple-300/25 to-violet-300/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="flex-1 px-6 flex flex-col relative z-10">
          <div className="w-full mx-auto flex-1 flex flex-col max-w-sm justify-between">
            {/* Top Section */}
            <div className="pt-12 pb-6 flex-shrink-0">
              <div className="flex flex-col items-center gap-4">
                {/* iDen2 Logo */}
                <img
                  src={iden2FullLogo}
                  alt="iDen2"
                  className="h-6 w-auto object-contain opacity-80 drop-shadow-sm"
                />

                {/* Title and Description */}
                <div className="text-center mt-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                    Save Your Recovery Codes
                  </h2>
                  <p className="text-xs text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                    Save these codes in a secure location. Each code can be used once to recover your wallet.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex-1 flex items-center justify-center py-4 min-h-0 overflow-y-auto">
              <div className="w-full">
                {/* Recovery Codes Display */}
                <div className="mb-6">
                  <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-2">
                    {recoveryCodes.map((code, index) => (
                      <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-3.5 hover:border-gray-300 transition-colors">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="text-xs font-semibold text-gray-500 w-5 flex-shrink-0">
                              {index + 1}.
                            </span>
                            <code className="text-sm font-mono font-bold text-gray-900 tracking-wider flex-1 truncate">
                              {code}
                            </code>
                          </div>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(code);
                              alert(`Recovery code ${index + 1} copied to clipboard!`);
                            }}
                            className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0"
                          >
                            <Copy className="w-4 h-4 text-gray-600" strokeWidth={2} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-center">
                    <button
                      onClick={() => {
                        const allCodes = recoveryCodes.map((code, idx) => `${idx + 1}. ${code}`).join('\n');
                        navigator.clipboard.writeText(allCodes);
                        alert('All recovery codes copied to clipboard!');
                      }}
                      className="text-xs text-violet-600 font-medium hover:text-violet-700 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" strokeWidth={2} />
                      Copy All Codes
                    </button>
                  </div>
                  <p className="text-xs text-amber-600 text-center font-medium mt-4">
                    ⚠️ Keep these codes secure. Store them in a safe place.
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full rounded-2xl transition-all duration-300 relative overflow-hidden group shadow-xl shadow-violet-500/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 transition-all duration-700"></div>
                  <div className="relative py-5 flex items-center justify-center">
                    <span className="text-white font-bold text-lg tracking-wide">I've Saved My Codes</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Login Modal (keeping for backward compatibility)
  if (showLoginModal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/25 to-purple-50/20 flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-br from-violet-300/30 to-purple-300/25 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60%] h-[35%] bg-gradient-to-tr from-purple-300/25 to-violet-300/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="flex-1 px-6 flex flex-col relative z-10">
          <div className="w-full mx-auto flex-1 flex flex-col max-w-sm justify-between">
            {/* Top Section */}
            <div className="pt-20 pb-4 flex-shrink-0">
              {/* iDen2 Logo */}
              <div className="flex justify-center mb-14">
                <img
                  src={iden2FullLogo}
                  alt="iDen2"
                  className="h-6 w-auto object-contain opacity-80 drop-shadow-sm"
                />
              </div>

              {/* Decorative Icon */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/20 to-purple-400/15 rounded-3xl blur-2xl"></div>
                  <div className="relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-300/40 ring-1 ring-violet-200/60 p-4">
                    <img
                      src={iden2Logo}
                      alt="iDen2 Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  Welcome Back
                </h1>
                <p className="text-sm text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                  Sign in to access your wallet
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex-1 flex items-center justify-center py-4 min-h-0">
              <div className="w-full relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-violet-200/50 border border-violet-200/60 overflow-hidden">
                <div className="relative">
                  <button
                    onClick={handleSignIn}
                    disabled={isSigningIn}
                    className={`w-full rounded-2xl transition-all duration-300 ${isSigningIn
                      ? 'bg-gray-100 cursor-not-allowed shadow-sm'
                      : 'group shadow-xl shadow-violet-500/40'
                      }`}
                  >
                    {isSigningIn ? (
                      <div className="py-5 flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-3 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-gray-400 font-bold text-base">Signing in...</span>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 transition-all duration-700"></div>
                        <div className="relative py-5 flex items-center justify-center gap-3">
                          <img
                            src={iden2Logo}
                            alt="iDen2 Logo"
                            className="w-6 h-6 object-contain brightness-0 invert drop-shadow-md"
                          />
                          <span className="text-white font-bold text-lg tracking-wide">Continue with Passkey</span>
                          <ArrowRight className="w-6 h-6 text-white drop-shadow-md transition-transform duration-300" strokeWidth={2.5} />
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pb-10 pt-6 flex-shrink-0">
              <button
                onClick={() => setShowLoginModal(false)}
                className="w-full text-center text-sm text-gray-600 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 5: Welcome - Simplified version for first-time users
  if (currentStep === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/25 to-purple-50/20 flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-br from-violet-300/30 to-purple-300/25 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60%] h-[35%] bg-gradient-to-tr from-purple-300/25 to-violet-300/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="flex-1 px-6 flex flex-col relative z-10">
          <div className="w-full mx-auto flex-1 flex flex-col max-w-sm justify-between py-12">
            {/* Top Section - Success Message */}
            <div className="flex-shrink-0 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center shadow-xl shadow-violet-300/50">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                You're All Set!
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Your wallet is ready. Add your first ID to get started.
              </p>
            </div>

            {/* Middle Section - How It Works */}
            <div className="flex-1 flex items-center justify-center py-6">
              <div className="w-full space-y-4">
                {/* Step 1: Add ID */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-violet-200/60 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md shadow-violet-200">
                      <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 mb-1">Add Your ID</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Scan your government-issued ID
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Scan */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-violet-200/60 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                      <QrCode className="w-6 h-6 text-violet-600" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 mb-1">Scan QR Codes</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Scan when businesses request verification
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3: Share */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-violet-200/60 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-violet-600" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 mb-1">Share Selectively</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Control what information to share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Action Buttons */}
            <div className="space-y-3 flex-shrink-0">
              <button
                onClick={() => console.log('Add ID - Not implemented yet')}
                className="w-full group active:scale-[0.98] transition-all duration-300"
              >
                <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 rounded-2xl py-4 flex items-center justify-center gap-2 shadow-xl shadow-violet-500/40">
                  <Plus className="w-5 h-5 text-white" strokeWidth={2} />
                  <span className="text-white font-bold text-base">Add Your First ID</span>
                </div>
              </button>
              <button
                onClick={() => console.log('Do It Later - Not implemented yet')}
                className="w-full bg-white border border-gray-200 text-violet-600 font-medium text-sm py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                Do It Later
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 6: Wallet View (Next Steps) - Two States - First Time vs Returning User
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-hidden">
      {/* Full Logo Header */}
      <div className="relative z-10 px-6 pt-6 pb-4 flex items-center justify-center">
        <img
          src={iden2FullLogo}
          alt="iDen2"
          className="h-5 w-auto object-contain opacity-80"
        />
      </div>

      {!hasIds ? (
        // First Time User State
        <div className="flex-1 relative z-10 px-6 py-8 flex flex-col justify-center">
          {/* Dashboard Button - Top Right - Absolute */}
          <div className="absolute top-2 right-6 z-20">
            <button
              onClick={() => {
                setIsDashboardSpinning(true);
                setTimeout(() => {
                  setHasIds(!hasIds);
                  setIsDashboardSpinning(false);
                }, 500);
              }}
              className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl active:scale-95 transition-all duration-300 flex items-center gap-2 text-xs font-bold shadow-md group"
            >
              <Settings className={`w-4 h-4 transition-transform duration-500 ${isDashboardSpinning ? 'rotate-90' : ''}`} />
              <span>Dashboard</span>
            </button>
          </div>

          <div className="w-full space-y-5">
            {/* Primary CTA - Dominant */}
            <button
              onClick={() => {
                alert('QR Scanner would open here');
              }}
              className="w-full p-10 bg-gradient-to-br from-violet-600 via-violet-600 to-purple-700 text-white rounded-3xl active:scale-[0.97] transition-all duration-300 flex flex-col items-center justify-center gap-5 shadow-2xl shadow-violet-500/50 group relative overflow-hidden"
            >
              <div className="relative w-20 h-20 bg-white/25 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg transition-transform duration-300">
                <QrCode className="w-10 h-10 drop-shadow-md transition-transform duration-300" strokeWidth={2.5} />
              </div>
              <div className="relative flex flex-col items-center gap-2.5">
                <span className="font-bold text-2xl tracking-tight">Scan QR Code</span>
                <span className="text-sm text-white/90 font-medium leading-relaxed px-4">Scan a QR code to receive and add credentials to your wallet</span>
              </div>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="text-sm text-gray-500 font-bold tracking-wider">OR</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Secondary CTA - Dominant */}
            <button
              onClick={() => {
                const requestString = prompt('Paste your request string:');
                if (requestString) {
                  alert('Processing request string...');
                }
              }}
              className="w-full p-10 bg-white border-2 border-gray-300 text-gray-900 rounded-3xl active:scale-[0.97] transition-all duration-300 flex flex-col items-center justify-center gap-5 shadow-xl group relative overflow-hidden"
            >
              <div className="relative w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-lg transition-all duration-300 ring-1 ring-violet-200/50">
                <Copy className="w-10 h-10 text-violet-600 drop-shadow-sm transition-transform duration-300" strokeWidth={2.5} />
              </div>
              <div className="relative flex flex-col items-center gap-2.5">
                <span className="font-bold text-2xl tracking-tight">Paste Request String</span>
                <span className="text-sm text-gray-700 font-medium leading-relaxed px-4">Paste a credential request string to add it to your wallet</span>
              </div>
            </button>
          </div>
        </div>
      ) : (
        // Returning User State - Real Card Style
        <div className="flex-1 relative z-10 px-6 py-8 flex flex-col">
          {/* Dashboard Button - Top Right - Absolute */}
          <div className="absolute top-2 right-6 z-20">
            <button
              onClick={() => {
                setIsDashboardSpinning(true);
                setTimeout(() => {
                  setHasIds(!hasIds);
                  setIsDashboardSpinning(false);
                }, 500);
              }}
              className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl active:scale-95 transition-all duration-300 flex items-center gap-2 text-xs font-bold shadow-md group"
            >
              <Settings className={`w-4 h-4 transition-transform duration-500 ${isDashboardSpinning ? 'rotate-90' : ''}`} />
              <span>Dashboard</span>
            </button>
          </div>

          {/* IDs - Flip Card Design */}
          <div className="flex-1 space-y-6 mb-4 pt-14 overflow-y-auto max-h-[calc(100vh-300px)] pr-2 pb-4">
            {mockIds.map((id, index) => {
              const IconComponent = id.icon;
              const isFlipped = flippedCard === id.id;

              // Different color schemes for each ID - Active but subtle
              const colorSchemes = [
                {
                  gradient: 'from-gray-100 to-white',
                  accent: 'border-l-4 border-violet-500',
                  iconBg: 'bg-violet-100',
                  iconColor: 'text-violet-700',
                  textColor: 'text-gray-900',
                  textSecondary: 'text-gray-700',
                  glow: 'bg-violet-100/40',
                  shadow: 'shadow-lg shadow-gray-300/50',
                  border: 'border border-gray-200',
                },
                {
                  gradient: 'from-slate-100 to-white',
                  accent: 'border-l-4 border-purple-500',
                  iconBg: 'bg-purple-100',
                  iconColor: 'text-purple-700',
                  textColor: 'text-slate-900',
                  textSecondary: 'text-slate-700',
                  glow: 'bg-purple-100/40',
                  shadow: 'shadow-lg shadow-slate-300/50 hover:shadow-xl hover:shadow-slate-400/60',
                  border: 'border border-slate-200',
                },
              ];

              const colors = colorSchemes[index % colorSchemes.length];

              return (
                <div
                  key={id.id}
                  className="w-full relative"
                  style={{
                    transform: `translateY(${index * 5}px)`,
                    perspective: '1200px',
                  }}
                >
                  {/* Card Container with Flip */}
                  <div
                    className="relative w-full h-52 cursor-pointer group"
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                    onClick={() => setFlippedCard(isFlipped ? null : id.id)}
                  >
                    {/* Front of Card */}
                    <div
                      className={`absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br ${colors.gradient} ${colors.accent} ${colors.border} shadow-md ${colors.shadow} transition-all duration-300 overflow-hidden`}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      {/* Subtle pattern */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/50 rounded-full blur-3xl"></div>
                      <div className={`absolute bottom-0 left-0 w-32 h-32 ${colors.glow} rounded-full blur-2xl`}></div>

                      <div className="relative h-full flex flex-col justify-between">
                        {/* Top: Icon and Issuer */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${colors.iconBg} rounded-2xl flex items-center justify-center shadow-md`}>
                              <IconComponent className={`w-6 h-6 ${colors.iconColor}`} strokeWidth={2.5} />
                            </div>
                            <div>
                              <p className={`${colors.textSecondary} text-xs uppercase tracking-[0.15em] font-semibold`}>{id.issuer}</p>
                            </div>
                          </div>
                          {/* Expiring Soon Badge */}
                          {id.id === '1' && (
                            <div className="px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-full border border-amber-400/30 shadow-sm">
                              <p className="text-amber-700 text-[10px] font-semibold uppercase tracking-wider">Expiring Soon</p>
                            </div>
                          )}
                        </div>

                        {/* Bottom: Credential Name */}
                        <div>
                          <p className={`${colors.textColor} font-bold text-2xl mb-2 tracking-tight`}>{id.type}</p>
                          <p className={`${colors.textSecondary} text-xs font-medium`}>Tap to view details</p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className={`absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br ${colors.gradient} ${colors.accent} ${colors.border} shadow-md ${colors.shadow} overflow-hidden`}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      {/* Subtle pattern */}
                      <div className="absolute top-0 left-0 w-40 h-40 bg-white/50 rounded-full blur-3xl"></div>

                      <div className="relative h-full flex flex-col justify-center space-y-5">
                        <div>
                          <p className={`${colors.textSecondary} text-xs font-semibold mb-2 tracking-wider uppercase`}>ID Number</p>
                          <p className={`${colors.textColor} text-sm font-mono font-medium tracking-wide`}>{id.number}</p>
                        </div>
                        <div>
                          <p className={`${colors.textSecondary} text-xs font-semibold mb-2 tracking-wider uppercase`}>Expires</p>
                          <p className={`${colors.textColor} text-sm font-medium`}>{id.expiry}</p>
                        </div>
                        <div className="pt-4 text-center border-t border-gray-300/30">
                          <p className={`${colors.textSecondary} text-xs font-medium`}>Tap to flip back</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

            {/* Main Actions - Sticky Footer with Transparency */}
            <div className="sticky bottom-0 left-0 right-0 pt-6 pb-6 -mx-6 px-6 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-sm">
              {/* Gradient fade indicator */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white/50 pointer-events-none"></div>

              <div className="flex gap-4 relative z-10">
                {/* Action 1: Paste Request */}
                <button
                  onClick={() => {
                    const requestString = prompt('Paste your request string:');
                    if (requestString) {
                      alert('Processing request string...');
                    }
                  }}
                  className="flex-1 p-7 bg-white/90 backdrop-blur-md border-2 border-gray-200 text-gray-900 rounded-3xl active:scale-[0.97] transition-all duration-300 flex flex-col items-center justify-center gap-3 shadow-md group"
                >
                  <div className="relative flex items-center gap-3">
                    <Copy className="w-6 h-6 text-gray-600 transition-transform duration-300" strokeWidth={2.5} />
                    <span className="font-bold text-xl tracking-tight">Paste Request String</span>
                  </div>
                  <span className="relative text-sm text-gray-600 font-medium leading-relaxed text-center">Paste a request string to share your credentials</span>
                </button>

                {/* Action 2: Scan to Share */}
                <button
                  onClick={() => {
                    alert('QR Scanner would open here');
                  }}
                  className="flex-1 p-7 bg-gradient-to-br from-violet-600/95 to-purple-600/95 backdrop-blur-md text-white rounded-3xl active:scale-[0.97] transition-all duration-300 flex flex-col items-center justify-center gap-3 shadow-lg shadow-violet-500/30 group relative overflow-hidden"
                >
                  <div className="relative flex items-center gap-3">
                    <QrCode className="w-6 h-6 drop-shadow-md transition-transform duration-300" strokeWidth={2.5} />
                    <span className="font-bold text-xl tracking-tight">Scan to Share</span>
                  </div>
                  <span className="relative text-sm text-white/90 font-medium leading-relaxed text-center">Scan a QR code to share your credentials</span>
                </button>
              </div>
            </div>
        </div>
      )
      }
    </div>
  );
}
