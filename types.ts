// FastFood App - Core Data Model

export type MenuType = 'M1' | 'M2' | 'M3';
export type LidColor = 'GREEN' | 'RED' | 'BLUE';
export type Packaging = 'PLATE' | 'ALU';
export type PortionSize = 'FULL' | 'HALF' | 'ONE_AND_HALF';

export interface Customer {
  id: string;
  name: string;
  address: string;
  notes?: string; // z.B. "Terrassentür", "Klingeln"
  isHospital: boolean; // Status KH -> automatisch überspringen
}

export interface MealOrder {
  menuType: MenuType;
  lidColor: LidColor;
  packaging: Packaging;
  portionSize: PortionSize;
  specialDietary?: 'NATURJOGHURT' | 'OBST' | 'NONE';
}

export interface DeliveryStop {
  stopNumber: number;
  customer: Customer;
  order?: MealOrder; // Wenn null/undefined -> heute kein Essen
  status: 'PENDING' | 'DELIVERED' | 'SKIPPED';
  dishAction?: 'RETURNED_PLUS_1' | 'MISSING_ZERO' | 'ALU_NO_PLATE' | 'NOTE_ADDED';
  driverNote?: string; // z.B. "Morgen kein Essen", "SP mitbringen"
}

export interface RouteSummary {
  tourId: string;
  date: string;
  totalM1_Green: number;
  totalM2_Red: number;
  totalM3_Blue: number;
  totalAlu: number;
  totalYogurt: number;
  totalFruit: number;
}
