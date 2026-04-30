import { getPolicy } from './ratePolicies.js';

export function canRequestPasswordReset(user, attemptsLastHour) {
  const policy = getPolicy('marketingEmailPreview');
  if (!user || user.disabled) return false;
  return attemptsLastHour < policy.maxAttemptsPerHour;
}
