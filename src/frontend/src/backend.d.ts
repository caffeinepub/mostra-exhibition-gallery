import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Lead {
    id: bigint;
    status: string;
    source: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface GalleryItem {
    id: bigint;
    title: string;
    sortOrder: bigint;
    createdAt: bigint;
    description: string;
    category: string;
    artist: string;
    image: ExternalBlob;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addGalleryItem(title: string, artist: string, description: string, image: ExternalBlob, category: string, sortOrder: bigint): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteLead(id: bigint): Promise<void>;
    filterLeadsBySource(source: string): Promise<Array<Lead>>;
    filterLeadsByStatus(status: string): Promise<Array<Lead>>;
    getCallerUserRole(): Promise<UserRole>;
    getGalleryItems(): Promise<Array<GalleryItem>>;
    getInteraktWebhookUrl(): Promise<string>;
    getLeads(): Promise<Array<Lead>>;
    getSiteSetting(key: string): Promise<string | null>;
    isCallerAdmin(): Promise<boolean>;
    removeGalleryItem(id: bigint): Promise<void>;
    setInteraktWebhookUrl(url: string): Promise<void>;
    setSiteSetting(key: string, value: string): Promise<void>;
    submitLead(name: string, email: string, phone: string, message: string, source: string): Promise<bigint>;
    triggerInteraktNotification(_leadName: string, _leadPhone: string, _leadEmail: string): Promise<string>;
    updateGalleryItem(id: bigint, title: string, artist: string, description: string, image: ExternalBlob, category: string, sortOrder: bigint): Promise<void>;
    updateLeadStatus(id: bigint, status: string): Promise<void>;
}
