import { Component, Input, OnInit } from "@angular/core";
import { Duration, SelectOption } from "src/app/custom";

@Component({
    template: ` <div class="flex justify-between items-center">
          <label [for]="'#' + id">{{label}}</label>
          <input
            [(ngModel)]="model"
            [id]="id"
            [type]="type"
            [placeholder]="placeholder"
            class="bg-white w-2/3 h-12 rounded-lg px-4 text-gray-500 antialiased tracking-wide border-2 border-gray-300 accent-gray-400 placeholder-light-300"
          />
        </div>`,
    selector: 'auth-input-group'
})

export class AuthInputGroupComponent {
    @Input() label !: string;
    @Input() id !: string;
    @Input() placeholder !: string;
    @Input() model !: string;
    @Input() type: string = 'text';
}

@Component({
    template: ` <div class="flex gap-x-4 items-center">
        <input
        [(ngModel)]="model"
        [id]="id"
        type="checkbox"
        class="accent-gray-300 h-4 w-4 rounded-sm"
        />
        <label [for]="'#' + id">{{label}}</label>
        </div>`,
    selector: 'auth-check-group'
})

export class AuthCheckGroupComponent {
    @Input() label !: string;
    @Input() id !: string;
    // @Input() placeholder !: string;
    @Input() model !: boolean;
    @Input() subscribe !: boolean
    // @Input() type :string = 'text';
}

@Component({
    template: `<div class="flex gap-2">
            <select [name]="label.toLowerCase()" [id]="id" [(ngModel)]="model" prop1="days" class="bg-white h-16 rounded-lg px-4 text-gray-500 antialiased tracking-wide border-2 border-gray-300 accent-gray-400 placeholder-light-300">
                <option [value]="initial" disabled selected>
                    {{label}}
                </option>
                <option *ngFor="let item of items;"  [value]="item[prop1]">
                    {{item[prop1]}} {{append}}
                </option>
            </select>
        </div>
        `,
    selector: 'investment-filter-select'
})
export class InvestmentFilterSelectComponent implements OnInit {
    @Input() items !: SelectOption[]; 
    @Input() id !: string;
    // @Input() placeholder !: string;
    @Input() model !: number | string;
    @Input() prop1 !: string;
    @Input() label !: string;
    @Input() append !: string;
    @Input() initial !: number | string
    // @Input() type :string = 'text';


    ngOnInit() : void{

    }
}