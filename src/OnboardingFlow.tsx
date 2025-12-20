import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Shield, QrCode, Copy, User, Key, Check, Lock, FileText, Plus, Share2 } from 'lucide-react';
import iden2Logo from './iden2_logo.png';
import iden2FullLogo from './iden2_full_logo.svg';

type OnboardingStep = 'overview' | 'signin' | 'next-steps';

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('overview');
  const [username, setUsername] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleNext = () => {
    if (currentStep === 'overview') {
      setCurrentStep('signin');
    } else if (currentStep === 'signin') {
      setCurrentStep('next-steps');
    }
  };

  const handleBack = () => {
    if (currentStep === 'signin') {
      setCurrentStep('overview');
    } else if (currentStep === 'next-steps') {
      setCurrentStep('signin');
    }
  };

  const handleSignIn = () => {
    setIsSigningIn(true);
    // Simulate sign in process
    setTimeout(() => {
      setIsSigningIn(false);
      setCurrentStep('next-steps');
    }, 1500);
  };

  // Screen 1: Overview / How it works - Disruptive Design
  if (currentStep === 'overview') {
    return (
      <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-hidden">
        {/* Abstract Background Shapes - Subtle Purple Accents */}
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[50%] bg-violet-100/40 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[70%] h-[40%] bg-purple-100/30 rounded-full blur-[60px]"></div>

        {/* Full Logo Header */}
        <div className="relative z-10 px-6 pt-6 pb-2 flex justify-center">
          <img
            src={iden2FullLogo}
            alt="iDen2"
            className="h-5 w-auto object-contain opacity-70"
          />
        </div>

        {/* Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
          
          {/* Hero Visual - More Abstract & Artistic */}
          <div className="mb-10 relative">
            <div className="absolute -inset-8 bg-violet-100/50 rounded-full blur-3xl"></div>
            <div className="relative w-40 h-40 bg-gradient-to-br from-violet-50 to-purple-50 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center ring-2 ring-violet-200/50 shadow-2xl shadow-violet-200/30 transition-transform hover:scale-105 duration-700">
              <img
                src={iden2Logo}
                alt="iDen2 Logo"
                className="w-24 h-24 object-contain drop-shadow-lg"
              />
            </div>
            
            {/* Floating Elements */}
            {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-violet-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center rotate-12 ring-2 ring-violet-200/50 shadow-lg animate-bounce duration-[3000ms]">
              <Shield className="w-6 h-6 text-violet-600" />
            </div>
            <div className="absolute -bottom-2 -left-6 w-14 h-14 bg-purple-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center -rotate-6 ring-2 ring-purple-200/50 shadow-lg animate-bounce duration-[4000ms]">
              <User className="w-7 h-7 text-purple-600" />
            </div> */}
          </div>

          {/* Text Content */}
          <div className="text-center space-y-2 mb-20 px-2">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">
              A PLATFORM FOR DIGITAL IDENTITY
            </p>
            {/* <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
              SECURE • PRIVATE • YOURS
            </p> */}
          </div>

          {/* How It Works - Visual Flow */}
          <div className="w-full mb-12 px-4">
            <div className="flex items-center justify-center gap-3">
              {/* Step 1: Add */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center ring-2 ring-violet-200/50 shadow-lg mb-2">
                  <Plus className="w-8 h-8 text-violet-600" strokeWidth={2} />
                </div>
                <p className="text-xs font-medium text-gray-600 text-center mt-1">Add</p>
              </div>
              
              {/* Arrow */}
              <div className="flex items-center -mt-6">
                <ArrowRight className="w-5 h-5 text-violet-400" strokeWidth={2.5} />
              </div>

              {/* Step 2: Scan */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center ring-2 ring-violet-200/50 shadow-lg mb-2">
                  <QrCode className="w-8 h-8 text-violet-600" strokeWidth={2} />
                </div>
                <p className="text-xs font-medium text-gray-600 text-center mt-1">Scan</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center -mt-6">
                <ArrowRight className="w-5 h-5 text-violet-400" strokeWidth={2.5} />
              </div>

              {/* Step 3: Share */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center ring-2 ring-violet-200/50 shadow-lg mb-2">
                  <Share2 className="w-8 h-8 text-violet-600" strokeWidth={2} />
                </div>
                <p className="text-xs font-medium text-gray-600 text-center mt-1">Share</p>
              </div>
            </div>
          </div>

          {/* Single Primary Action */}
          <button
            onClick={handleNext}
            className="w-full bg-violet-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-violet-700 active:scale-[0.98] transition-all shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2 text-base group border border-violet-500/20"
          >
            <span>Enter Wallet</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // Screen 2: Sign in / Sign up - Disruptive Design
  if (currentStep === 'signin') {
    return (
      <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
        {/* Minimal Header */}
        <div className="px-6 py-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-violet-600 font-bold text-lg tracking-wide">iDen2</div>
          <div className="w-6"></div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 flex flex-col justify-center pb-12">
          <div className="w-full max-w-sm mx-auto">
            {/* Large Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Sign In
            </h1>
            <p className="text-base text-gray-600 mb-12">
              Use your passkey to continue
            </p>

            {/* Username Input - Large */}
            <div className="mb-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-base bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
                />
              </div>
            </div>

            {/* Passkey Button - Large & Bold */}
            <button
              onClick={handleSignIn}
              disabled={!username.trim() || isSigningIn}
              className={`w-full font-bold py-5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 mb-6 text-lg ${
                !username.trim() || isSigningIn
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-violet-600 text-white hover:bg-violet-700 active:scale-[0.98] shadow-violet-500/30'
              }`}
            >
              {isSigningIn ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <Key className="w-6 h-6" />
                  <span>Continue with Passkey</span>
                </>
              )}
            </button>

            {/* Sign Up - Subtle */}
            <p className="text-sm text-gray-500 text-center">
              New here?{' '}
              <button className="text-violet-600 font-semibold hover:text-violet-700">
                Create account
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Screen 3: Landing Page Style - Disruptive Design
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600/95 via-purple-600/85 to-violet-700/95 flex flex-col max-w-md mx-auto text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Minimal Header */}
      <div className="relative z-10 px-6 py-6 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white font-bold text-lg tracking-wide">iDen2</div>
        <div className="w-6"></div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 relative z-10 px-6 py-8 flex flex-col justify-center">
        <div className="w-full">
          {/* Massive Icon */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute -inset-8 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-40 h-40 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center ring-4 ring-white/20 shadow-2xl">
                <QrCode className="w-20 h-20 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-center mb-6 leading-tight">
            Let's Get<br />Started
          </h1>
          <p className="text-xl text-white/90 text-center mb-16 font-medium">
            Add your first credential
          </p>

          {/* Primary CTA - Massive */}
          <button 
            onClick={() => {
              alert('QR Scanner would open here');
            }}
            className="w-full p-7 bg-white text-violet-700 rounded-2xl hover:bg-white/95 active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-black/30 font-bold text-xl mb-6 group"
          >
            <QrCode className="w-7 h-7 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
            <span>Scan QR Code</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/30"></div>
            <span className="text-sm text-white/70 font-medium">OR</span>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>

          {/* Secondary CTA */}
          <button 
            onClick={() => {
              const requestString = prompt('Paste your request string:');
              if (requestString) {
                alert('Processing request string...');
              }
            }}
            className="w-full p-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-white/50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 font-semibold text-base group"
          >
            <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
            <span>Paste Request String</span>
          </button>
        </div>
      </div>
    </div>
  );
}
