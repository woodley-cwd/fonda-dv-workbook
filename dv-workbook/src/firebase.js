// Mock Firebase for local development
const mockDatabase = {
  sessions: {}
};

export const saveProgress = async (sessionId, workbookData) => {
  try {
    mockDatabase.sessions[sessionId] = {
      ...workbookData,
      lastUpdated: new Date().toISOString()
    };
    console.log('Progress saved locally:', sessionId);
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const loadProgress = async (sessionId) => {
  try {
    if (mockDatabase.sessions[sessionId]) {
      return mockDatabase.sessions[sessionId];
    }
    return null;
  } catch (error) {
    console.error('Error loading progress:', error);
    return null;
  }
};

export const updateProgress = async (sessionId, updates) => {
  try {
    if (!mockDatabase.sessions[sessionId]) {
      mockDatabase.sessions[sessionId] = {};
    }
    mockDatabase.sessions[sessionId] = {
      ...mockDatabase.sessions[sessionId],
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    console.log('Progress updated locally:', sessionId);
  } catch (error) {
    console.error('Error updating progress:', error);
  }
};

export default mockDatabase;
