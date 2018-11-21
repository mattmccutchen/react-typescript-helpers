# `react-typescript-helpers`

Runtime helpers to support TypeScript type checking of React code.

Currently provided: `asDefaultProps` and `asPropTypes`.  Example:

    import * as React from "react";
    import * as PropTypes from "prop-types";
    import { asDefaultProps, asPropTypes } from "./index";

    class MyComponentClass extends React.Component<{name: string}> {
        static defaultProps = asDefaultProps(MyComponent)({
            name: "Matt"
        });
        static propTypes = asPropTypes(MyComponent)({
            name: PropTypes.string.isRequired
        });
    }
