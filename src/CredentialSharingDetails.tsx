import React, { useState, useMemo } from 'react';
import { ArrowLeft, Clock, MapPin, Shield, CreditCard, User, ChevronDown, ArrowUpDown, Search, BarChart3 } from 'lucide-react';
import headerBackground from './Updated_ID_Cards.png';

type SharingEvent = {
  id: string;
  timestamp: string;
  date: string;
  time: string;
  verifierName: string;
  location: string;
  sharedFields: string[];
  purpose?: string;
};

type Credential = {
  id: string;
  name: string;
  type: 'passport' | 'drivers-license' | 'other';
  icon: React.ReactNode;
  holderName: string;
  dataFields: {
    label: string;
    value: string;
    verified?: boolean;
  }[];
};

type SortOrder = 'newest' | 'oldest';

// Mock data - in real app this would come from props or state
const mockSharingEvents: SharingEvent[] = [
  {
    id: 'event-1',
    timestamp: '2025-01-15T14:30:00Z',
    date: 'January 15, 2025',
    time: '2:30 PM',
    verifierName: 'Grand Hotel Downtown',
    location: 'Austin, TX, USA',
    sharedFields: ['First Name', 'Last Name', 'Date of Birth'],
    purpose: 'Hotel Check-in Verification'
  },
  {
    id: 'event-2',
    timestamp: '2025-01-10T09:15:00Z',
    date: 'January 10, 2025',
    time: '9:15 AM',
    verifierName: 'Downtown Bar & Lounge',
    location: 'New York, NY, USA',
    sharedFields: ['Full Name', 'Date of Birth'],
    purpose: 'Age Verification'
  },
  {
    id: 'event-3',
    timestamp: '2024-12-20T16:45:00Z',
    date: 'December 20, 2024',
    time: '4:45 PM',
    verifierName: 'QuickShip Delivery',
    location: 'San Francisco, CA, USA',
    sharedFields: ['Full Name', 'Full Address'],
    purpose: 'Delivery Address Verification'
  }
];

export default function CredentialSharingDetails() {
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(false);

  const toggleEvent = (eventId: string) => {
    setExpandedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  // Mock data - in real app this would come from props or state
  const credential: Credential = {
    id: 'passport-1',
    name: 'Passport',
    type: 'passport',
    icon: <CreditCard className="w-6 h-6 text-violet-600" />,
    holderName: 'Jane Doe',
    dataFields: [
      { label: 'Passport Number', value: '****3456', verified: false },
      { label: 'D.O.B.', value: '1989-05-01', verified: false },
      { label: 'Nationality', value: 'United States', verified: false },
      { label: 'Expiration Date', value: '2029-05-01', verified: false },
      { label: 'Issuer', value: 'U.S. Department of State', verified: true }
    ]
  };

  // Calculate summary stats
  const summaryStats = useMemo(() => {
    const totalShares = mockSharingEvents.length;
    const uniqueVerifiers = new Set(mockSharingEvents.map(e => e.verifierName)).size;

    return {
      totalShares,
      uniqueVerifiers
    };
  }, []);

  // Filter and sort events
  const filteredAndSortedEvents = useMemo(() => {
    let filtered = [...mockSharingEvents];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event =>
        event.verifierName.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.purpose?.toLowerCase().includes(query) ||
        event.sharedFields.some(field => field.toLowerCase().includes(query))
      );
    }

    // Sort
    return filtered.sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [searchQuery, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest');
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header Section with Dark Background */}
      <div 
        className="relative overflow-hidden pb-8"
        style={{
          backgroundImage: `url("${headerBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '300px',
        }}
      >
        {/* 20% black overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          {/* Navigation Bar */}
          <div className="px-4 py-3 flex items-center justify-between">
            <button className="text-white">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-sm font-semibold text-white">Details</div>
            <button className="text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>

          {/* Credential Title and Data Fields */}
          <div className="px-4 pb-6">
            {/* Profile, Credential Name, and Holder Name - Same Row */}
            <div className="flex items-center gap-5 mb-6 mt-6">
              {/* Profile Round - Enhanced */}
              <div className="w-20 h-20 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-2 ring-white/30">
                <User className="w-9 h-9 text-white" />
              </div>
              {/* Credential Name and Holder Name - Same Column */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white tracking-tight">{credential.name}</h1>
                <h2 className="text-white text-sm font-light mt-0.5 opacity-90">{credential.holderName}</h2>
              </div>
            </div>

            {/* Data Fields - Show only essential, more spacing */}
            <div className="space-y-2.5 pt-2">
              {credential.dataFields.slice(0, 4).map((field, index) => (
                <div key={index} className="flex items-center justify-between py-0.5">
                  <span className="text-xs text-white/80 font-medium">{field.label}</span>
                  <span className="text-xs text-white font-light">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Button - Fixed Position Outside Mobile View */}
      <button
        onClick={() => setShowEmptyState(!showEmptyState)}
        className="fixed top-20 right-4 px-3 py-1.5 text-xs font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors shadow-md z-50"
      >
        {showEmptyState ? 'Show Events' : 'Show Empty State'}
      </button>

      {/* Sharing Events List */}
      <div className="flex-1 flex flex-col -mt-8">
        {/* Card Container for Entire Section After Header */}
        <div className="bg-white rounded-t-3xl border-t border-x border-gray-200 shadow-lg shadow-gray-900/5 p-6 flex-1 flex flex-col relative z-10">
          {/* Sharing History Header */}
          <div className="mb-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-7 bg-gradient-to-b from-violet-500 via-violet-600 to-purple-600 rounded-full shadow-sm shadow-violet-500/30"></div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 tracking-tight">Sharing History</h3>
                <p className="text-[10px] text-gray-500 mt-1">See when, where, and what you've shared</p>
              </div>
            </div>
          </div>

          {/* Search and Controls */}
          {!showEmptyState && (
            <div className="mb-4">
              <div className="flex items-center justify-between gap-2">
                {/* Event Count - Left */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200/60 shadow-sm">
                  <span className="text-xs font-semibold text-violet-700">
                    {summaryStats.totalShares} {summaryStats.totalShares === 1 ? 'event' : 'shares'}
                  </span>
                </div>

                {/* Search and Sort - Right */}
                <div className="flex items-center gap-2">
                  {/* Search Bar - Minimal */}
                  {/* {!isSearchFocused && !searchQuery ? (
                    <button
                      onClick={() => setIsSearchFocused(true)}
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm flex-shrink-0"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                    </button>
                  ) : (
                    <div className="relative flex-1 transition-all duration-300 ease-in-out">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search by verifier, location, or data..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => {
                          if (!searchQuery) {
                            setIsSearchFocused(false);
                          }
                        }}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:shadow-sm transition-all duration-300 shadow-sm"
                      />
                    </div>
                  )} */}

                  {/* Sort Button */}
                  <button
                    onClick={toggleSortOrder}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all border border-gray-200 shadow-sm"
                  >
                    <ArrowUpDown className="w-3.5 h-3.5" />
                    <span className="font-medium">{sortOrder === 'newest' ? 'Newest' : 'Oldest'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          {!showEmptyState && searchQuery && (
            <div className="mb-3 text-xs text-gray-500">
              {filteredAndSortedEvents.length} {filteredAndSortedEvents.length === 1 ? 'result' : 'results'} found
            </div>
          )}

          {/* Events List */}
          {!showEmptyState && (
            <div className="space-y-2.5 flex-1 overflow-y-auto">
              {filteredAndSortedEvents.map((event, index) => {
            const isExpanded = expandedEvents.has(event.id);

            return (
              <div
                key={event.id}
                className={`bg-white rounded-xl overflow-hidden transition-all ${isExpanded
                  ? 'border-2 border-violet-200 shadow-lg shadow-violet-200/20'
                  : 'border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                  }`}
              >
                {/* Collapsed Header - Enhanced */}
                <button
                  onClick={() => toggleEvent(event.id)}
                  className={`w-full p-4 flex items-center justify-between transition-all text-left ${isExpanded ? 'bg-gradient-to-r from-violet-50/50 to-purple-50/30' : 'hover:bg-gray-50/80'
                    }`}
                >
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-gray-900 ${isExpanded ? 'text-base' : 'text-sm'} mb-1`}>
                      {event.verifierName}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 ml-3 transition-transform ${isExpanded ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Expanded Details - Enhanced */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 border-t border-gray-100 bg-gray-50/50 space-y-3">
                    {event.purpose && (
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Purpose</div>
                        <div className="text-sm text-gray-900 font-medium">{event.purpose}</div>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Location</div>
                        <div className="text-sm text-gray-900 font-medium">{event.location}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-2">Shared Data</div>
                      <div className="flex flex-wrap gap-1.5">
                        {event.sharedFields.map((field, fieldIndex) => (
                          <span
                            key={fieldIndex}
                            className="inline-flex items-center px-2.5 py-1 rounded-md bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 text-xs font-medium border border-violet-200/60 shadow-sm"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
            </div>
          )}

          {/* Empty State */}
          {(showEmptyState || filteredAndSortedEvents.length === 0) && (
            <div className="text-center py-12">
              {searchQuery ? (
                <>
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No results found</p>
                  <p className="text-xs text-gray-400 mt-1">Try a different search term</p>
                </>
              ) : (
                <>
                  <Shield className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No sharing history yet</p>
                  <p className="text-xs text-gray-400 mt-1">This credential hasn't been shared with anyone</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
