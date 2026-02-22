import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactRequest {
    id: bigint;
    name: string;
    inquiry: string;
    email: string;
    companyName: string;
}
export interface backendInterface {
    getAllContactRequests(): Promise<Array<ContactRequest>>;
    getContactRequest(id: bigint): Promise<ContactRequest | null>;
    submitContactRequest(name: string, email: string, companyName: string, inquiry: string): Promise<void>;
}
