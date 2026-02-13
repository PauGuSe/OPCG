
export interface ChartDataPoint {
  name: string;
  value: number;
  percentage?: string;
}

export enum ChartType {
  BAR = 'bar',
  PIE = 'pie'
}

export interface QuestionData {
  id: string; // e.g., "P4", "P12"
  title: string;
  description: string;
  data: ChartDataPoint[];
  type: ChartType;
  analysis: string[];
  recommendations?: string[];
  category: string;
}

export interface StatsSummary {
  totalParticipants: number;
  participationRate: string;
  titularesRate: string;
  suplentesRate: string;
}
