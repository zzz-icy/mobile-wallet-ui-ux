import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import OnboardingWelcome from './OnboardingWelcome';
import OnboardingWelcomeOriginal from './OnboardingWelcomeOriginal';
import SelectiveDisclosureDemo from './SelectiveDisclosureDemo';

type ViewType = 'onboarding' | 'onboarding-original' | 'disclosure';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('onboarding');

  return (
    <>
      {/* View Switcher - Positioned to not block mobile UI */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2">
        <button
          onClick={() => {
            const views: ViewType[] = ['onboarding', 'onboarding-original', 'disclosure'];
            const currentIndex = views.indexOf(currentView);
            const nextIndex = (currentIndex + 1) % views.length;
            setCurrentView(views[nextIndex]);
          }}
          className="bg-white/90 backdrop-blur-sm text-gray-600 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white transition-all flex items-center gap-1.5 text-xs sm:text-sm font-normal shadow-sm"
          title="Switch view"
          aria-label="Switch view"
        >
          <ArrowLeftRight className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">
            {currentView === 'onboarding' && 'New Onboarding'}
            {currentView === 'onboarding-original' && 'Original Onboarding'}
            {currentView === 'disclosure' && 'Disclosure'}
          </span>
        </button>
      </div>

      {currentView === 'onboarding' && <OnboardingWelcome />}
      {currentView === 'onboarding-original' && <OnboardingWelcomeOriginal />}
      {currentView === 'disclosure' && <SelectiveDisclosureDemo />}
    </>
  );
}

