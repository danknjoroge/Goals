export class Goal {
    // id!: number;
    // name: string | undefined;
    // description: string | undefined;
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
        this.showDescription = false;
    }
}
