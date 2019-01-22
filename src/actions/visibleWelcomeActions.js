export const OFF_WELCOME = 'OFF_WELCOME';

export function visibleWelcome(off) {
    return {
        type: OFF_WELCOME,
        payload: off,
    }
}