import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Contact {
    id: bigint;
    serviceType: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface Booking {
    id: bigint;
    serviceType: string;
    date: string;
    name: string;
    email: string;
    vehicle: string;
    phone: string;
}
export interface backendInterface {
    bookService(name: string, phone: string, email: string, date: string, serviceType: string, vehicle: string): Promise<bigint>;
    getAllBookings(): Promise<Array<Booking>>;
    getAllContacts(): Promise<Array<Contact>>;
    submitContact(name: string, phone: string, email: string, message: string, serviceType: string): Promise<bigint>;
}
