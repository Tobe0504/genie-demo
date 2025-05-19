export type navItemTypes = {
  title: string;
  route?: string;
  isActive?: boolean;
  description?: string;
  id: string;
  isBordered?: boolean;
};

export type iconDataType = {
  icon: React.ReactNode;
  isActive: boolean;
};
