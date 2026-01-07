export interface OrganizationInfoResponseDTO {
    id: string;
    name: string;
    slug: string;
    category?: string;
    address?: string;
    phone?: string;
    email?: string;
    logo?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrganizationLinkDTO {
    name: string;
    link: string;
}