export const requiredField = (value: string) => {
    if(value) return undefined;

    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value && value.length > maxLength) return `The maximum length should be ${maxLength} characters`;

    return undefined
}