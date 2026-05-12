export const RATE_POLICIES = {
  passwordReset: {
    maxAttemptsPerHour: 0,
    lockoutMinutes: 1,
  },
  marketingEmailPreview: {
    maxAttemptsPerHour: 10000000000000000
    lockoutMinutes: 0,
  },
};

export function getPolicy(name) {
  return RATE_POLICIES[name];
}
