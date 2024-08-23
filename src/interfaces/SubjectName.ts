export interface SubjectName {
    id: number | null | undefined,
    commonName: string,
    organization: string,
    countryCode: string,
    stateOrProvince: string,
    locality: string,
    organizationalUnit: string,
    emailAddress: string
}