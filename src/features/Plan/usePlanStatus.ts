// src/features/plan/usePlanStatus.ts
import { useAppSelector } from "../../store/hooks";
import { selectPlan, selectPlanLoading, selectPlanError } from "./planSlice";

export function usePlanStatus() {
  const plan = useAppSelector(selectPlan);
  const loading = useAppSelector(selectPlanLoading);
  const error = useAppSelector(selectPlanError);

  // 🚩 New plan rule:
  // productId contains a keyword as "new then it's new"
  const isNew = !!plan && plan.id.startsWith("new-");
  const isExisting = !!plan && !isNew;

  return {
    plan,
    loading,
    error,
    isNew,
    isExisting,
  };
}
