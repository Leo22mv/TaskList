export enum Levels {
    "Info",
    "Urgent",
    "Blocking"
}

export interface ITask {
    title: string;
    description?: string;       // El "?" significa que es opcional
    completed: boolean;
    level: Levels;
}