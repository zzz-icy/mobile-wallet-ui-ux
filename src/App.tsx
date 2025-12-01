import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import OnboardingWelcome from './OnboardingWelcome';
import SelectiveDisclosureDemo from './SelectiveDisclosureDemo';

export default function App() {
  const [currentView, setCurrentView] = useState<'onboarding' | 'disclosure'>('onboarding');

  return (
    <>
      {/* View Switcher - Positioned to not block mobile UI */}
      <button
        onClick={() => setCurrentView(currentView === 'onboarding' ? 'disclosure' : 'onboarding')}
        className="fixed top-4 right-4 z-[100] bg-violet-600 text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-violet-700 transition-colors flex items-center gap-2 text-sm font-medium"
        title={`Switch to ${currentView === 'onboarding' ? 'Selective Disclosure' : 'Onboarding'}`}
        aria-label="Switch view"
      >
        <ArrowLeftRight className="w-4 h-4" />
        <span>{currentView === 'onboarding' ? 'Disclosure' : 'Onboarding'}</span>
      </button>

      {currentView === 'onboarding' ? <OnboardingWelcome /> : <SelectiveDisclosureDemo />}
    </>
  );
}

