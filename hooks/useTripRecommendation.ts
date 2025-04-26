import { trips } from "@/db/data";
import { Trip } from "@/db/types";
import { useMemo } from "react";

export const useTripRecommendation = (
  budget: number,
  currency: "USD" | "DZD"
) => {
  const budgetInDZD = currency === "USD" ? budget * 135 : budget;

  const recommendedTrip: Trip | null = useMemo(() => {
    const affordableTrips = trips
      .filter((trip: Trip) => trip.TotalPriceDZD <= budgetInDZD) // Compare with the TotalPriceDZD directly
      //@ts-ignore
      .sort((a, b) => b.TotalPriceDZD - a.TotalPriceDZD); // prioritize the most expensive affordable trip

    return affordableTrips.length > 0 ? affordableTrips[0] : null;
  }, [budgetInDZD]);

  return recommendedTrip;
};
