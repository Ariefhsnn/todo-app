export const randomGenerator = ( val ) => {
    let randomNumber = Math.floor(Math.random() * val.length);
    return randomNumber;
}