import * as React from "react";

/**
 * Type alias used to match the props type of a component without reading the
 * type of its `defaultProps` or `propTypes`, which would create a circular
 * dependency in type checking.
 */
export type LooseComponentType<P> =
    (new (props: P) => any) |
    // `rest` to accommodate RefForwardingComponent.
    ((props: P, ...rest: any[]) => React.ReactElement<any> | null);

/**
 * Provides contextual typing and type checking for the `defaultProps` static
 * field of a React component.
 *
 * Usage example:
 *
 *    import * as React from "react";
 *    import { asDefaultProps } from "react-typescript-helpers";
 *
 *    class MyComponentClass extends React.Component<{name: string}, {}> {
 *        static defaultProps = asDefaultProps(MyComponentClass)({
 *            name: "Matt"
 *        });
 *    }
 */
export function asDefaultProps<P>(component: LooseComponentType<P>) {
    return <DP extends React.ComponentType<P>["defaultProps"]>
        (defaultProps: DP) => defaultProps;
}

/**
 * Provides contextual typing and type checking for the `propTypes` static
 * field of a React component.
 *
 * Usage example:
 *
 *    import * as React from "react";
 *    import * as PropTypes from "prop-types";
 *    import { asPropTypes } from "react-typescript-helpers";
 *
 *    class MyComponentClass extends React.Component<{name: string}, {}> {
 *        static propTypes = asPropTypes(MyComponentClass)({
 *            name: PropTypes.string.isRequired
 *        });
 *    }
 */
export function asPropTypes<P>(component: LooseComponentType<P>) {
    return <PT extends React.ComponentType<P>["propTypes"]>
        (propTypes: PT) => propTypes;
}
