export type NavLinksProps = {
  title: string;
  link: string;
  icon: React.ReactNode;
};

export interface Trip {
  id: number;
  title: string;
  description: string;
  TotalPriceDZD: number;
  steps: {
    activity: string;
    description: string;
    PriceDZD: string;
    date: string;
    daysSpan: string;
  }[];
}
