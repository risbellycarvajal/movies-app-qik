declare module '@env' {
    export const API_KEY: string;
    export const API_BASE_URL: string;
    export const AUTH_API_BASE_URL: string;
    export const API_BASE_IMAGE_URL: string;
    export const API_LANGUAGE: string;
}

declare module '*.png' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any;
    export default content;
}
