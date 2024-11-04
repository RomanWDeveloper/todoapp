export type Task = {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    subtasks?: Task[]
}

export type ThemeType = 'light' | 'dark';
