export interface booking{
    user_id:string,
    sports_field_id:string,
    time_frame:string,
    total_hours:string,
    total_price:string
    status:string | "pending",
    payment_status:string | null
}

interface Column<T> {
    header: string;
    accessor: keyof T;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
  }

   const columns: Column<booking>[] = [
      { header: "user_id", accessor: "user_id" },
      { header: "sports_field_id", accessor: "sports_field_id" },
      { header: "Time Frame", accessor: "time_frame" },
      { header: "Total hours", accessor: "total_hours" },
      { header: "Price", accessor: "total_price" },
      { header: "status", accessor: "status" },
      { header: "payment_status", accessor: "payment_status" },
    ];