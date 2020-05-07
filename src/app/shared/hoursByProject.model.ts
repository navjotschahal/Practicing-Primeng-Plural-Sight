export interface Teams {
    teamName: string;
    hoursSpent: number;
}

export class HoursByProjectModel {
    public id: number;
    public name: string;
    public teams: Teams[];

    constructor( id: number, name: string, teams: Teams[]) {
        this.id = id;
        this.name = name;
        this.teams = teams;
    }
}