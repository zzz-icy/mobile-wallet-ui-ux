import { useState, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import OnboardingWelcomeOriginal from './OnboardingWelcomeOriginal';
import SelectiveDisclosureDemo from './SelectiveDisclosureDemo';
import SelectiveDisclosureSingleSource from './SelectiveDisclosureSingleSource';

type ViewType = 'onboarding' | 'onboarding-original' | 'disclosure' | 'disclosure-single';

const viewLabels: Record<ViewType, string> = {
  'onboarding': 'New Onboarding',
  'onboarding-original': 'Original Onboarding',
  'disclosure': 'Disclosure',
  'disclosure-single': 'Disclosure (Single Source)'
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('disclosure-single');
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showDropdown && !target.closest('.view-switcher-container')) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showDropdown]);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    setShowDropdown(false);
  };

  return (
    <>
      {/* View Switcher - Positioned to not block mobile UI */}
      {/* <div className="view-switcher-container fixed top-4 right-4 z-[100]">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-white/90 backdrop-blur-sm text-gray-600 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white transition-all flex items-center gap-1.5 text-xs sm:text-sm font-normal shadow-sm min-w-[120px] sm:min-w-[180px] justify-between"
          title="Switch view"
          aria-label="Switch view"
        >
          <span className="hidden sm:inline truncate">
            {viewLabels[currentView]}
          </span>
          <span className="sm:hidden truncate text-xs">
            {currentView === 'onboarding' && 'New'}
            {currentView === 'onboarding-original' && 'Original'}
            {currentView === 'disclosure' && 'Disclosure'}
            {currentView === 'disclosure-single' && 'Single'}
          </span>
          <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
        </button>

        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[180px] z-50">
            {Object.entries(viewLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleViewChange(key as ViewType)}
                className={`w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${currentView === key ? 'bg-violet-50 text-violet-900' : 'text-gray-700'
                  }`}
              >
                <span>{label}</span>
                {currentView === key && (
                  <Check className="w-4 h-4 text-violet-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div> */}

      {/* {currentView === 'onboarding' && <OnboardingWelcome />} */}
      {currentView === 'onboarding-original' && <OnboardingWelcomeOriginal />}
      {currentView === 'disclosure' && <SelectiveDisclosureDemo />}
      {currentView === 'disclosure-single' && <SelectiveDisclosureSingleSource />}
    </>
  );
}

