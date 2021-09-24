import { Action } from '@ngrx/store';

export class ActionModel implements Action {
    type: string; // tipo de info
    payload: any; // Payload é o que será passado de info
}

// Apenas uma estensão do que ja tem o action no nrgx