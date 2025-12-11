import React, { useState } from 'react';
import { Check, ChevronDown, Shield, Info, AlertCircle, Clock, Plus, X, CreditCard, FileText, Car } from 'lucide-react';

type Source = {
  id: string;
  name: string;
  value: string;
  derived?: boolean;
  expired?: boolean;
  oldData?: boolean;
  issueDate?: string;
  calculatedFrom?: string;
  recommended?: boolean;
};

type Field = {
  id: string;
  label: string;
  sources: Source[];
  required: boolean;
  description: string;
  privacyPreserving?: boolean;
  missing?: boolean;
  sensitive?: boolean;
  newRequest?: boolean;
  previouslyShared?: boolean;
  unchangingData?: boolean;
  hasMultipleIdentities?: boolean;
  lessPrivate?: boolean;
  derived?: boolean;
};

type Scenario = {
  name: string;
  verifier: {
    name: string;
    purpose: string;
    icon: string;
  };
  fields: Field[];
  excessiveRequest?: boolean;
  previouslyShared?: {
    date: string;
    fields: string[];
  };
};

type ScenarioKey = 'age-verification' | 'address-verification' | 'expired-credential' | 'missing-required' | 'excessive-fields' | 'previous-sharing';

export default function SelectiveDisclosureSingleSource() {
  const [currentScenario, setCurrentScenario] = useState<ScenarioKey>('age-verification');
  const [selectedFields, setSelectedFields] = useState<Record<string, boolean>>({});
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [selectedDataOptions, setSelectedDataOptions] = useState<Record<string, string>>({}); // fieldId -> sourceId
  const [expandedField, setExpandedField] = useState<string | null>(null);
  const [showScenarios, setShowScenarios] = useState(false);

  const scenarios: Record<ScenarioKey, Scenario> = {
    'age-verification': {
      name: 'Age Verification',
      verifier: {
        name: "Downtown Bar & Lounge",
        purpose: "Age Verification",
        icon: "🍺"
      },
      fields: [
        { 
          id: 'ageVerification', 
          label: 'Age Verification (Over 21)', 
          sources: [
            { id: 'derived-passport', name: 'Passport', value: 'Verified: Over 21', derived: true, calculatedFrom: 'Date of Birth' },
            { id: 'derived-drivers', name: "Driver's License", value: 'Verified: Over 21', derived: true, calculatedFrom: 'Date of Birth' }
          ],
          required: true,
          description: 'Prove you meet minimum age',
          privacyPreserving: true,
          derived: true
        },
        { 
          id: 'alternativeProof',
          label: 'Alternative: Share Date of Birth', 
          sources: [
            { id: 'passport', name: 'Passport', value: 'March 15, 1996' },
            { id: 'drivers', name: "Driver's License", value: 'March 15, 1996' }
          ],
          required: false,
          description: '',
          lessPrivate: true
        },
        { 
          id: 'fullName',
          label: 'Full Name', 
          sources: [
            { id: 'passport', name: 'Passport', value: 'Sami Kandur' },
            { id: 'drivers', name: "Driver's License", value: 'Sami Kandur' }
          ],
          required: false,
          description: ''
        }
      ]
    },
    'address-verification': {
      name: 'Address Verification',
      verifier: {
        name: "QuickShip Delivery",
        purpose: "Delivery Address Verification",
        icon: "📦"
      },
      fields: [
        { 
          id: 'fullName', 
          label: 'Full Name', 
          sources: [
            { id: 'drivers', name: "Driver's License", value: 'Sami Kandur' },
            { id: 'passport', name: 'Passport', value: 'Sami Kandur' }
          ],
          required: true,
          description: ''
        },
        { 
          id: 'fullAddress', 
          label: 'Full Address', 
          sources: [
            { id: 'drivers', name: "Driver's License", value: '123 Main St, Austin, TX 78701' },
            { id: 'utility', name: "Utility Bill", value: '123 Main St, Austin, TX 78701' }
          ],
          required: true,
          description: ''
        },
        { 
          id: 'phoneNumber', 
          label: 'Phone Number', 
          sources: [
            { id: 'contact', name: "Contact Info", value: '(512) 555-0123' }
          ],
          required: false,
          description: ''
        }
      ]
    },
    'expired-credential': {
      name: '⚠️ Edge: Expired Credential',
      verifier: {
        name: "Airport Security TSA",
        purpose: "Identity Verification",
        icon: "✈️"
      },
      fields: [
        { 
          id: 'fullName', 
          label: 'Full Name', 
          sources: [
            { id: 'passport', name: "Passport", value: 'Sami Kandur', expired: true },
            { id: 'drivers', name: "Driver's License", value: 'Sami Kandur', expired: false }
          ],
          required: true,
          description: ''
        },
        { 
          id: 'photo', 
          label: 'Photo ID', 
          sources: [
            { id: 'passport', name: "Passport", value: 'Photo available', expired: true },
            { id: 'drivers', name: "Driver's License", value: 'Photo available', expired: false }
          ],
          required: true,
          description: ''
        },
        { 
          id: 'dateOfBirth', 
          label: 'Date of Birth', 
          sources: [
            { id: 'passport', name: "Passport", value: 'March 15, 1996', expired: true },
            { id: 'drivers', name: "Driver's License", value: 'March 15, 1996', expired: false }
          ],
          required: true,
          description: ''
        }
      ]
    },
    'missing-required': {
      name: '⚠️ Edge: Missing Required Field',
      verifier: {
        name: "International Conference",
        purpose: "Professional Registration",
        icon: "🎤"
      },
      fields: [
        { 
          id: 'fullName', 
          label: 'Full Name', 
          sources: [
            { id: 'passport', name: 'Passport', value: 'Sami Kandur' }
          ],
          required: true,
          description: ''
        },
        { 
          id: 'professionalLicense', 
          label: 'Professional License Number', 
          sources: [],
          required: true,
          description: '',
          missing: true
        },
        { 
          id: 'organization', 
          label: 'Organization/Company', 
          sources: [
            { id: 'linkedin', name: 'LinkedIn', value: 'Acme Corp' }
          ],
          required: false,
          description: ''
        }
      ]
    },
    'excessive-fields': {
      name: '⚠️ Edge: Too Many Required Fields',
      verifier: {
        name: "Suspicious Data Broker",
        purpose: "Data Collection",
        icon: "⚠️"
      },
      excessiveRequest: true,
      fields: [
        { id: 'fullName', label: 'Full Name', sources: [{ id: 'passport', name: 'Passport', value: 'Sami Kandur' }], required: true, description: 'Required field 1/12' },
        { id: 'dateOfBirth', label: 'Date of Birth', sources: [{ id: 'passport', name: 'Passport', value: 'March 15, 1996' }], required: true, description: 'Required field 2/12' },
        { id: 'ssn', label: 'Social Security Number', sources: [{ id: 'ssn', name: 'SSN Card', value: '***-**-1234' }], required: true, description: 'Required field 3/12', sensitive: true },
        { id: 'address', label: 'Home Address', sources: [{ id: 'drivers', name: "Driver's License", value: '123 Main St, Austin, TX 78701' }], required: true, description: 'Required field 4/12' },
        { id: 'phone', label: 'Phone Number', sources: [{ id: 'contact', name: 'Contact Info', value: '(512) 555-0123' }], required: true, description: 'Required field 5/12' },
        { id: 'email', label: 'Email Address', sources: [{ id: 'contact', name: 'Contact Info', value: 'sami.kandur@email.com' }], required: true, description: 'Required field 6/12' },
        { id: 'employer', label: 'Current Employer', sources: [{ id: 'employment', name: 'Employment Record', value: 'Acme Corp' }], required: true, description: 'Required field 7/12' },
        { id: 'salary', label: 'Annual Salary', sources: [{ id: 'tax', name: 'Tax Return', value: '$125,400' }], required: true, description: 'Required field 8/12', sensitive: true },
        { id: 'credit', label: 'Credit Score', sources: [{ id: 'credit', name: 'Credit Report', value: '775' }], required: true, description: 'Required field 9/12', sensitive: true },
        { id: 'bank', label: 'Bank Account Number', sources: [{ id: 'bank', name: 'Bank Statement', value: '****1234' }], required: true, description: 'Required field 10/12', sensitive: true },
        { id: 'medical', label: 'Medical History', sources: [], required: true, description: 'Required field 11/12', missing: true, sensitive: true },
        { id: 'biometric', label: 'Fingerprint Data', sources: [], required: true, description: 'Required field 12/12', missing: true, sensitive: true }
      ]
    },
    'previous-sharing': {
      name: '⚠️ Edge: Previously Shared Different Data',
      verifier: {
        name: "Coffee Shop Rewards",
        purpose: "Loyalty Program Check-in",
        icon: "☕"
      },
      previouslyShared: {
        date: 'Last visit: Nov 15, 2025',
        fields: ['Full Name', 'Phone Number']
      },
      fields: [
        { 
          id: 'fullName', 
          label: 'Full Name', 
          sources: [
            { id: 'passport', name: 'Passport', value: 'Sami Kandur' }
          ],
          required: true,
          description: '',
          previouslyShared: true
        },
        { 
          id: 'email', 
          label: 'Email Address', 
          sources: [
            { id: 'contact', name: 'Contact Info', value: 'sami.kandur@email.com' }
          ],
          required: true,
          description: '',
          previouslyShared: false,
          newRequest: true
        },
        { 
          id: 'phoneNumber', 
          label: 'Phone Number', 
          sources: [
            { id: 'contact', name: 'Contact Info', value: '(512) 555-0123' }
          ],
          required: false,
          description: 'Optional for order notifications',
          previouslyShared: true
        }
      ]
    }
  };

  const currentData = scenarios[currentScenario];

  // Extract base source name (e.g., "passport" from "derived-passport" or "passport")
  const getBaseSourceName = (sourceId: string): string => {
    // Remove "derived-" prefix if present, then take the base name
    const withoutPrefix = sourceId.replace(/^derived-/, '');
    // For IDs like "derived-passport" -> "passport", "passport" -> "passport"
    // For IDs with additional parts like "derived-drivers-license", take first part
    const parts = withoutPrefix.split('-');
    return parts[0];
  };

  // Get display name for a base source (use the simplest name from sources)
  const getDisplayNameForBase = (sources: Source[]): string => {
    // Prefer non-derived source name, or first available
    const nonDerived = sources.find(s => !s.derived);
    if (nonDerived) return nonDerived.name;
    return sources[0]?.name || '';
  };

  // Get all unique base sources (grouped by base name)
  const getBaseSources = (): { baseName: string; displayName: string; sources: Source[] }[] => {
    const baseSourceMap = new Map<string, Source[]>();
    
    currentData.fields.forEach((field: Field) => {
      field.sources.forEach((source: Source) => {
        const baseName = getBaseSourceName(source.id);
        
        if (!baseSourceMap.has(baseName)) {
          baseSourceMap.set(baseName, []);
        }
        const sources = baseSourceMap.get(baseName)!;
        if (!sources.find(s => s.id === source.id)) {
          sources.push(source);
        }
      });
    });
    
    return Array.from(baseSourceMap.entries()).map(([baseName, sources]) => ({
      baseName,
      displayName: getDisplayNameForBase(sources),
      sources
    }));
  };

  // Get fields available from the selected base source
  const getFieldsForBaseSource = (baseName: string): Field[] => {
    return currentData.fields.filter((field: Field) => 
      field.sources.some((s: Source) => getBaseSourceName(s.id) === baseName)
    );
  };

  // Get all data options (sources) for a field from the selected base source
  const getDataOptionsForField = (field: Field, baseName: string): Source[] => {
    return field.sources.filter((s: Source) => getBaseSourceName(s.id) === baseName);
  };

  // Get the selected source object for a field
  const getSelectedSourceForField = (field: Field): Source | undefined => {
    const selectedSourceId = selectedDataOptions[field.id];
    if (!selectedSourceId) return undefined;
    return field.sources.find((s: Source) => s.id === selectedSourceId);
  };

  // Get the display value for a field (selected source or first available)
  const getDisplayValueForField = (field: Field, baseName: string): string => {
    const selectedSource = getSelectedSourceForField(field);
    if (selectedSource) return selectedSource.value;

    // If no option selected, show first available option's value
    const dataOptions = getDataOptionsForField(field, baseName);
    return dataOptions[0]?.value || '';
  };

  const baseSources = getBaseSources();
  const availableFields = selectedSource ? getFieldsForBaseSource(selectedSource) : [];
  const selectedBaseSource = baseSources.find(s => s.baseName === selectedSource);

  // Get icon for source type
  const getSourceIcon = (sourceName: string, isSelected: boolean) => {
    const lowerName = sourceName.toLowerCase();
    const iconColor = isSelected ? 'text-violet-600' : 'text-gray-400';

    if (lowerName.includes('passport')) {
      return <CreditCard className={`w-5 h-5 ${iconColor}`} />;
    } else if (lowerName.includes('driver') || lowerName.includes('license')) {
      return <Car className={`w-5 h-5 ${iconColor}`} />;
    } else {
      return <FileText className={`w-5 h-5 ${iconColor}`} />;
    }
  };

  const toggleField = (fieldId: string) => {
    const field = availableFields.find((f: Field) => f.id === fieldId);
    if (!field || field.required || field.missing || !selectedSource) return;

    const willBeSelected = !selectedFields[fieldId];
    
    setSelectedFields(prev => {
      const newState = { ...prev };
      if (willBeSelected) {
        newState[fieldId] = true;
      } else {
        // Remove field from selection when unselecting
        delete newState[fieldId];
      }
      return newState;
    });

    if (willBeSelected) {
      // Auto-select first data option if field is being selected and no option is currently selected
      if (!selectedDataOptions[fieldId]) {
        const dataOptions = getDataOptionsForField(field, selectedSource);
        if (dataOptions.length > 0) {
          // Prefer derived option if available, otherwise first option
          const derivedOption = dataOptions.find(s => s.derived);
          const defaultOption = derivedOption || dataOptions[0];
          setSelectedDataOptions(prev => ({
            ...prev,
            [fieldId]: defaultOption.id
          }));
        }
      }
    } else {
      // Clean up data option when unselecting field
      setSelectedDataOptions(prev => {
        const newState = { ...prev };
        delete newState[fieldId];
        return newState;
      });
      // Also close expanded field if it was this one
      if (expandedField === fieldId) {
        setExpandedField(null);
      }
    }
  };

  const [pendingSource, setPendingSource] = useState<string | null>(null);

  const selectSource = (baseName: string) => {
    setPendingSource(baseName);
  };

  const confirmSourceSelection = () => {
    if (!pendingSource) return;

    setSelectedSource(pendingSource);
    setExpandedField(null);

    const fieldsForSource = getFieldsForBaseSource(pendingSource);
    
    // Reset all selections - only keep required fields
    const newSelectedFields: Record<string, boolean> = {};
    const newSelectedDataOptions: Record<string, string> = {};

    // Only auto-select required fields (preselected)
    fieldsForSource.forEach((field: Field) => {
      if (field.required && !field.missing) {
        newSelectedFields[field.id] = true;
        // Default to derived/calculated if available, otherwise first option
        const dataOptions = getDataOptionsForField(field, pendingSource);
        const derivedOption = dataOptions.find((s: Source) => s.derived);
        const defaultOption = derivedOption || dataOptions[0];
        if (defaultOption) {
          newSelectedDataOptions[field.id] = defaultOption.id;
        }
      }
    });

    setSelectedFields(newSelectedFields);
    setSelectedDataOptions(newSelectedDataOptions);
    setPendingSource(null);
  };

  const selectDataOption = (fieldId: string, sourceId: string) => {
    setSelectedDataOptions(prev => ({
      ...prev,
      [fieldId]: sourceId
    }));
    setExpandedField(null);
  };

  const changeScenario = (scenarioKey: ScenarioKey) => {
    setCurrentScenario(scenarioKey);
    setSelectedFields({});
    setSelectedSource(null);
    setPendingSource(null);
    setSelectedDataOptions({});
    setExpandedField(null);
    setShowScenarios(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showScenarios && !target.closest('.scenario-dropdown-container')) {
        setShowScenarios(false);
      }
    };

    if (showScenarios) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showScenarios]);

  const selectedCount = Object.values(selectedFields).filter(Boolean).length;
  const hasMissingRequired = currentData.fields.some((f: Field) => f.required && f.missing);
  const canProceed = selectedSource !== null && !hasMissingRequired;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Demo Controls */}
      <div className="scenario-dropdown-container bg-gray-800 px-4 py-3 border-b-2 border-yellow-400 relative z-50">
        <div className="text-xs text-yellow-400 font-bold mb-1 flex items-center gap-2">
          <span>⚙️ DEMO CONTROLS (NOT PART OF ACTUAL UI)</span>
        </div>
        <button
          onClick={() => setShowScenarios(!showScenarios)}
          className="w-full flex items-center justify-between text-white bg-gray-700 rounded-lg px-3 py-2 hover:bg-gray-600 transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentData.verifier.icon}</span>
            <div className="text-left">
              <div className="text-xs opacity-75">Switch Scenario:</div>
              <div className="text-sm font-semibold">{currentData.name}</div>
            </div>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${showScenarios ? 'rotate-180' : ''}`} />
        </button>

        {showScenarios && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl overflow-hidden shadow-2xl max-h-96 overflow-y-auto z-50 border border-gray-200">
            {Object.entries(scenarios).map(([key, scenario]) => (
              <button
                key={key}
                onClick={() => changeScenario(key as ScenarioKey)}
                className={`w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors ${
                  key === currentScenario ? 'bg-violet-50' : ''
                }`}
              >
                <span className="text-xl">{scenario.verifier.icon}</span>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${key === currentScenario ? 'text-violet-900' : 'text-gray-900'}`}>
                    {scenario.name}
                  </div>
                  <div className="text-xs text-gray-500">{scenario.verifier.name}</div>
                </div>
                {key === currentScenario && (
                  <Check className="w-5 h-5 text-violet-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <button className="text-violet-600 text-sm font-medium">Cancel</button>
          <div className="text-sm font-semibold text-gray-900">Share Information</div>
          <div className="w-14"></div>
        </div>
      </div>

      {/* Request Info Card */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-violet-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base">{currentData.verifier.name}</h3>
            <p className="text-sm text-gray-500 mt-0.5">Requesting: {currentData.verifier.purpose}</p>
          </div>
        </div>
      </div>

      {/* Flow Indicator */}
      <div className="mx-4 mt-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 flex-1">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
              !selectedSource 
                ? 'bg-violet-600 text-white' 
                : 'bg-violet-100 text-violet-600'
            }`}>
              {!selectedSource ? '1' : <Check className="w-4 h-4" strokeWidth={3} />}
            </div>
            <div className="flex-1">
              <div className={`text-xs font-medium ${
                !selectedSource ? 'text-gray-900' : 'text-gray-500'
              }`}>
                Choose Source
              </div>
            </div>
          </div>
          
          <div className={`h-0.5 flex-1 transition-colors ${
            selectedSource ? 'bg-violet-600' : 'bg-gray-200'
          }`}></div>
          
          <div className="flex items-center gap-2 flex-1">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
              selectedSource 
                ? 'bg-violet-600 text-white' 
                : 'bg-gray-100 text-gray-400'
            }`}>
              2
            </div>
            <div className="flex-1">
              <div className={`text-xs font-medium ${
                selectedSource ? 'text-gray-900' : 'text-gray-400'
              }`}>
                Select Fields
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Excessive Request Warning */}
      {currentData.excessiveRequest && (
        <div className="mx-4 mt-4 bg-red-50 border-2 border-red-300 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-red-900 text-base">⚠️ Privacy Alert: Excessive Data Request</h4>
              <p className="text-sm text-red-800 mt-2 font-medium">
                This verifier is asking for {currentData.fields.filter((f: Field) => f.required).length} required fields, including highly sensitive information.
              </p>
              <p className="text-xs text-red-700 mt-2">
                Consider whether this much information is truly necessary for their stated purpose. Legitimate services rarely need this much data.
              </p>
              <div className="mt-3 flex gap-2">
                <button className="text-xs font-semibold text-red-700 bg-red-100 px-3 py-1.5 rounded-lg hover:bg-red-200">
                  Deny Request
                </button>
                <button className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200">
                  Report Verifier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Previous Sharing Notice */}
      {currentData.previouslyShared && (
        <div className="mx-4 mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-blue-900 text-sm">You've shared with them before</h4>
              <p className="text-xs text-blue-700 mt-1">
                {currentData.previouslyShared.date} • You shared: {currentData.previouslyShared.fields.join(', ')}
              </p>
              <p className="text-xs text-blue-600 mt-2">
                {currentData.fields.some((f: Field) => f.newRequest) && '📌 This request includes new fields not previously shared.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Missing Required Fields Warning */}
      {hasMissingRequired && !currentData.excessiveRequest && (
        <div className="mx-4 mt-4 bg-red-50 border border-red-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-red-900 text-sm">Missing Required Information</h4>
              <p className="text-xs text-red-700 mt-1">
                This verifier requires credentials you don't have in your wallet. You'll need to add them before continuing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Source Selection */}
      <div className="flex-1 px-4 mt-6 pb-4">
        {!selectedSource ? (
          <>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Choose a source</h4>
              <p className="text-xs text-gray-600">All fields will come from the source you select</p>
            </div>
            <div className="space-y-3">
              {baseSources.map((baseSource) => {
                const fieldsFromSource = getFieldsForBaseSource(baseSource.baseName);
                const isSelected = pendingSource === baseSource.baseName;

                // Check if source has expired credentials
                const hasExpiredCredentials = baseSource.sources.some(s => s.expired);
                const hasUnchangingData = fieldsFromSource.some(f => f.unchangingData);
                
                return (
                  <button
                    key={baseSource.baseName}
                    onClick={() => selectSource(baseSource.baseName)}
                    className={`w-full text-left rounded-xl p-4 transition-all ${isSelected
                      ? 'bg-violet-50 border-2 border-violet-600 shadow-sm'
                      : 'bg-white border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50/50'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getSourceIcon(baseSource.displayName, isSelected)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold text-sm ${isSelected ? 'text-violet-900' : 'text-gray-900'
                            }`}>
                            {baseSource.displayName}
                          </span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-violet-600" strokeWidth={3} />
                          )}
                        </div>
                        <p className={`text-xs mt-1 ${isSelected ? 'text-violet-700' : 'text-gray-500'
                          }`}>
                          {fieldsFromSource.length} {fieldsFromSource.length === 1 ? 'field' : 'fields'} available
                        </p>
                        {hasExpiredCredentials && (
                          <div className="mt-2 flex items-center gap-1.5 text-red-600">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="text-xs">
                              {hasUnchangingData
                                ? 'Contains expired credentials (some data still valid)'
                                : 'Contains expired credentials'
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA Button for Source Selection */}
            <div className="mt-6">
              <button
                onClick={confirmSourceSelection}
                disabled={!pendingSource}
                className={`w-full font-semibold py-4 rounded-xl shadow-sm transition-colors ${pendingSource
                  ? 'bg-violet-600 text-white hover:bg-violet-700 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {pendingSource
                  ? `Continue with ${baseSources.find(s => s.baseName === pendingSource)?.displayName}`
                  : 'Select a source to continue'
                }
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sharing from</span>
                <span className="text-sm font-semibold text-violet-600">{selectedBaseSource?.displayName}</span>
                  {selectedBaseSource?.sources.some(s => s.expired) && (
                    <span className="text-xs text-red-600">(expired)</span>
                  )}
              </div>
              <button
                onClick={() => {
                    // Preserve the current source as pending so it shows as selected when going back
                    setPendingSource(selectedSource);
                  setSelectedSource(null);
                    // Don't reset selectedFields and selectedDataOptions - they will be preserved when confirming new source
                }}
                className="text-xs text-violet-600 font-medium hover:text-violet-700"
              >
                Change
              </button>
            </div>
            
              <div className="space-y-3">
                {availableFields.map((field: Field) => {
                const selectedSourceForField = getSelectedSourceForField(field);
                const dataOptions = getDataOptionsForField(field, selectedSource!);
                const hasMultipleOptions = dataOptions.length > 1;
                const isExpanded = expandedField === field.id;
                  const isSelected = !!selectedFields[field.id];
                  const displayValue = getDisplayValueForField(field, selectedSource!);
                
                // Missing field rendering
                if (field.missing) {
                  return (
                    <div key={field.id} className="rounded-xl p-4 bg-red-50 border-2 border-red-200">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg border-2 border-red-300 flex items-center justify-center flex-shrink-0 bg-white mt-0.5">
                          <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                        </div>

                        <div className="flex-1 text-left min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">{field.label}</span>
                            <span className="text-xs text-gray-500">Required</span>
                          </div>
                          <p className="text-sm text-red-700 font-medium mt-1">Not in your wallet</p>
                          {field.description && (
                            <p className="text-xs text-red-600 mt-1">{field.description}</p>
                          )}

                          <button className="mt-3 flex items-center gap-1.5 text-xs font-medium text-violet-600 hover:text-violet-700">
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add this credential</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <div key={field.id}>
                    <button
                      onClick={(e) => {
                        toggleField(field.id);
                        // Blur the button to remove focus state
                        e.currentTarget.blur();
                      }}
                      disabled={field.required}
                      className={`w-full text-left rounded-xl p-4 transition-all mb-3 focus:outline-none ${isSelected
                        ? 'bg-violet-50 border-2 border-violet-600 shadow-sm'
                        : 'bg-white border-2 border-gray-200 focus:bg-white focus:border-gray-200 active:bg-white active:border-gray-200'
                        } ${field.required ? 'opacity-75 cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Field Info */}
                        <div className="flex-1 text-left min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`font-semibold text-sm ${isSelected ? 'text-violet-900' : 'text-gray-900'
                              }`}>{field.label}</span>
                            {isSelected && (
                              <Check className="w-4 h-4 text-violet-600" strokeWidth={3} />
                            )}
                            {field.required && (
                              <span className="text-xs text-gray-500">Required</span>
                            )}
                          </div>
                          <p className={`text-sm mt-1 font-medium ${isSelected ? 'text-violet-700' : 'text-gray-700'
                            }`}>{displayValue}</p>
                          {field.derived && !hasMultipleOptions && (
                            <span className="text-xs text-green-600 mt-1 inline-block">Privacy-preserving</span>
                          )}
                          
                          {/* Data Option Selector - Show when multiple options available */}
                          {hasMultipleOptions && (
                            <div className="mt-2">
                              <button
                                onClick={() => setExpandedField(isExpanded ? null : field.id)}
                                className="w-full text-left text-xs text-violet-600 hover:text-violet-700 flex items-center gap-1"
                              >
                                <span>{selectedSourceForField?.derived ? 'Calculated' : 'Original'} data</span>
                                {selectedSourceForField?.derived && (
                                  <span className="text-green-600">• Privacy-preserving</span>
                                )}
                                <ChevronDown className={`w-3 h-3 ml-auto transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                              </button>

                              {/* Data Options */}
                              {isExpanded && (
                                <div className="mt-2 space-y-1">
                                  {dataOptions.map((source: Source) => (
                                    <button
                                      key={source.id}
                                      onClick={() => selectDataOption(field.id, source.id)}
                                      className={`w-full px-3 py-2.5 rounded-lg flex items-start justify-between transition-colors ${
                                        selectedDataOptions[field.id] === source.id
                                          ? 'bg-violet-50 border border-violet-200'
                                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                                      }`}
                                    >
                                      <div className="flex flex-col gap-1 text-left flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <span className={`text-sm font-medium ${
                                            selectedDataOptions[field.id] === source.id
                                              ? 'text-violet-900'
                                              : 'text-gray-700'
                                          }`}>
                                            {source.derived ? 'Calculated' : 'Original'}
                                          </span>
                                          {source.derived && (
                                            <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">
                                              Privacy-Preserving
                                            </span>
                                          )}
                                          {source.expired && !field.unchangingData && (
                                            <span className="text-xs text-red-600 flex items-center gap-1">
                                              <Clock className="w-3 h-3" />
                                              Expired
                                            </span>
                                          )}
                                          {source.expired && field.unchangingData && (
                                            <span className="text-xs text-amber-600 flex items-center gap-1">
                                              <Info className="w-3 h-3" />
                                              Expired (Valid)
                                            </span>
                                          )}
                                        </div>
                                        <span className="text-xs text-gray-600">{source.value}</span>
                                        {source.calculatedFrom && (
                                          <span className="text-xs text-green-600">Calculated from {source.calculatedFrom}</span>
                                        )}
                                      </div>
                                      {selectedDataOptions[field.id] === source.id && (
                                        <Check className="w-4 h-4 text-violet-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                                      )}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Special warnings/notes - shown in consistent style */}
                          {field.hasMultipleIdentities && (
                            <div className="mt-2 flex items-center gap-1.5 text-amber-600">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span className="text-xs">Multiple identities available in this source</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 mt-4 px-1 text-center">
              Selected fields will be securely shared from {selectedBaseSource?.displayName}. You can revoke access anytime.
            </p>
          </>
        )}
      </div>

      {/* Bottom Action */}
      {selectedSource && (
        <div className="bg-white border-t border-gray-200 px-4 py-4 mt-auto">
          <button 
            disabled={!canProceed}
            className={`w-full font-semibold py-4 rounded-xl shadow-sm transition-colors ${
              !canProceed 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-violet-600 text-white hover:bg-violet-700'
            }`}
          >
            {hasMissingRequired 
              ? 'Cannot Share - Missing Required Fields'
              : `Share ${selectedCount} ${selectedCount === 1 ? 'Field' : 'Fields'}`
            }
          </button>
          <p className="text-xs text-gray-500 text-center mt-3">
            {hasMissingRequired 
              ? 'Add the required credentials to continue'
              : 'This request will be logged in your sharing history'
            }
          </p>
        </div>
      )}
    </div>
  );
}

