import {

// Importa los tipos de acciones
    ACTION_TYPE_1,
    ACTION_TYPE_2,
    // Agrega más tipos de acciones aquí
} from '../constants/actionTypes';

// Acción de ejemplo
export const exampleAction = (payload) => {
    return {
        type: ACTION_TYPE_1,
        payload,
    };
};

// Otra acción de ejemplo
export const anotherAction = () => {
    return {
        type: ACTION_TYPE_2,
        // Puedes agregar más propiedades aquí si es necesario
    };
};

// Exporta todas las acciones como un objeto
export const actions = {
    exampleAction,
    anotherAction,
    // Agrega más acciones aquí
};