export const emphasizeAmount = (amount: string): { emphasized: string; rest: string } => {
  const emphasized = amount.slice(0, 7);
  const rest = amount.slice(7);
  return { emphasized, rest };
};
