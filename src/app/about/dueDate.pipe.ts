import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "dueDatepipe"
})
export class DueDatePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        let dueDate = new Date(value);
        let today = new Date();
        console.log("pipe",dueDate);
        let color = dueDate > today ? 'red' : 'blue'
        return { 'backgroundColor': color }
    }
}