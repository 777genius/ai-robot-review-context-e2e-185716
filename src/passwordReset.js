import { getPolicy } from './ratePolicies.js';

export function canRequestPasswordReset(user, attemptsLastHour) {
  const policy = getPolicy('passwordReset');
  if (!user || user.disabled) return false;
  return attemptsLastHour < policy.maxAttemptsPerHour;
}
