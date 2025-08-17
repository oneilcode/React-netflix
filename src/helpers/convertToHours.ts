export function convertToHours(minutes:number) {
    let hours = Math.trunc(minutes/60)
    let mins = minutes % 60

    if(mins === 0) {
        return hours + "h "
    } 

    return hours + "h "  + mins + "min"
}