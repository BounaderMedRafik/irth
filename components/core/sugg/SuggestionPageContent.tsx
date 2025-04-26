"use client";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Repeat } from "lucide-react"; // nice swap/repeat icon
import React, { useState, useEffect } from "react";
import { useTripRecommendation } from "@/hooks/useTripRecommendation"; // Assuming the hook is saved in this path
import { Trip } from "@/db/types";

const USD_TO_DZD = 135; // 1 USD = 135 DZD

const SuggestionPageContent = () => {
  const [budget, setBudget] = useState<number>(500);
  const [currency, setCurrency] = useState<"USD" | "DZD">("DZD");

  // Use the custom hook to get trip recommendations
  const recommendedTrip = useTripRecommendation(budget, currency);

  const toggleCurrency = () => {
    if (currency === "DZD") {
      setBudget(Math.round(budget / USD_TO_DZD));
      setCurrency("USD");
    } else {
      setBudget(Math.round(budget * USD_TO_DZD));
      setCurrency("DZD");
    }
  };

  const min = currency === "DZD" ? 500 : Math.round(500 / USD_TO_DZD);
  const max = currency === "DZD" ? 100000 : Math.round(100000 / USD_TO_DZD);

  // Recalculate the recommended trip whenever budget or currency changes
  useEffect(() => {
    if (recommendedTrip) {
      console.log("Recommended Trip: ", recommendedTrip.title);
    }
  }, [recommendedTrip]);

  // Handle budget slider change
  const handleSliderChange = (value: number[]) => {
    setBudget(value[0]);
  };

  return (
    <div className="wrapper pt-24">
      <div>
        <div className="text-xl font-semibold">Smart Trip Recommender</div>
        <div className="text-sm opacity-75 max-w-sm">
          Discover personalized trips tailored to your interests, budget, and
          style — making travel easier than ever.
        </div>

        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2">
            <div className="text-2xl font-bold">Budget:</div>
            <div className="text-xl opacity-75">
              {budget.toLocaleString()}{" "}
              <span className=" text-xs font-mono">{currency}</span>
            </div>

            {/* Currency Toggle Button */}
            <Button
              className=""
              size="icon"
              variant="outline"
              onClick={toggleCurrency}
            >
              <Repeat size={13} />
            </Button>
          </div>

          <Slider
            className="shadow-xl"
            value={[budget]}
            min={min}
            max={max}
            step={500}
            onValueChange={handleSliderChange}
          />
        </div>
        <div className="h-px w-full bg-foreground/10 my-10" />

        {/* Display the Recommended Trip */}
        {recommendedTrip ? (
          <div className="mt-10">
            <TripCard trip={recommendedTrip} />
          </div>
        ) : (
          <div className="mt-10 opacity-75 flex items-center justify-center gap-2 flex-col">
            <div></div>
            <div>No trips available within your budget.</div>
          </div>
        )}
      </div>
    </div>
  );
};

const TripCard: React.FC<{ trip: Trip }> = ({ trip }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <div className="text-2xl font-semibold text-gray-800">{trip.title}</div>
      <div className="text-md text-gray-600 mt-2">{trip.description}</div>
      <div className="mt-4 text-lg font-semibold text-gray-800">
        Total Price: {trip.TotalPriceDZD.toLocaleString()} DZD
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold text-gray-800">Activities:</div>
        <div className="space-y-4 mt-6 relative">
          {trip.steps.map((step, index) => (
            <div key={index} className="relative pl-6">
              {/* Vertical line */}
              {index !== trip.steps.length - 1 && (
                <div className="absolute left-0 top-3 h-full w-1 bg-primary opacity-100 rounded-full" />
              )}

              {/* Circle */}
              <div className="absolute -left-2 top-2.5  size-5 flex items-center justify-center text-xs text-background font-mono rounded-full bg-primary z-10">
                {index + 1}
              </div>

              {/* Content */}
              <div className="pt-2">
                <div className="text-md font-semibold">{step.activity}</div>
                <div className="text-sm text-gray-600">{step.description}</div>
                <div className="text-xs text-gray-500 mt-1">
                  Date: {step.date} | Time: {step.daysSpan}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Price: {parseInt(step.PriceDZD).toLocaleString()} DZD
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionPageContent;
