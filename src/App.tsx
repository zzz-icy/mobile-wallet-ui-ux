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
          className="bg-violet-600 text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-violet-700 transition-colors flex items-center gap-2 text-sm font-medium"
          title="Switch view"
          aria-label="Switch view"
        >
          <ArrowLeftRight className="w-4 h-4" />
          <span>
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

