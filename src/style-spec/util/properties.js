// @flow

import type {StylePropertySpecification} from '../style-spec.js';

export function supportsPropertyExpression(spec: StylePropertySpecification): boolean {
    return spec['property-type'] === 'data-driven' || spec['property-type'] === 'cross-faded-data-driven';
}

export function supportsZoomExpression(spec: StylePropertySpecification): boolean {
    return !!spec.expression && spec.expression.parameters.indexOf('zoom') > -1;
}

export function supportsInterpolation(spec: StylePropertySpecification): boolean {
    return !!spec.expression && spec.expression.interpolated;
}

export function supportsCameraStateExpression(spec: StylePropertySpecification): boolean {
    return !!spec.expression && spec.expression.parameters.indexOf('zoom') > -1 &&
        spec.expression.parameters.indexOf('pitch') > -1  &&
        spec.expression.parameters.indexOf('distance-from-center') > -1;
}
