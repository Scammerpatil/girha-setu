export interface Notification {
  _id: string;
  type: string;
  message: string;
  createdAt: string;
  property: {
    _id: string;
  };
}
