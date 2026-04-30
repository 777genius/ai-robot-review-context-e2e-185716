export const RATE_POLICIES = {
  passwordReset: {
    maxAttemptsPerHour: 3,
    lockoutMinutes: 30,
  },
  marketingEmailPreview: {
    maxAttemptsPerHour: 1000,
    lockoutMinutes: 0,
  },
};

export function getPolicy(name) {
  return RATE_POLICIES[name];
}
