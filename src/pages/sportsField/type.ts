export interface SportsField {
    // id: number;
    name: string;
    // owner_id: string;
    field_type: string;
    address: string;
    latitude: string;
    longitude: string;
    hourly_rate: string;
    description: string;
    image_url: string;
    is_active: boolean;
    // created_at: string;
    // updated_at: string;
  }

  interface Column<T> {
    header: string;
    accessor: keyof T;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
  }
  const columns: Column<SportsField>[] = [
    { header: "Name", accessor: "name" },
    { header: "Type", accessor: "field_type" },
    { header: "Address", accessor: "address" },
    { header: "Hourly Rate", accessor: "hourly_rate" },
    { header: "Active", accessor: "is_active" },
  ];