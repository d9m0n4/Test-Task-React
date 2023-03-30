export const formatTime = (time: number) => {
    const getSeconds = time % 60
    const getMinutes = Math.floor(time / 60) % 60
    const getHours = Math.floor(time / 3600)

    if (getHours) {
        return `${String(getHours).padStart(2, '0')} : ${String(getMinutes).padStart(2, '0')} : ${String(getSeconds).padStart(2, '0')}`
    }
    if (getMinutes) {
        return `${String(getMinutes).padStart(2, '0')} : ${String(getSeconds).padStart(2, '0')}`
    }
    return String(getSeconds).padStart(2, '0')
}