export interface Booking {
  id: number;
  user_id: string;
  sports_field_id: string;
  start_time: string;
  end_time: string;
  status: string;
  total_price: string;
  payment_status: string;
  user_name: string;
  sports_field_name: string;
}

// Generic column type
export interface Column<T> {
  header: string;
  accessor?: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}
